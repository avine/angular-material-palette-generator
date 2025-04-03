import { Routes } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { PaletteGenContentComponent } from './shared/palette-gen-content';
import { PaletteGenSidenavComponent } from './shared/palette-gen-sidenav';

export const routes: Routes = [
  {
    path: '',
    component: PaletteGenContentComponent,
  },
  {
    path: '',
    component: PaletteGenSidenavComponent,
    outlet: 'sidenav',
  },
  {
    path: 'demo',
    component: DemoComponent,
  },
];
