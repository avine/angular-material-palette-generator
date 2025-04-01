import colorConvert from 'color-convert';
import { cubicBezierFactory } from '../cubic-bezier';
import { PaletteGenFormValue } from '../palette-gen-form';

export const percentageToRgbFactory = ({
  color,
  params,
  reverse,
}: Pick<PaletteGenFormValue, 'color' | 'params' | 'reverse'>) => {
  const [h, l] = colorConvert.hex.hsl(color);

  const cubicBezier = cubicBezierFactory(params);

  const s = reverse
    ? (percent: number) => 100 - cubicBezier(percent / 100) * 100
    : (percent: number) => cubicBezier(percent / 100) * 100;

  return (percent: number) => '#' + colorConvert.hsl.hex(h, l, s(percent)).toLowerCase();
};
