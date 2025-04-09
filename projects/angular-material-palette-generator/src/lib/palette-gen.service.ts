import { Injectable, Signal, signal } from '@angular/core';
import { PaletteGenFormValue } from './palette-gen-form';
import { PALETTE_FORM_CONTROL_SIZE_DEFAULT } from './palette-gen.constants';

@Injectable({
  providedIn: 'root',
})
export class PaletteGenService {
  // ----- Form value -----

  formValue = signal<PaletteGenFormValue | undefined>(undefined);

  formValueSetter = signal<PaletteGenFormValue | undefined>(undefined);

  // ----- Form control size -----

  controlSize = signal(PALETTE_FORM_CONTROL_SIZE_DEFAULT);

  // ----- Canvas -----

  refreshCanvas?: Signal<unknown>;

  refreshCanvasOn(trigger: Signal<unknown>) {
    this.refreshCanvas = trigger;
  }
}
