import { Component, signal } from '@angular/core';
import { CubicBezierControlComponent } from '../shared/cubic-bezier-control';

@Component({
  selector: 'app-demo',
  imports: [CubicBezierControlComponent],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.scss',
})
export class DemoComponent {
  disabled = signal(false);

  toggle() {
    this.disabled.update((d) => !d);
  }
}
