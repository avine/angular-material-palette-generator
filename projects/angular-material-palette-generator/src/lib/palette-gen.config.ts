import { PaletteGenFormValue } from './palette-gen-form/palette-gen-form.types';
import { PaletteName } from './palette-matching/palette-matching.types';

export const PALETTE_FORM_CONTROL_SIZE_DEFAULT = 260;

export const MATERIAL_PALETTE_PERCENTAGES_MAP = {
  // Works for Material `primary`, `secondary`, `tertiary`, `neutral-variant` and `error` palettes
  default: [0, 10, 20, 25, 30, 35, 40, 50, 60, 70, 80, 90, 95, 98, 99, 100],

  // Works for Material `neutral` palette
  neutral: [0, 4, 6, 10, 12, 17, 20, 22, 24, 25, 30, 35, 40, 50, 60, 70, 80, 87, 90, 92, 94, 95, 96, 98, 99, 100],
};

export const getPaletteTones = (neutral: boolean): readonly number[] =>
  MATERIAL_PALETTE_PERCENTAGES_MAP[neutral ? 'neutral' : 'default'];

/** Form value of a palette going through a key color, pinned at its own tone. */
export const buildPaletteGenFormValue = (color: string, neutral = false): PaletteGenFormValue => ({
  anchors: [{ color, tone: null }],
  neutral,
});

// Match `$azure-palette` from https://github.com/angular/components/blob/main/src/material/core/theming/_palettes.scss
export const FORM_VALUE_MAP_DEFAULT: Record<PaletteName, PaletteGenFormValue> = {
  primary: buildPaletteGenFormValue('#005cbb'),
  secondary: buildPaletteGenFormValue('#565e71'),
  tertiary: buildPaletteGenFormValue('#343dff'),
  neutral: buildPaletteGenFormValue('#5e5e62', true),
  'neutral-variant': buildPaletteGenFormValue('#5b5e66'),
  error: buildPaletteGenFormValue('#ba1a1a'),
};
