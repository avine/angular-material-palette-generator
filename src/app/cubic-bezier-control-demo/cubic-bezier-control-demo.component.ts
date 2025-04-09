import { JsonPipe } from '@angular/common';
import { Component, computed, signal, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { CubicBezierControlComponent, CubicBezierParams } from 'angular-material-palette-generator';

@Component({
  selector: 'app-cubic-bezier-control-demo',
  host: { class: 'app-cubic-bezier-control-demo' },
  imports: [JsonPipe, MatButtonModule, CubicBezierControlComponent],
  templateUrl: './cubic-bezier-control-demo.component.html',
  styleUrl: './cubic-bezier-control-demo.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export default class CubicBezierControlDemoComponent {
  disabled = signal(false);

  toggleDisabled() {
    this.disabled.update((d) => !d);
  }

  params = signal<CubicBezierParams>({ p1x: 0, p1y: 0, p2x: 1, p2y: 1 });

  paramsStringified = computed(() => {
    const { p1x, p1y, p2x, p2y } = this.params();
    return {
      p1x: p1x.toFixed(3),
      p1y: p1y.toFixed(3),
      p2x: p2x.toFixed(3),
      p2y: p2y.toFixed(3),
    };
  });
}
