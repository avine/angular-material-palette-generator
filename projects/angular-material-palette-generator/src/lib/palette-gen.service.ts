import { computed, Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { PaletteGenFormValue } from './palette-gen-form';
import { PALETTE_FORM_CONTROL_SIZE_DEFAULT } from './palette-gen.config';
import { PaletteGenData } from './palette-gen.types';
import { buildPaletteGenData, buildPaletteGenFormValue } from './palette-gen.utils';
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

  dataMap: Record<PaletteName, Signal<PaletteGenData>> = {
    primary: computed(() => buildPaletteGenData(this.formValueMap.primary())),
    secondary: computed(() => buildPaletteGenData(this.formValueMap.secondary())),
    tertiary: computed(() => buildPaletteGenData(this.formValueMap.tertiary())),
    neutral: computed(() => buildPaletteGenData(this.formValueMap.neutral())),
    'neutral-variant': computed(() => buildPaletteGenData(this.formValueMap['neutral-variant']())),
    error: computed(() => buildPaletteGenData(this.formValueMap.error())),
  };

  controlSize = signal(PALETTE_FORM_CONTROL_SIZE_DEFAULT);

  refreshCanvas?: Signal<unknown>;

  refreshCanvasOn(trigger: Signal<unknown>) {
    this.refreshCanvas = trigger;
  }
}
