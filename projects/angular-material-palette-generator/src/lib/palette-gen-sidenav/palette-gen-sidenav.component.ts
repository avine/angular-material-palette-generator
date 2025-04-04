import { Component, inject } from '@angular/core';
import { PaletteGenService } from '../palette-gen';
import { ColorGenFormComponent } from '../palette-gen-form';
import { PaletteGenImportComponent } from '../palette-gen-import';

@Component({
  selector: 'pl-palette-gen-sidenav',
  imports: [ColorGenFormComponent, PaletteGenImportComponent],
  templateUrl: './palette-gen-sidenav.component.html',
})
export class PaletteGenSidenavComponent {
  protected service = inject(PaletteGenService);
}
