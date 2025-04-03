import { Component, signal, ViewEncapsulation } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';

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
}
