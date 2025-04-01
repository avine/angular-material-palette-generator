import { Point } from '@angular/cdk/drag-drop';
import { CubicBezierParams } from '../cubic-bezier';

export type CubicBezierParamsToPointsConfig = {
  params: CubicBezierParams;
  baseSize: number;
};

export const cubicBezierParamsToPoints = ({
  params: { p1x, p1y, p2x, p2y },
  baseSize,
}: CubicBezierParamsToPointsConfig): { p1: Point; p2: Point } => {
  return {
    p1: {
      x: p1x * baseSize,
      y: baseSize - p1y * baseSize,
    },
    p2: {
      x: p2x * baseSize,
      y: baseSize - p2y * baseSize,
    },
  };
};

// --------------------

export type CanvasPointToCubicBezierParamConfig = {
  point: DOMRect;
  container: DOMRect;
  baseSize: number;
};

export const canvasPointToCubicBezierParam = ({ point, container, baseSize }: CanvasPointToCubicBezierParamConfig) => ({
  x: Math.round((1000 * (point.x - container.x)) / baseSize) / 1000,
  y: Math.round(1000 - (1000 * (point.y - container.y)) / baseSize) / 1000,
});

// --------------------

export type CubicBezierToCanvasConfig = {
  ctx: CanvasRenderingContext2D;
  canvasSize: number;
  cubicBezier: (x: number) => number;
  lineColor: string;
};

export const renderCubicBezierToCanvas = ({ ctx, canvasSize, cubicBezier, lineColor }: CubicBezierToCanvasConfig) => {
  ctx.clearRect(0, 0, canvasSize, canvasSize);
  ctx.beginPath();
  ctx.moveTo(0, canvasSize);

  ctx.lineWidth = 3;
  ctx.lineCap = 'round';
  for (let step = 0; step <= canvasSize; step += 1) {
    ctx.lineTo(step, (1 - cubicBezier(step / canvasSize)) * canvasSize);
  }

  ctx.strokeStyle = lineColor;
  ctx.stroke();
};
