import CubicBezier from '@mapbox/unitbezier';
import { CubicBezierParams } from './cubic-bezier.types';

export const cubicBezierFactory = ({ p1x, p1y, p2x, p2y }: CubicBezierParams) => {
  const cubicBezier = new CubicBezier(p1x, p1y, p2x, p2y);
  return (x: number) => cubicBezier.solve(x);
};
