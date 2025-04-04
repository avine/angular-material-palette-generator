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
  return {
    p1: { x: p1x * size, y: p1y * size },
    p2: { x: p2x * size, y: p2y * size },
  };
};

// --------------------

export type PointToCubicBezierParamConfig = {
  point: DOMRect;
  container: DOMRect;
  size: number;
};

export const pointToCubicBezierParam = ({ point, container, size }: PointToCubicBezierParamConfig) => ({
  x: Math.round((1000 * (point.x - container.x)) / size) / 1000,
  y: Math.round((1000 * (point.y - container.y)) / size) / 1000,
});

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
  { x, y }: { x: number; y: number },
  direction: CubicBezierControlDirection,
  delta: number,
): { x: number; y: number } => {
  switch (direction) {
    case 'up':
      return { x, y: Math.max(0, y - delta) };
    case 'right':
      return { x: Math.min(x + delta, 1), y };
    case 'down':
      return { x, y: Math.min(y + delta, 1) };
    case 'left':
      return { x: Math.max(0, x - delta), y };
  }
};

export const moveCubicBezierParams = (
  { p1x, p1y, p2x, p2y }: CubicBezierParams,
  p: 'p1' | 'p2',
  direction: CubicBezierControlDirection,
  delta = 0.01,
) => {
  let x: number;
  let y: number;
  if (p === 'p1') {
    x = p1x;
    y = p1y;
  } else {
    x = p2x;
    y = p2y;
  }

  const { x: movedX, y: movedY } = movePoint({ x, y }, direction, delta);
  if (p === 'p1') {
    return { p1x: movedX, p1y: movedY, p2x, p2y };
  } else {
    return { p1x, p1y, p2x: movedX, p2y: movedY };
  }
};
