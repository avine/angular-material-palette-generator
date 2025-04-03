import { Injectable, signal } from '@angular/core';
import { PaletteGenFormValue } from '../palette-gen-form';

@Injectable({
  providedIn: 'root',
})
export class PaletteGenService {
  formValue = signal<PaletteGenFormValue | undefined>(undefined);

  formValueMirror = signal<PaletteGenFormValue | undefined>(undefined);

  formValueImport = signal<PaletteGenFormValue | undefined>(undefined);

  formValueSnapshot = signal<PaletteGenFormValue | undefined>(undefined);
}
