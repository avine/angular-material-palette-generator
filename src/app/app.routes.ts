import { Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { DemoComponent } from './demo/demo.component';
import { GuideComponent } from './guide';
import { PaletteGenComponent } from './palette-gen/palette-gen.component';
import { RouterLayoutComponent } from './shared/layout';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: PaletteGenComponent,
  },

  {
    path: 'doc',
    component: RouterLayoutComponent,
    children: [
      {
        path: 'guide',
        component: GuideComponent,
      },
      {
        path: 'bezier-control',
        component: DemoComponent,
      },
      {
        path: 'content',
        component: ContentComponent,
      },
    ],
  },

  {
    path: '**',
    redirectTo: '/',
  },
];
