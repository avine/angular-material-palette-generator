import { Directive, output } from '@angular/core';
import { CubicBezierControlDirection } from './cubic-bezier-control.types';

@Directive({
  selector: '[pgCubicBezierControlDirection]',
  host: {
    '(keydown.ArrowUp)': 'emit($event, "up")',
    '(keydown.ArrowRight)': 'emit($event, "right")',
    '(keydown.ArrowDown)': 'emit($event, "down")',
    '(keydown.ArrowLeft)': 'emit($event, "left")',
  },
})
export class CubicBezierControlDirectionDirective {
  direction = output<CubicBezierControlDirection>();

  protected emit(event: Event, direction: CubicBezierControlDirection) {
    event.preventDefault();
    this.direction.emit(direction);
  }
}
