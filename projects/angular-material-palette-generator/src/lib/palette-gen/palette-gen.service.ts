import { Injectable, Signal, signal } from '@angular/core';
import { PaletteGenFormValue } from '../palette-gen-form';

@Injectable({
  providedIn: 'root',
})
export class PaletteGenService {
  formValue = signal<PaletteGenFormValue | undefined>(undefined);

  formValueSetter = signal<PaletteGenFormValue | undefined>(undefined);

  refreshCanvas?: Signal<unknown>;

  refreshCanvasOn(trigger: Signal<unknown>) {
    this.refreshCanvas = trigger;
  }
}
