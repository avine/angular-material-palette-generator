import { createRequire } from 'node:module';
import { dirname } from 'node:path';

// Palette data extracted from `mat.theme()` of the `@angular/material` version installed in the root project.
//
// How it works:
//  1. Each tone of each palette receives a unique "marker" color: `rgb(<palette index>, <tone>, 7)`.
//  2. `mat.theme()` is compiled with these marker palettes, once for each theme type ("light" and "dark").
//  3. Reading the marker color of each emitted `--mat-sys-*` token gives the palette and tone it comes from.
//
// Unlike the CSS output of `ng generate @angular/material:theme-color` (based on Material Color Utilities),
// this reflects exactly what `mat.theme()` emits from Sass palettes, which is what this tool produces.

const require = createRequire(import.meta.url);

// `sass` is not a dependency of this package: it is loaded through `@angular/build` (a peer dependency)
// to guarantee that the palettes are compiled with the exact same Sass version as the Angular build,
// whatever the package manager.
//
// Note: to switch this workspace to pnpm, also add a `pnpm-workspace.yaml` file at the root of the repository.
const requireFromAngularBuild = createRequire(require.resolve('@angular/build/package.json'));
const { compileString } = requireFromAngularBuild('sass') as typeof import('sass');

// Directory containing `@angular/material` (and its `@angular/cdk` peer dependency), used as Sass load path
const MATERIAL_LOAD_PATH = dirname(dirname(dirname(require.resolve('@angular/material/package.json'))));

// The index of each palette (starting at 1) is used as the red channel of its marker colors
const PALETTE_NAMES = ['primary', 'secondary', 'tertiary', 'neutral', 'neutral-variant', 'error'] as const;

type PaletteName = (typeof PALETTE_NAMES)[number];

const MARKER_BLUE_CHANNEL = 7;

const THEME_SCSS = `
@use 'sass:map';
@use 'sass:meta';
@use 'sass:list';
@use '@angular/material' as mat;

$_names: ${PALETTE_NAMES.map((name) => `'${name}'`).join(', ')};

@function _marker-palette($palette, $name) {
  $index: list.index($_names, $name);
  $result: ();
  @each $tone, $value in $palette {
    @if meta.type-of($value) != 'map' {
      $result: map.merge($result, ($tone: rgb($index, $tone, ${MARKER_BLUE_CHANNEL})));
    }
  }
  @return $result;
}

$_source: mat.$azure-palette;

$_rest: (
  secondary: _marker-palette(map.get($_source, secondary), 'secondary'),
  neutral: _marker-palette(map.get($_source, neutral), 'neutral'),
  neutral-variant: _marker-palette(map.get($_source, neutral-variant), 'neutral-variant'),
  error: _marker-palette(map.get($_source, error), 'error'),
);

$_primary: map.merge(_marker-palette($_source, 'primary'), $_rest);
$_tertiary: map.merge(_marker-palette($_source, 'tertiary'), $_rest);

.tones {
  @each $name in $_names {
    $palette: $_source;
    @if map.has-key($_rest, $name) {
      $palette: map.get($_source, $name);
    }
    --#{$name}: #{map.keys(_marker-palette($palette, $name))};
  }
}

.light {
  @include mat.theme((color: (primary: $_primary, tertiary: $_tertiary, theme-type: light)));
}

.dark {
  @include mat.theme((color: (primary: $_primary, tertiary: $_tertiary, theme-type: dark)));
}
`;

const { css } = compileString(THEME_SCSS, { loadPaths: [MATERIAL_LOAD_PATH] });

const getRuleBody = (selector: string) => {
  const body = new RegExp(`\\${selector} \\{([^}]*)\\}`).exec(css)?.[1];
  if (body === undefined) {
    throw new Error(`Unable to find "${selector}" rule in compiled CSS`);
  }
  return body;
};

const toMarkerHex = (paletteIndex: number, tone: number) =>
  '#' + [paletteIndex, tone, MARKER_BLUE_CHANNEL].map((channel) => channel.toString(16).padStart(2, '0')).join('');

// ----- Sass palettes -----

const tonesBody = getRuleBody('.tones');

export const sassPaletteMap = Object.fromEntries(
  PALETTE_NAMES.map((name, index) => {
    const tones = new RegExp(`--${name}: ([^;]+);`).exec(tonesBody)?.[1].split(',').map(Number);
    if (!tones) {
      throw new Error(`Unable to find tones of "${name}" palette`);
    }
    return [name, Object.fromEntries(tones.map((tone) => [tone, toMarkerHex(index + 1, tone)]))];
  }),
) as Record<PaletteName, Record<number, string>>;

// ----- CSS tokens (grouped by the palette they come from) -----

type TokenMarker = { paletteName: PaletteName; color: string };

const getTokenMarkers = (selector: string) => {
  const markers = new Map<string, TokenMarker>();
  for (const [, token, red, green, blue] of getRuleBody(selector).matchAll(
    /--mat-sys-([a-z0-9-]+): rgb\((\d+), (\d+), (\d+)\);/g,
  )) {
    const paletteName = PALETTE_NAMES[Number(red) - 1];
    if (!paletteName || Number(blue) !== MARKER_BLUE_CHANNEL) {
      continue; // Not a color token (elevation, shape, ...)
    }
    markers.set(token, { paletteName, color: toMarkerHex(Number(red), Number(green)) });
  }
  return markers;
};

const lightMarkers = getTokenMarkers('.light');
const darkMarkers = getTokenMarkers('.dark');

export const cssPaletteMap = Object.fromEntries(PALETTE_NAMES.map((name) => [name, {}])) as Record<
  PaletteName,
  Record<string, [string, string]>
>;

for (const [token, light] of lightMarkers) {
  const dark = darkMarkers.get(token);
  if (dark?.paletteName !== light.paletteName) {
    throw new Error(`Token "${token}" does not come from the same palette in light and dark modes`);
  }
  cssPaletteMap[light.paletteName][token] = [light.color, dark.color];
}
