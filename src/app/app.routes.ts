import { Routes } from '@angular/router';
import { PaletteGenDemoComponent } from './palette-gen-demo/palette-gen-demo.component';
import { RouterLayoutComponent } from './shared/layout/router-layout.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: PaletteGenDemoComponent,
  },

  {
    path: 'demo',
    component: RouterLayoutComponent,
    children: [
      {
        path: 'overlay',
        loadComponent: () => import('./palette-gen-overlay-demo/palette-gen-overlay-demo.component'),
      },
      {
        path: 'cubic-bezier-control',
        loadComponent: () => import('./cubic-bezier-control-demo/cubic-bezier-control-demo.component'),
      },
      {
        path: 'content',
        loadComponent: () => import('./content-demo/content-demo.component'),
      },
    ],
  },

  {
    path: '**',
    redirectTo: '/',
  },
];
