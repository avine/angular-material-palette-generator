import { Component, ViewEncapsulation } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'pg-palette-gen-logo',
  host: { class: 'pg-palette-gen-logo' },
  imports: [MatIconModule, MatTooltipModule],
  templateUrl: './palette-gen-logo.component.html',
  styleUrl: './palette-gen-logo.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class PaletteGenLogoComponent {}
