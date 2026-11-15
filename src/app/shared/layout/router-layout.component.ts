import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutComponent } from './layout.component';

@Component({
  selector: 'app-router-layout',
  imports: [RouterOutlet, LayoutComponent],
  template: `
    <app-layout>
      <router-outlet />
    </app-layout>
  `,
  changeDetection: ChangeDetectionStrategy.Eager,
  encapsulation: ViewEncapsulation.None,
})
export class RouterLayoutComponent {}
