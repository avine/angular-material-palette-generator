import { TitleCasePipe } from '@angular/common';
import { Component, computed, inject, signal, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { PaletteGenFormValue } from '../palette-gen-form';
import { PaletteGenOverviewComponent } from '../palette-gen-overview';
import { PaletteGenPreviewComponent } from '../palette-gen-preview';
import { PaletteGenRendererComponent } from '../palette-gen-renderer';
import { PaletteGenSelectorComponent } from '../palette-gen-selector';
import { PaletteGenShowcaseComponent } from '../palette-gen-showcase';
import { PaletteGenService } from '../palette-gen.service';
import { PaletteMatchingConfig } from '../palette-matching';

@Component({
  selector: 'pg-palette-gen-content',
  host: { class: 'pg-palette-gen-content' },
  imports: [
    TitleCasePipe,
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
    MatTooltipModule,
    PaletteGenOverviewComponent,
    PaletteGenPreviewComponent,
    PaletteGenRendererComponent,
    PaletteGenSelectorComponent,
    PaletteGenShowcaseComponent,
  ],
  templateUrl: './palette-gen-content.component.html',
  styleUrl: './palette-gen-content.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class PaletteGenContentComponent {
  protected service = inject(PaletteGenService);

  // ----- View -----

  viewList = ['palette', 'overview', 'component'] as const;

  view = signal<(typeof this.viewList)[number]>('palette');

  // ----- Mirror -----

  protected formValueMirror = signal<PaletteGenFormValue | undefined>(undefined);

  protected setMirror() {
    this.formValueMirror.set(this.service.formValue()());
  }

  protected unsetMirror() {
    this.formValueMirror.set(undefined);
  }

  // ----- Compact -----

  protected compact = signal(false);

  protected compactAction = computed(() => (this.compact() ? 'Expand preview' : 'Reduce preview'));

  protected toggleCompact() {
    this.compact.update((compact) => !compact);
  }

  // ----- Preview match -----

  protected matchingConfig = computed<PaletteMatchingConfig>(() => ({
    name: this.service.paletteName(),
    mode: this.service.paletteMode(),
  }));
}
