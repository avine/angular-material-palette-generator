import { DOCUMENT } from '@angular/common';
import { computed, effect, inject, Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { getPaletteGenForm, PaletteGenFormValue } from './palette-gen-form';
import { FORM_VALUE_MAP_DEFAULT, PALETTE_FORM_CONTROL_SIZE_DEFAULT } from './palette-gen.config';
import { PaletteGenData } from './palette-gen.types';
import { buildPaletteGenData } from './palette-gen.utils';
import { PaletteMode, PaletteName } from './palette-matching';

@Injectable({
  providedIn: 'root',
})
export class PaletteGenService {
  private localStorage = inject(DOCUMENT).defaultView?.localStorage;

  paletteMode = signal<PaletteMode>('light');

  paletteName = signal<PaletteName>('primary');

  formValueMap: Record<PaletteName, WritableSignal<PaletteGenFormValue>> = {
    primary: signal<PaletteGenFormValue>(FORM_VALUE_MAP_DEFAULT.primary),
    secondary: signal<PaletteGenFormValue>(FORM_VALUE_MAP_DEFAULT.secondary),
    tertiary: signal<PaletteGenFormValue>(FORM_VALUE_MAP_DEFAULT.tertiary),
    neutral: signal<PaletteGenFormValue>(FORM_VALUE_MAP_DEFAULT.neutral),
    'neutral-variant': signal<PaletteGenFormValue>(FORM_VALUE_MAP_DEFAULT['neutral-variant']),
    error: signal<PaletteGenFormValue>(FORM_VALUE_MAP_DEFAULT.error),
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

  // ----- storage -----

  constructor() {
    this.restoreFormValueMap();

    effect(() => this.storeFormValueMap());
  }

  readonly storageKey = 'pg-palette-gen-form-value-map';

  private restoreFormValueMap() {
    const value = this.localStorage?.getItem(this.storageKey);
    if (!value) {
      return;
    }
    try {
      const formValueMap: Record<PaletteName, PaletteGenFormValue> = JSON.parse(value);

      const form = getPaletteGenForm();
      Object.entries(formValueMap).forEach(([paletteName, formValue]) => {
        form.setValue(formValue); // Validate each `formValue`

        this.formValueMap[paletteName as PaletteName].set(formValue);
      });
    } catch (err) {
      this.localStorage?.removeItem(this.storageKey);
      console.error('PaletteGenService: unable to restore value', value, err);
    }
  }

  private storeFormValueMap() {
    const formValueMap = Object.entries(this.formValueMap).reduce(
      (map, [paletteName, formValue]) => {
        map[paletteName as PaletteName] = formValue();
        return map;
      },
      {} as Record<PaletteName, PaletteGenFormValue>,
    );
    this.localStorage?.setItem(this.storageKey, JSON.stringify(formValueMap));
  }
}
