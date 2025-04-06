import { cssPalettes, sassPalettes } from './palette-mappings.constants';

const reversePaletteMap = (paletteMap: Record<number, string>): Record<string, number> =>
  Object.fromEntries(Object.entries(paletteMap).map(([index, color]) => [color, parseInt(index)]));

const sassPalettesReversed = Object.fromEntries(
  Object.entries(sassPalettes).map(([paletteName, paletteMap]) => [paletteName, reversePaletteMap(paletteMap)]),
);

export type PaletteMapping = {
  light: Record<number, string[]>;
  dark: Record<number, string[]>;
};

export const PALETTE_MAPPINGS: Record<string, PaletteMapping> = Object.fromEntries(
  Object.entries(cssPalettes).map(([paletteName, paletteMap]) => {
    const paletteMapping: PaletteMapping = {
      light: {} as Record<number, string[]>,
      dark: {} as Record<number, string[]>,
    };

    Object.entries(paletteMap).forEach(([cssVarName, [lightColor, darkColor]]) => {
      const lightIndex = sassPalettesReversed[paletteName][lightColor];
      paletteMapping.light[lightIndex] ??= [];
      paletteMapping.light[lightIndex].push(cssVarName);

      const darkIndex = sassPalettesReversed[paletteName][darkColor];
      paletteMapping.dark[darkIndex] ??= [];
      paletteMapping.dark[darkIndex].push(cssVarName);
    });

    return [paletteName, paletteMapping];
  }),
);
