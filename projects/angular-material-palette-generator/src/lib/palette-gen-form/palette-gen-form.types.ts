import { CubicBezierParams } from '../cubic-bezier';

export type PaletteGenFormValue = {
  color: string;
  start: number;
  end: number;
  params: CubicBezierParams;
  reverse: boolean;
  neutral: boolean;
};
