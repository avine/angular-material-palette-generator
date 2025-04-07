import { cssPaletteMap, sassPaletteMap } from './palette-matching.constants.ts';
import type { PaletteMatching, PaletteMatchingMap, PaletteTokensMap } from './palette-matching.types.ts';

const reverseSassPalette = (sassPalette: Record<number, string>): Record<string, number> =>
  Object.fromEntries(Object.entries(sassPalette).map(([index, color]) => [color, parseInt(index)]));

const sassPaletteMapReversed = Object.fromEntries(
  Object.entries(sassPaletteMap).map(([paletteName, sassPalette]) => [paletteName, reverseSassPalette(sassPalette)]),
);

export const PALETTE_MATCHING_ERRORS: string[] = [];

export const PALETTE_MATCHING_MAP = Object.fromEntries(
  Object.entries(cssPaletteMap).map(([paletteName, cssPalette]) => {
    const paletteMatching: PaletteMatching = {
      light: {},
      dark: {},
    };

    const addToken = (map: PaletteTokensMap, token: string, color: string) => {
      const percentage: number | undefined = sassPaletteMapReversed[paletteName][color];
      if (percentage === undefined) {
        PALETTE_MATCHING_ERRORS.push(`"${color}" is missing in "${paletteName}" Sass palette!`);
        return;
      }
      map[percentage] ??= [];
      map[percentage].push(token);
    };

    Object.entries(cssPalette).forEach(([token, [lightColor, darkColor]]) => {
      addToken(paletteMatching.light, token, lightColor);
      addToken(paletteMatching.dark, token, darkColor);
    });

    return [paletteName, paletteMatching];
  }),
) as PaletteMatchingMap;
