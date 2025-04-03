import Color from 'colorjs.io';
import { cubicBezierFactory } from '../cubic-bezier';
import { PaletteGenFormValue } from '../palette-gen-form';

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
