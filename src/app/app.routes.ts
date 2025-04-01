import { Routes } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { PaletteGenComponent } from './shared/palette-gen';

export const routes: Routes = [
  {
    path: '',
    component: PaletteGenComponent,
  },
  {
    path: 'demo',
    component: DemoComponent,
  },
];
