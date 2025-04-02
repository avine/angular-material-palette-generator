import { Point } from '@angular/cdk/drag-drop';
import { CubicBezierParams } from '../cubic-bezier';

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

export type ClearCanvasConfig = {
  ctx: CanvasRenderingContext2D;
  canvasSize: number;
};

export const clearCanvas = ({ ctx, canvasSize }: ClearCanvasConfig) => ctx.clearRect(0, 0, canvasSize, canvasSize);

// --------------------

export type LineToCanvasConfig = {
  ctx: CanvasRenderingContext2D;
  canvasSize: number;
  lineColor: string;
};

export const renderLineToCanvas = ({ ctx, canvasSize, lineColor }: LineToCanvasConfig) => {
  ctx.beginPath();
  ctx.moveTo(0, canvasSize);
  ctx.lineWidth = 3;
  ctx.lineCap = 'round';
  ctx.lineTo(canvasSize, 0);
  ctx.strokeStyle = lineColor;
  ctx.stroke();
};

// --------------------

export type CubicBezierToCanvasConfig = {
  ctx: CanvasRenderingContext2D;
  canvasSize: number;
  curveColor: string;
  cubicBezier: (x: number) => number;
};

export const renderCubicBezierToCanvas = ({ ctx, canvasSize, curveColor, cubicBezier }: CubicBezierToCanvasConfig) => {
  ctx.beginPath();
  ctx.moveTo(0, canvasSize);
  ctx.lineWidth = 3;
  ctx.lineCap = 'round';
  ctx.setLineDash([]);
  for (let step = 0; step <= canvasSize; step += 1) {
    ctx.lineTo(step, (1 - cubicBezier(step / canvasSize)) * canvasSize);
  }
  ctx.strokeStyle = curveColor;
  ctx.stroke();
};

// --------------------

export type PointSticksToCanvasConfig = {
  ctx: CanvasRenderingContext2D;
  canvasSize: number;
  stickColor: string;
  params: CubicBezierParams;
};

export const renderPointSticksToCanvas = ({ ctx, canvasSize, stickColor, params }: PointSticksToCanvasConfig) => {
  ctx.beginPath();

  ctx.moveTo(0, canvasSize);
  ctx.lineWidth = 1;
  ctx.lineCap = 'round';
  ctx.lineTo(canvasSize * params.p1x, canvasSize * (1 - params.p1y));

  ctx.moveTo(canvasSize, 0);
  ctx.lineWidth = 1;
  ctx.lineCap = 'round';
  ctx.lineTo(canvasSize * params.p2x, canvasSize * (1 - params.p2y));

  ctx.strokeStyle = stickColor;
  ctx.stroke();
};
