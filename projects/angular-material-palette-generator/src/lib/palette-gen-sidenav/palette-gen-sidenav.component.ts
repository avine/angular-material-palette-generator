import { Component, inject, ViewEncapsulation } from '@angular/core';
import { ColorGenFormComponent } from '../palette-gen-form';
import { PaletteGenImportComponent } from '../palette-gen-import';
import { PaletteGenService } from '../palette-gen.service';

@Component({
  selector: 'pg-palette-gen-sidenav',
  host: {
    class: 'pg-palette-gen-sidenav',
    '[style.--pg-palette-gen-sidenav-control-size]': 'service.controlSize() + "px"',
  },
  imports: [ColorGenFormComponent, PaletteGenImportComponent],
  templateUrl: './palette-gen-sidenav.component.html',
  styleUrl: './palette-gen-sidenav.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class PaletteGenSidenavComponent {
  protected service = inject(PaletteGenService);
}
