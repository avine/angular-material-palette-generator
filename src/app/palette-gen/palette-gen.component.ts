import { Component, inject, signal, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import {
  PaletteGenContentComponent,
  PaletteGenService,
  PaletteGenSidenavComponent,
  PaletteGenSnapshotsComponent,
} from 'angular-material-palette-generator';
import { LayoutModule } from '../shared/layout';
import { ThemeService } from '../shared/theme';

@Component({
  selector: 'app-palette-gen',
  host: { class: 'app-palette-gen' },
  imports: [
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    PaletteGenContentComponent,
    PaletteGenSidenavComponent,
    PaletteGenSnapshotsComponent,
    LayoutModule,
  ],
  templateUrl: './palette-gen.component.html',
  styleUrl: './palette-gen.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class PaletteGenComponent {
  protected paletteGenService = inject(PaletteGenService);

  sidenavOpened = signal<boolean>(true);

  protected toggleSidenav() {
    this.sidenavOpened.update((opened) => !opened);
  }

  constructor() {
    this.paletteGenService.controlSize.set(200); // Should be the same value as in `palette-gen.component.scss`.
    this.paletteGenService.refreshCanvasOn(inject(ThemeService).theme);
  }
}
