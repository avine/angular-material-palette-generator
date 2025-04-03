import { Routes } from '@angular/router';
import { ContentDemoComponent } from './content-demo/content-demo.component';
import { DemoComponent } from './demo/demo.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PaletteGenContentComponent } from './shared/palette-gen-content';
import { ColorGenGuideComponent } from './shared/palette-gen-guide';
import { PaletteGenSidenavComponent } from './shared/palette-gen-sidenav';

export const routes: Routes = [
  {
    path: '',
    component: PaletteGenContentComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    component: PaletteGenSidenavComponent,
    outlet: 'sidenav',
  },
  {
    path: '',
    pathMatch: 'full',
    component: FooterComponent,
    outlet: 'footer',
  },

  {
    path: 'guide',
    component: ColorGenGuideComponent,
  },
  {
    path: 'demo',
    component: DemoComponent,
  },
  {
    path: 'content-demo',
    component: ContentDemoComponent,
  },
];
