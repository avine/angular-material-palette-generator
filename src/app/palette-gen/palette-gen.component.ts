import { Component, inject, signal, TemplateRef, viewChild, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import {
  PaletteGenContentComponent,
  PaletteGenFormComponent,
  PaletteGenImportComponent,
  PaletteGenService,
  PaletteGenSnapshotsComponent,
} from 'angular-material-palette-generator';
import { LayoutModule } from '../shared/layout';
import { ThemeService } from '../shared/theme';

@Component({
  selector: 'app-palette-gen',
  host: { class: 'app-palette-gen' },
  imports: [
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatSidenavModule,
    PaletteGenContentComponent,
    PaletteGenFormComponent,
    PaletteGenImportComponent,
    PaletteGenSnapshotsComponent,
    LayoutModule,
  ],
  templateUrl: './palette-gen.component.html',
  styleUrl: './palette-gen.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class PaletteGenComponent {
  private paletteGenService = inject(PaletteGenService);

  // ----- Reset dialog -----

  private resetDialog = inject(MatDialog);

  private resetTemplate = viewChild.required<TemplateRef<unknown>>('resetTemplate');

  protected openResetDialog() {
    this.resetDialog
      .open(this.resetTemplate(), { width: '420px' })
      .beforeClosed()
      .subscribe((reset: boolean) => !reset || this.paletteGenService.reset());
  }

  // ----- Toggle sidenav -----

  sidenavOpened = signal<boolean>(true);

  protected toggleSidenav() {
    this.sidenavOpened.update((opened) => !opened);
  }

  // ----- Service configuration -----

  constructor() {
    this.paletteGenService.controlSize.set(200); // Should be the same value as in `palette-gen.component.scss`.
    this.paletteGenService.refreshCanvasOn(inject(ThemeService).theme);
  }
}
