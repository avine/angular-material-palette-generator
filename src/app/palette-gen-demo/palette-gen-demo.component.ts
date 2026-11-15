import { Component, inject, ViewEncapsulation } from '@angular/core';
import { PaletteGenContainerComponent } from 'angular-material-palette-generator';
import { LayoutComponent } from '../shared/layout/layout.component';
import { ThemeService } from '../shared/theme';

@Component({
  selector: 'app-palette-gen-demo',
  host: { class: 'app-palette-gen-demo' },
  imports: [PaletteGenContainerComponent, LayoutComponent],
  templateUrl: './palette-gen-demo.component.html',
  styleUrl: './palette-gen-demo.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class PaletteGenDemoComponent {
  protected themeService = inject(ThemeService);
}
