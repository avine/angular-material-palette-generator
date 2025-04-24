import { computed, Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { PaletteGenFormValue } from './palette-gen-form';
import { PALETTE_FORM_CONTROL_SIZE_DEFAULT } from './palette-gen.config';
import { buildPaletteGenFormValue } from './palette-gen.utils';
import { PaletteMode, PaletteName } from './palette-matching';

@Injectable({
  providedIn: 'root',
})
export class PaletteGenService {
  paletteMode = signal<PaletteMode>('light');

  paletteName = signal<PaletteName>('primary');

  formValueMap: Record<PaletteName, WritableSignal<PaletteGenFormValue>> = {
    primary: signal<PaletteGenFormValue>(buildPaletteGenFormValue('#005cbb')),
    secondary: signal<PaletteGenFormValue>(buildPaletteGenFormValue('#565e71')),
    tertiary: signal<PaletteGenFormValue>(buildPaletteGenFormValue('#343dff')),
    neutral: signal<PaletteGenFormValue>(buildPaletteGenFormValue('#5e5e62', true)),
    'neutral-variant': signal<PaletteGenFormValue>(buildPaletteGenFormValue('#5b5e66')),
    error: signal<PaletteGenFormValue>(buildPaletteGenFormValue('#ba1a1a')),
  };

  formValue = computed(() => this.formValueMap[this.paletteName()]);

  controlSize = signal(PALETTE_FORM_CONTROL_SIZE_DEFAULT);

  refreshCanvas?: Signal<unknown>;

  refreshCanvasOn(trigger: Signal<unknown>) {
    this.refreshCanvas = trigger;
  }
}
