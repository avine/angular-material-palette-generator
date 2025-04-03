import { Component, inject, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ThemeService } from '../theme/theme.service';

@Component({
  selector: 'app-theme-switcher',
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './theme-switcher.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class ThemeSwitcherComponent {
  protected themeService = inject(ThemeService);
}
