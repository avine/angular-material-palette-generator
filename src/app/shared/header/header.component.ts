import { Component, model, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { ThemeSwitcherComponent } from '../theme-switcher/theme-switcher.component';

@Component({
  selector: 'app-header',
  host: { class: 'app-header' },
  imports: [RouterLink, MatButtonModule, MatIconModule, ThemeSwitcherComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent {
  sidenavOpened = model.required<boolean>();

  protected toggleSidenav() {
    this.sidenavOpened.update((opened) => !opened);
  }
}
