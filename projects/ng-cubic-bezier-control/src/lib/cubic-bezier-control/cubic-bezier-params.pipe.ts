import { Pipe, PipeTransform } from '@angular/core';
import { CubicBezierParams } from '../cubic-bezier/cubic-bezier.types';

@Pipe({
  name: 'cubicBezierParams',
})
export class CubicBezierParamsPipe implements PipeTransform {
  transform({ p1x, p1y, p2x, p2y }: CubicBezierParams, p: 'p1' | 'p2') {
    let x: number;
    let y: number;
    if (p === 'p1') {
      x = p1x;
      y = p1y;
    } else {
      x = p2x;
      y = p2y;
    }
    return `x: ${x.toFixed(2)} - y: ${y.toFixed(2)}`;
  }
}
