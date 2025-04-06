import { Component, computed, inject, signal, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { PaletteGenService } from '../palette-gen';
import { PaletteGenFormValue } from '../palette-gen-form';
import { PaletteGenPreviewComponent } from '../palette-gen-preview';
import { PaletteGenPreviewPaletteMatch } from '../palette-gen-preview/palette-gen-preview.types';
import { PaletteMode, PaletteName } from '../palette-matching';

@Component({
  selector: 'pl-palette-gen-content',
  host: { class: 'pl-palette-gen-content' },
  imports: [
    MatButtonModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
    MatTooltipModule,
    PaletteGenPreviewComponent,
  ],
  templateUrl: './palette-gen-content.component.html',
  styleUrl: './palette-gen-content.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class PaletteGenContentComponent {
  protected service = inject(PaletteGenService);

  // ----- Mirror -----

  protected formValueMirror = signal<PaletteGenFormValue | undefined>(undefined);

  protected setMirror() {
    this.formValueMirror.set(this.service.formValue());
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

  protected paletteName = signal<PaletteName | undefined>(undefined);

  protected paletteNameOptions: { value: PaletteName | undefined; label: string }[] = [
    { value: undefined, label: '-' },
    { value: 'primary', label: 'Primary' },
    { value: 'secondary', label: 'Secondary' },
    { value: 'tertiary', label: 'Tertiary' },
    { value: 'neutral', label: 'Neutral' },
    { value: 'neutral-variant', label: 'Neutral variant' },
    { value: 'error', label: 'Error' },
  ];

  protected paletteMode = signal<PaletteMode>('light');

  protected paletteModeOptions: { value: PaletteMode; label: string }[] = [
    { value: 'light', label: 'Light' },
    { value: 'dark', label: 'Dark' },
  ];

  protected paletteMatch = computed<PaletteGenPreviewPaletteMatch>(() => ({
    name: this.paletteName(),
    mode: this.paletteMode(),
  }));
}
