import { LayoutComponent } from './layout.component';
import { LayoutFooterActionDirective, LayoutHeaderActionDirective } from './layout.directives';

export const LayoutModule = [LayoutComponent, LayoutFooterActionDirective, LayoutHeaderActionDirective];

export * from './router-layout.component';
