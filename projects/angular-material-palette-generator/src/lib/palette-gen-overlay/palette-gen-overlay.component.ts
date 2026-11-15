import { Component, DestroyRef, inject, model, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { PaletteGenContentComponent } from '../palette-gen-content/palette-gen-content.component';
import { PaletteGenFormComponent } from '../palette-gen-form/palette-gen-form.component';
import { PaletteGenImportComponent } from '../palette-gen-import/palette-gen-import.component';
import { PaletteGenLogoComponent } from '../palette-gen-logo/palette-gen-logo.component';
import { PaletteGenRendererService } from '../palette-gen-renderer/palette-gen-renderer.service';
import { PaletteGenShowcaseComponent } from '../palette-gen-showcase/palette-gen-showcase.component';
import { PaletteGenSnapshotsComponent } from '../palette-gen-snapshots/palette-gen-snapshots.component';
import { PaletteGenService } from '../palette-gen.service';

@Component({
  selector: 'pg-palette-gen-overlay',
  host: {
    class: 'pg-palette-gen-overlay',
    '[style.--pg-palette-gen-overlay-control-size]': 'service.controlSize() + "px"',
  },
  imports: [
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    PaletteGenContentComponent,
    PaletteGenFormComponent,
    PaletteGenImportComponent,
    PaletteGenLogoComponent,
    PaletteGenShowcaseComponent,
    PaletteGenSnapshotsComponent,
  ],
  templateUrl: './palette-gen-overlay.component.html',
  styleUrl: './palette-gen-overlay.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class PaletteGenOverlayComponent {
  protected service = inject(PaletteGenService);

  protected rendererService = inject(PaletteGenRendererService);

  state = model({ modal: false, details: false });

  constructor() {
    this.rendererService.enablePageSharing();

    inject(DestroyRef).onDestroy(() => {
      this.rendererService.disablePageSharing();
    });
  }

  protected toggleModal() {
    this.state.update(({ modal, details }) => ({ modal: !modal, details }));
  }

  protected toggleDetails() {
    this.state.update(({ modal, details }) => ({ modal, details: !details }));
  }
}
