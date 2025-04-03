import { Component, inject } from '@angular/core';
import { ColorGenFormComponent } from '../palette-gen-form';
import { PaletteGenImportComponent } from '../palette-gen-import';
import { PaletteGenService } from '../palette-gen/palette-gen.service';

@Component({
  selector: 'app-palette-gen-sidenav',
  imports: [ColorGenFormComponent, PaletteGenImportComponent],
  templateUrl: './palette-gen-sidenav.component.html',
  styleUrl: './palette-gen-sidenav.component.scss',
})
export class PaletteGenSidenavComponent {
  protected service = inject(PaletteGenService);
}
