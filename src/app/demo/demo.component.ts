import { Component, signal } from '@angular/core';
import { CubicBezierControlComponent } from 'angular-material-palette-generator';

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
