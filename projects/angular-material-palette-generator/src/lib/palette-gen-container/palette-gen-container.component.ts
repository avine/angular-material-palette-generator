import { Component, inject, signal, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTooltipModule } from '@angular/material/tooltip';
import { PaletteGenContentComponent } from '../palette-gen-content/palette-gen-content.component';
import { PaletteGenFormComponent } from '../palette-gen-form/palette-gen-form.component';
import { PaletteGenImportComponent } from '../palette-gen-import/palette-gen-import.component';
import { PaletteGenLogoComponent } from '../palette-gen-logo/palette-gen-logo.component';
import { PaletteGenShowcaseComponent } from '../palette-gen-showcase/palette-gen-showcase.component';
import { PaletteGenSnapshotsComponent } from '../palette-gen-snapshots/palette-gen-snapshots.component';
import { PaletteGenService } from '../palette-gen.service';

@Component({
  selector: 'pg-palette-gen-container',
  host: {
    class: 'pg-palette-gen-container',
    '[style.--pg-palette-gen-container-size]': 'service.controlSize() + "px"',
  },
  imports: [
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatTooltipModule,
    PaletteGenContentComponent,
    PaletteGenFormComponent,
    PaletteGenImportComponent,
    PaletteGenLogoComponent,
    PaletteGenShowcaseComponent,
    PaletteGenSnapshotsComponent,
  ],
  templateUrl: './palette-gen-container.component.html',
  styleUrl: './palette-gen-container.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class PaletteGenContainerComponent {
  protected service = inject(PaletteGenService);

  protected drawerOpened = signal(true);

  protected toggleDrawer() {
    this.drawerOpened.update((open) => !open);
  }
}
