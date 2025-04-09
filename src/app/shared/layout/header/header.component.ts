import { Component, ViewEncapsulation } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { ThemeSwitcherComponent } from '../../theme-switcher/theme-switcher.component';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-header',
  host: { class: 'app-header' },
  imports: [RouterLink, MatIconModule, ThemeSwitcherComponent, MenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent {}
