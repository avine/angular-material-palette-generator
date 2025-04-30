import { Component, inject, ViewEncapsulation } from '@angular/core';
import { PaletteGenContainerComponent } from 'angular-material-palette-generator';
import { LayoutComponent } from '../shared/layout/layout.component';
import { ThemeService } from '../shared/theme';

@Component({
  selector: 'app-palette-gen',
  host: { class: 'app-palette-gen' },
  imports: [PaletteGenContainerComponent, LayoutComponent],
  templateUrl: './palette-gen.component.html',
  styleUrl: './palette-gen.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class PaletteGenComponent {
  protected themeService = inject(ThemeService);
}
