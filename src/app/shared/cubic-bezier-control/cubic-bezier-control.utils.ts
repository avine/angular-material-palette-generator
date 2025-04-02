import { Point } from '@angular/cdk/drag-drop';
import { CubicBezierParams } from '../cubic-bezier';
import { CubicBezierControlColors } from './cubic-bezier-control.types';

export type CubicBezierParamsToPointsConfig = {
  params: CubicBezierParams;
  size: number;
};

export const cubicBezierParamsToPoints = ({
  params: { p1x, p1y, p2x, p2y },
  size,
}: CubicBezierParamsToPointsConfig): { p1: Point; p2: Point } => {
  return {
    p1: {
      x: p1x * size,
      y: size - p1y * size,
    },
    p2: {
      x: p2x * size,
      y: size - p2y * size,
    },
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
  y: Math.round(1000 - (1000 * (point.y - container.y)) / size) / 1000,
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

  line() {
    this.ctx.beginPath();
    this.ctx.moveTo(0, this.canvasSize);
    this.ctx.lineWidth = 3;
    this.ctx.lineCap = 'round';
    this.ctx.lineTo(this.canvasSize, 0);
    this.ctx.strokeStyle = this.colors.lineColor;
    this.ctx.stroke();
    return this;
  }

  curve(interpolate: (x: number) => number) {
    this.ctx.beginPath();
    this.ctx.moveTo(0, this.canvasSize);
    this.ctx.lineWidth = 3;
    this.ctx.lineCap = 'round';
    for (let step = 0; step <= this.canvasSize; step += 1) {
      this.ctx.lineTo(step, (1 - interpolate(step / this.canvasSize)) * this.canvasSize);
    }
    this.ctx.strokeStyle = this.colors.curveColor;
    this.ctx.stroke();
    return this;
  }

  sticks(params: CubicBezierParams) {
    this.ctx.beginPath();
    this.ctx.lineWidth = 1;
    this.ctx.lineCap = 'round';

    this.ctx.moveTo(0, this.canvasSize);
    this.ctx.lineTo(this.canvasSize * params.p1x, this.canvasSize * (1 - params.p1y));

    this.ctx.moveTo(this.canvasSize, 0);
    this.ctx.lineTo(this.canvasSize * params.p2x, this.canvasSize * (1 - params.p2y));

    this.ctx.strokeStyle = this.colors.stickColor;
    this.ctx.stroke();
    return this;
  }
}
