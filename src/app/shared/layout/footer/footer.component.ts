import { Component, ViewEncapsulation } from '@angular/core';
import { libVersion } from '../../../lib.version';

@Component({
  selector: 'app-footer',
  host: { class: 'app-footer' },
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class FooterComponent {
  protected libVersion = libVersion;
}
