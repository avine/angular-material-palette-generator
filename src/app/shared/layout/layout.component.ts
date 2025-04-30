import { booleanAttribute, Component, input, ViewEncapsulation } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-layout',
  host: { class: 'app-layout' },
  imports: [MatIconModule, FooterComponent, HeaderComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class LayoutComponent {
  fullScreen = input(false, { transform: booleanAttribute });

  footerLess = input(false, { transform: booleanAttribute });
}
