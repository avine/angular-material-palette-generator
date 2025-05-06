import Color from 'colorjs.io';
import { cubicBezierFactory } from './cubic-bezier/cubic-bezier';
import { CubicBezierParams } from './cubic-bezier/cubic-bezier.types';
import { PaletteGenFormValue } from './palette-gen-form/palette-gen-form.types';
import { MATERIAL_PALETTE_PERCENTAGES_MAP } from './palette-gen.config';
import { PaletteGenData, PaletteGenDataListItem } from './palette-gen.types';

export const buildPaletteGenFormValue = (
  color: string,
  params: CubicBezierParams = { p1x: 0, p1y: 0, p2x: 1, p2y: 1 },
  neutral = false,
): PaletteGenFormValue => ({
  color,
  start: 0,
  end: 100,
  params,
  reverse: false,
  neutral,
});

const percentageToRgbFactory = ({
  color,
  params,
  reverse,
}: Pick<PaletteGenFormValue, 'color' | 'params' | 'reverse'>) => {
  const cubicBezier = cubicBezierFactory(params);
  const lightness = reverse
    ? (percent: number) => 1 - cubicBezier(percent / 100)
    : (percent: number) => cubicBezier(percent / 100);

  const _color = new Color(color);

  return (percent: number) => {
    _color.oklch['l'] = lightness(percent);
    const hex = _color.toString({ format: 'hex' });

    if (hex.length === 4) {
      const [, r, g, b] = hex.split('');
      return `#${r}${r}${g}${g}${b}${b}`;
    }
    return hex;
  };
};

export const buildPaletteGenData = (formValue: PaletteGenFormValue | undefined): PaletteGenData => {
  if (!formValue) {
    return { list: [], colorMap: {} };
  }
  const { color, start, end, params, reverse, neutral } = formValue;

  const percentages = MATERIAL_PALETTE_PERCENTAGES_MAP[neutral ? 'neutral' : 'default'];
  const percentageToRgb = percentageToRgbFactory({ color, params, reverse });

  const list = percentages
    .map((percentage) => ({
      percentage,
      adjustedPercentage: start + (percentage / 100) * (end - start),
    }))
    .map(({ percentage, adjustedPercentage }) => ({ percentage, color: percentageToRgb(adjustedPercentage) }));

  const colorMap = list.reduce(
    (map, { percentage, color }) => {
      map[percentage] = color;
      return map;
    },
    {} as Record<number, string>,
  );

  return { list, colorMap };
};

export const buildSassMapStringified = (formValue: PaletteGenFormValue, dataList: PaletteGenDataListItem[]) => {
  const settings = `  // ${JSON.stringify(formValue)}\n`;

  const sassMap = dataList.map(({ percentage, color }) => `  ${percentage}: ${color},\n`).join('');

  return settings + sassMap;
};
