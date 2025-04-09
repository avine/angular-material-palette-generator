import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutModule } from '.';

@Component({
  selector: 'app-router-layout',
  imports: [RouterOutlet, LayoutModule],
  template: `
    <app-layout>
      <router-outlet />
    </app-layout>
  `,
  encapsulation: ViewEncapsulation.None,
})
export class RouterLayoutComponent {}
