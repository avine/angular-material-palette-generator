import { Component, ViewEncapsulation } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'pg-palette-gen-logo',
  host: { class: 'pg-palette-gen-logo' },
  imports: [MatIconModule],
  templateUrl: './palette-gen-logo.component.html',
  styleUrl: './palette-gen-logo.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class PaletteGenLogoComponent {}
