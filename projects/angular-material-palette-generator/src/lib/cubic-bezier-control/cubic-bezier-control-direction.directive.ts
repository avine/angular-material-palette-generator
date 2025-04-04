import { Directive, output } from '@angular/core';
import { CubicBezierControlDirection } from './cubic-bezier-control.types';

@Directive({
  selector: '[plCubicBezierControlDirection]',
  host: {
    '(keydown.ArrowUp)': 'direction.emit("up")',
    '(keydown.ArrowRight)': 'direction.emit("right")',
    '(keydown.ArrowDown)': 'direction.emit("down")',
    '(keydown.ArrowLeft)': 'direction.emit("left")',
  },
})
export class CubicBezierControlDirectionDirective {
  direction = output<CubicBezierControlDirection>();
}
