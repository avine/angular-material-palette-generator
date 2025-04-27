import { DOCUMENT } from '@angular/common';
import { computed, effect, inject, Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { getPaletteGenForm, PaletteGenFormValue } from './palette-gen-form';
import { PaletteGenFormValueSnapshot } from './palette-gen-snapshots';
import { FORM_VALUE_MAP_DEFAULT, PALETTE_FORM_CONTROL_SIZE_DEFAULT } from './palette-gen.config';
import { PaletteGenData, PaletteGenState } from './palette-gen.types';
import { buildPaletteGenData } from './palette-gen.utils';
import { PALETTE_MODES, PALETTE_NAMES, PaletteMode, PaletteName } from './palette-matching';

// TODO: need to refactor this service...

// TODO: add a view to display all palettes in one place...

// TODO: add a global import...

@Injectable({
  providedIn: 'root',
})
export class PaletteGenService {
  private localStorage = inject(DOCUMENT).defaultView?.localStorage;

  paletteMode = signal<PaletteMode>('light');

  paletteName = signal<PaletteName>('primary');

  formValueMap = PALETTE_NAMES.reduce(
    (map, paletteName) => {
      map[paletteName] = signal(FORM_VALUE_MAP_DEFAULT[paletteName]);
      return map;
    },
    {} as Record<PaletteName, WritableSignal<PaletteGenFormValue>>,
  );

  formValue = computed(() => this.formValueMap[this.paletteName()]);

  dataMap = PALETTE_NAMES.reduce(
    (map, paletteName) => {
      map[paletteName] = computed(() => buildPaletteGenData(this.formValueMap[paletteName]()));
      return map;
    },
    {} as Record<PaletteName, Signal<PaletteGenData>>,
  );

  formValueSnapshotsMap = PALETTE_NAMES.reduce(
    (map, paletteName) => {
      map[paletteName] = signal([]);
      return map;
    },
    {} as Record<PaletteName, WritableSignal<PaletteGenFormValueSnapshot[]>>,
  );

  reset() {
    PALETTE_NAMES.forEach((name) => {
      this.formValueMap[name].set(FORM_VALUE_MAP_DEFAULT[name]);
      this.formValueSnapshotsMap[name].set([]);
    });
  }

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

    this.restoreFormValueSnapshotsMap();
    effect(() => this.storeFormValueSnapshotsMap());
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

  // ----- FormValueSnapshotsMap storage -----

  readonly formValueMapSnapshotsStorageKey = 'pg-palette-gen-service.form-value-snapshots-map';

  private restoreFormValueSnapshotsMap() {
    const value = this.localStorage?.getItem(this.formValueMapSnapshotsStorageKey);
    if (!value) {
      return;
    }
    try {
      const formValueSnapshotsMap: Record<PaletteName, PaletteGenFormValueSnapshot[]> = JSON.parse(value);

      const form = getPaletteGenForm();
      Object.entries(formValueSnapshotsMap).forEach(([paletteName, snapshots]) => {
        snapshots.forEach((snapshot) => form.setValue(JSON.parse(snapshot.value) as PaletteGenFormValue)); // Validate each `snapshot`

        this.formValueSnapshotsMap[paletteName as PaletteName].set(snapshots);
      });
    } catch (err) {
      this.localStorage?.removeItem(this.formValueMapSnapshotsStorageKey);
      console.error('PaletteGenService: unable to restore FormValueSnapshotsMap', value, err);
    }
  }

  private storeFormValueSnapshotsMap() {
    const formValueSnapshotsMap = Object.entries(this.formValueSnapshotsMap).reduce(
      (map, [paletteName, snapshots]) => {
        map[paletteName as PaletteName] = snapshots();
        return map;
      },
      {} as Record<PaletteName, PaletteGenFormValueSnapshot[]>,
    );
    this.localStorage?.setItem(this.formValueMapSnapshotsStorageKey, JSON.stringify(formValueSnapshotsMap));
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
