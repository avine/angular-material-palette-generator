import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CubicBezierParams } from '../cubic-bezier';
import { PaletteGenFormValue } from './palette-gen-form.types';
import { hexColorValidator } from './palette-gen-form.validator';

const defaultColor = '#666666';

const getDefaultParams = (): CubicBezierParams => ({ p1x: 0, p1y: 0, p2x: 1, p2y: 1 });

export const getPaletteGenForm = () =>
  new FormGroup({
    color: new FormControl(defaultColor, [Validators.required, hexColorValidator]),
    start: new FormControl(0, [Validators.required]),
    end: new FormControl(100, [Validators.required]),
    params: new FormControl(getDefaultParams()),
    reverse: new FormControl(false),
    neutral: new FormControl(false),
  });

export const parsePaletteGenFormValue = (value: string): PaletteGenFormValue | null => {
  try {
    const formValue = JSON.parse(value);
    getPaletteGenForm().setValue(formValue); // This will throw an error if the JSON is invalid
    return formValue;
  } catch {
    return null;
  }
};
