import { Component, signal, ViewEncapsulation } from '@angular/core';
import { CubicBezierControlComponent } from 'angular-material-palette-generator';

@Component({
  selector: 'app-demo',
  imports: [CubicBezierControlComponent],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class DemoComponent {
  disabled = signal(false);

  toggle() {
    this.disabled.update((d) => !d);
  }
}
