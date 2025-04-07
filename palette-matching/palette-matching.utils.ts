import { cssPaletteMap, sassPaletteMap } from './palette-matching.constants.ts';
import type {
  PalettePercentageMap,
  PalettePercentageMatching,
  PalettePercentageMatchingMap,
  PaletteTokenMatchingMap,
} from './palette-matching.types.ts';

const reverseSassPalette = (sassPalette: Record<number, string>): Record<string, number> =>
  Object.fromEntries(Object.entries(sassPalette).map(([index, color]) => [color, parseInt(index)]));

const sassPaletteMapReversed = Object.fromEntries(
  Object.entries(sassPaletteMap).map(([paletteName, sassPalette]) => [paletteName, reverseSassPalette(sassPalette)]),
);

// ----- Errors -----

export const PALETTE_MATCHING_ERRORS: string[] = [];

// ----- Percentage -----

export const PALETTE_PERCENTAGE_MATCHING_MAP = Object.fromEntries(
  Object.entries(cssPaletteMap).map(([paletteName, cssPalette]) => {
    const paletteMatching: PalettePercentageMatching = {
      light: {},
      dark: {},
    };

    const addPercentage = (map: PalettePercentageMap, token: string, color: string) => {
      const percentage: number | undefined = sassPaletteMapReversed[paletteName][color];
      if (percentage === undefined) {
        PALETTE_MATCHING_ERRORS.push(`"${color}" is missing in "${paletteName}" Sass palette!`);
        return;
      }
      map[percentage] ??= [];
      map[percentage].push(token);
    };

    Object.entries(cssPalette).forEach(([token, [lightColor, darkColor]]) => {
      addPercentage(paletteMatching.light, token, lightColor);
      addPercentage(paletteMatching.dark, token, darkColor);
    });

    return [paletteName, paletteMatching];
  }),
) as PalettePercentageMatchingMap;

// ----- Token -----

export const PALETTE_TOKEN_MATCHING_MAP = Object.fromEntries(
  Object.entries(PALETTE_PERCENTAGE_MATCHING_MAP).map(([paletteName, { light, dark }]) => {
    const getTokenMap = (map: PalettePercentageMap) =>
      Object.entries(map).reduce(
        (tokenMap, [percentage, tokens]) => {
          tokens.forEach((token) => (tokenMap[token] = parseInt(percentage)));
          return tokenMap;
        },
        {} as Record<string, number>,
      );

    return [paletteName, { light: getTokenMap(light), dark: getTokenMap(dark) }];
  }),
) as PaletteTokenMatchingMap;
