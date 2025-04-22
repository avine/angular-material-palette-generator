import Color from 'colorjs.io';
import { cubicBezierFactory } from '../cubic-bezier';
import { PaletteGenFormValue } from '../palette-gen-form';
import { MATERIAL_PALETTE_PERCENTAGES_MAP } from './palette-gen-preview.config';
import { PaletteGenPreviewData } from './palette-gen-preview.types';

export const percentageToRgbFactory = ({
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

export const buildPaletteGenPreviewData = (formValue: PaletteGenFormValue | undefined): PaletteGenPreviewData => {
  if (!formValue) {
    return { list: [], percentageMap: {} };
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

  const percentageMap = list.reduce(
    (map, { percentage, color }) => {
      map[percentage] = color;
      return map;
    },
    {} as Record<number, string>,
  );

  return { list, percentageMap };
};
