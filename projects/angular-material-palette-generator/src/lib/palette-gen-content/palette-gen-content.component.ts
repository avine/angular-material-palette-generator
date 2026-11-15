import { TitleCasePipe } from '@angular/common';
import { Component, computed, effect, inject, signal, TemplateRef, viewChild, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { PaletteGenFormValue } from '../palette-gen-form/palette-gen-form.types';
import { PaletteGenOverviewComponent } from '../palette-gen-overview/palette-gen-overview.component';
import { PaletteGenPreviewComponent } from '../palette-gen-preview/palette-gen-preview.component';
import { PaletteGenRendererDirective } from '../palette-gen-renderer/palette-gen-renderer.directive';
import { PaletteGenSelectorAfterDirective } from '../palette-gen-selector/palette-gen-selector-after.directive';
import { PaletteGenSelectorComponent } from '../palette-gen-selector/palette-gen-selector.component';
import { PaletteGenService } from '../palette-gen.service';
import { PaletteMatchingConfig } from '../palette-matching/pipes/palette-matching-config.types';

@Component({
  selector: 'pg-palette-gen-content',
  host: { class: 'pg-palette-gen-content' },
  imports: [
    TitleCasePipe,
    MatButtonModule,
    MatButtonToggleModule,
    MatDialogModule,
    MatIconModule,
    MatTooltipModule,
    PaletteGenOverviewComponent,
    PaletteGenPreviewComponent,
    PaletteGenRendererDirective,
    PaletteGenSelectorAfterDirective,
    PaletteGenSelectorComponent,
  ],
  templateUrl: './palette-gen-content.component.html',
  styleUrl: './palette-gen-content.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class PaletteGenContentComponent {
  protected service = inject(PaletteGenService);

  // ----- View -----

  protected viewList = ['palette', 'overview', 'component'] as const;

  protected view = signal<(typeof this.viewList)[number]>('palette');

  // ----- Mirror -----

  protected formValueMirror = signal<PaletteGenFormValue | undefined>(undefined);

  protected setMirror() {
    this.formValueMirror.set(this.service.formValue()());
  }

  protected unsetMirror() {
    this.formValueMirror.set(undefined);
  }

  constructor() {
    effect(() => {
      this.service.paletteName();
      this.unsetMirror();
    });
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

  // ----- Reset dialog -----

  private resetDialog = inject(MatDialog);

  private resetTemplate = viewChild.required<TemplateRef<unknown>>('resetTemplate');

  protected openResetDialog() {
    this.resetDialog
      .open(this.resetTemplate(), { width: '420px' })
      .beforeClosed()
      .subscribe((reset: boolean) => !reset || this.service.reset());
  }
}
