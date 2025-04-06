import { cssPalettes, sassPalettes } from './palette-mapping.constants';

const sassPalettesReversed = Object.fromEntries(
  Object.entries(sassPalettes).map(([paletteName, paletteMap]) => {
    const paletteMapReversed: Record<string, number> = Object.fromEntries(
      Object.entries(paletteMap).map(([index, color]) => [color, parseInt(index)]),
    );
    return [paletteName, paletteMapReversed];
  }),
);

export const paletteMapping = Object.fromEntries(
  Object.entries(cssPalettes).map(([paletteName, paletteMap]) => {
    const output = {
      light: {} as Record<number, string[]>,
      dark: {} as Record<number, string[]>,
    };

    Object.entries(paletteMap).forEach(([cssVarName, [lightColor, darkColor]]) => {
      const lightIndex = sassPalettesReversed[paletteName][lightColor];
      output.light[lightIndex] ??= [];
      output.light[lightIndex].push(cssVarName);

      const darkIndex = sassPalettesReversed[paletteName][darkColor];
      output.dark[darkIndex] ??= [];
      output.dark[darkIndex].push(cssVarName);
    });

    return [paletteName, output];
  }),
);

console.log(paletteMapping);
