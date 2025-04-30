import { Routes } from '@angular/router';
import { PaletteGenComponent } from './palette-gen/palette-gen.component';
import { RouterLayoutComponent } from './shared/layout/router-layout.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: PaletteGenComponent,
  },

  {
    path: 'demo',
    component: RouterLayoutComponent,
    children: [
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
