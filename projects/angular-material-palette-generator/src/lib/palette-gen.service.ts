import { Injectable, Signal, signal } from '@angular/core';
import { PaletteGenFormValue } from './palette-gen-form';
import { PALETTE_FORM_CONTROL_SIZE_DEFAULT } from './palette-gen.config';

@Injectable({
  providedIn: 'root',
})
export class PaletteGenService {
  formValue = signal<PaletteGenFormValue | undefined>(undefined);

  controlSize = signal(PALETTE_FORM_CONTROL_SIZE_DEFAULT);

  refreshCanvas?: Signal<unknown>;

  refreshCanvasOn(trigger: Signal<unknown>) {
    this.refreshCanvas = trigger;
  }
}
