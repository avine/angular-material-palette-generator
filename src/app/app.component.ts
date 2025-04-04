import { Component, inject, signal, ViewEncapsulation } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { CssColorObserverService } from 'angular-material-palette-generator';
import { HeaderComponent } from './shared/header/header.component';
import { ThemeService } from './shared/theme';

@Component({
  selector: 'app-root',
  host: {
    class: 'app-root',
    '[style.--app-root-header-height]': 'headerHeight + "px"',
    '[style.--app-root-footer-height]': 'footerHeight + "px"',
  },
  imports: [MatSidenavModule, RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  sidenavOpened = signal(true);

  headerHeight = 64;

  footerHeight = 64;

  constructor() {
    inject(CssColorObserverService).refreshOn(inject(ThemeService).theme);
  }
}
