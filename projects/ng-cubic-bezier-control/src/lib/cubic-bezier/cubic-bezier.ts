import { CubicBezierParams } from './cubic-bezier.types';
import BezierEasing from './cubic-bezier.utils';

export const cubicBezierFactory = ({ p1x, p1y, p2x, p2y }: CubicBezierParams) => {
  const cubicBezier = BezierEasing(p1x, p1y, p2x, p2y);
  return (x: number) => cubicBezier(x);
};
