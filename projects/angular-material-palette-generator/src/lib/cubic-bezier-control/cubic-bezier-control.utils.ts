import { Point } from '@angular/cdk/drag-drop';
import { CubicBezierParams } from '../cubic-bezier';
import { CubicBezierControlColors, CubicBezierControlDirection } from './cubic-bezier-control.types';

export type CubicBezierParamsToPointsConfig = {
  params: CubicBezierParams;
  size: number;
};

export const cubicBezierParamsToPoints = ({
  params: { p1x, p1y, p2x, p2y },
  size,
}: CubicBezierParamsToPointsConfig): { p1: Point; p2: Point } => {
  const func = (x: number, y: number) => ({ x: x * size, y: y * size });
  return {
    p1: func(p1x, p1y),
    p2: func(p2x, p2y),
  };
};

// --------------------

export type PointToCubicBezierParamConfig = {
  point: DOMRect;
  container: DOMRect;
  size: number;
};

export const pointToCubicBezierParam = ({ point, container, size }: PointToCubicBezierParamConfig) => {
  const func = (_point: number, _container: number) => Math.round((1000 * (_point - _container)) / size) / 1000;
  return {
    x: func(point.x, container.x),
    y: func(point.y, container.y),
  };
};

// --------------------

export class CanvasHandler {
  constructor(
    protected ctx: CanvasRenderingContext2D,
    protected canvasSize: number,
    protected colors: CubicBezierControlColors,
  ) {}

  clear() {
    this.ctx.clearRect(0, 0, this.canvasSize, this.canvasSize);
    return this;
  }

  linear() {
    this.ctx.beginPath();
    this.ctx.moveTo(0, 0);
    this.ctx.lineWidth = 3;
    this.ctx.lineCap = 'round';
    this.ctx.lineTo(this.canvasSize, this.canvasSize);
    this.ctx.strokeStyle = this.colors.linearColor;
    this.ctx.stroke();
    return this;
  }

  curve(interpolate: (x: number) => number) {
    this.ctx.beginPath();
    this.ctx.moveTo(0, 0);
    this.ctx.lineWidth = 3;
    this.ctx.lineCap = 'round';
    for (let step = 0; step <= this.canvasSize; step += 1) {
      this.ctx.lineTo(step, interpolate(step / this.canvasSize) * this.canvasSize);
    }
    this.ctx.strokeStyle = this.colors.curveColor;
    this.ctx.stroke();
    return this;
  }

  sticks(params: CubicBezierParams) {
    this.ctx.beginPath();
    this.ctx.lineWidth = 1;
    this.ctx.lineCap = 'round';

    this.ctx.moveTo(0, 0);
    this.ctx.lineTo(this.canvasSize * params.p1x, this.canvasSize * params.p1y);

    this.ctx.moveTo(this.canvasSize, this.canvasSize);
    this.ctx.lineTo(this.canvasSize * params.p2x, this.canvasSize * params.p2y);

    this.ctx.strokeStyle = this.colors.stickColor;
    this.ctx.stroke();
    return this;
  }
}

// --------------------

const movePoint = (
  [x, y]: [x: number, y: number],
  direction: CubicBezierControlDirection,
  delta: number,
): [x: number, y: number] => {
  const more = (coord: number) => Math.min(coord + delta, 1);
  const less = (coord: number) => Math.max(0, coord - delta);
  switch (direction) {
    case 'up':
      return [x, less(y)];
    case 'right':
      return [more(x), y];
    case 'down':
      return [x, more(y)];
    case 'left':
      return [less(x), y];
  }
};

export const moveCubicBezierParams = (
  { p1x, p1y, p2x, p2y }: CubicBezierParams,
  p: 'p1' | 'p2',
  direction: CubicBezierControlDirection,
  delta = 0.01,
): CubicBezierParams => {
  if (p === 'p1') {
    const [x, y] = movePoint([p1x, p1y], direction, delta);
    return { p1x: x, p1y: y, p2x, p2y };
  } else {
    const [x, y] = movePoint([p2x, p2y], direction, delta);
    return { p1x, p1y, p2x: x, p2y: y };
  }
};
