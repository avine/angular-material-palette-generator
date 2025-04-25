import { DOCUMENT } from '@angular/common';
import { computed, effect, inject, Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { getPaletteGenForm, PaletteGenFormValue } from './palette-gen-form';
import { FORM_VALUE_MAP_DEFAULT, PALETTE_FORM_CONTROL_SIZE_DEFAULT } from './palette-gen.config';
import { PaletteGenData, PaletteGenState } from './palette-gen.types';
import { buildPaletteGenData } from './palette-gen.utils';
import { PALETTE_MODES, PALETTE_NAMES, PaletteMode, PaletteName } from './palette-matching';

@Injectable({
  providedIn: 'root',
})
export class PaletteGenService {
  private localStorage = inject(DOCUMENT).defaultView?.localStorage;

  paletteMode = signal<PaletteMode>('light');

  paletteName = signal<PaletteName>('primary');

  // TODO: allow the reset of this default value (removing the stored value)
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

  constructor() {
    this.restoreFormValueMap();
    effect(() => this.storeFormValueMap());

    this.restorePaletteState();
    effect(() => this.storePaletteState());
  }

  // ----- FormValueMap storage -----

  readonly formValueMapStorageKey = 'pg-palette-gen-service.form-value-map';

  private restoreFormValueMap() {
    const value = this.localStorage?.getItem(this.formValueMapStorageKey);
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
      this.localStorage?.removeItem(this.formValueMapStorageKey);
      console.error('PaletteGenService: unable to restore FormValueMap', value, err);
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
    this.localStorage?.setItem(this.formValueMapStorageKey, JSON.stringify(formValueMap));
  }

  // ----- PaletteState storage -----

  readonly paletteStateStorageKey = 'pg-palette-gen-service.palette-state';

  private restorePaletteState() {
    const value = this.localStorage?.getItem(this.paletteStateStorageKey);
    if (!value) {
      return;
    }
    try {
      const { mode, name }: PaletteGenState = JSON.parse(value);
      if (PALETTE_MODES.includes(mode) && PALETTE_NAMES.includes(name)) {
        this.paletteMode.set(mode);
        this.paletteName.set(name);
      } else {
        throw new Error('Invalid palette mode and/or name');
      }
    } catch (err) {
      this.localStorage?.removeItem(this.paletteStateStorageKey);
      console.error('PaletteGenService: unable to restore PaletteState', value, err);
    }
  }

  private storePaletteState() {
    const paletteState: PaletteGenState = {
      mode: this.paletteMode(),
      name: this.paletteName(),
    };
    this.localStorage?.setItem(this.paletteStateStorageKey, JSON.stringify(paletteState));
  }
}
