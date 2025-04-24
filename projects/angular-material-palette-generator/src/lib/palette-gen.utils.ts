import { PaletteGenFormValue } from './palette-gen-form';

export const buildPaletteGenFormValue = (color: string, neutral = false): PaletteGenFormValue => ({
  color,
  start: 0,
  end: 100,
  params: { p1x: 0, p1y: 0, p2x: 1, p2y: 1 },
  reverse: false,
  neutral,
});
