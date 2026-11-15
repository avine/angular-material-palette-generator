import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { PaletteGenFormAnchor, PaletteGenFormValue } from './palette-gen-form.types';
import { hexColorValidator, toneValidator } from './palette-gen-form.validator';

const getPaletteGenAnchorForm = () =>
  new FormGroup({
    color: new FormControl('', { nonNullable: true, validators: [Validators.required, hexColorValidator] }),
    tone: new FormControl<number | null>(null, { validators: [toneValidator] }),
  });

export const getPaletteGenForm = () =>
  new FormGroup({
    // Note: `Validators.minLength` ignores empty arrays, while `Validators.required` rejects them
    anchors: new FormArray([getPaletteGenAnchorForm()], { validators: [Validators.required] }),
    neutral: new FormControl(false, { nonNullable: true }),
  });

export type PaletteGenForm = ReturnType<typeof getPaletteGenForm>;

/**
 * Set the value of the form, adding or removing anchor controls as needed.
 * Like `FormGroup.setValue`, throws an error if the structure of the value does not match the form.
 */
export const setPaletteGenFormValue = (form: PaletteGenForm, value: PaletteGenFormValue) => {
  const { anchors } = form.controls;
  const anchorsLength = Array.isArray(value?.anchors) ? value.anchors.length : 0;

  while (anchors.length < anchorsLength) {
    anchors.push(getPaletteGenAnchorForm(), { emitEvent: false });
  }
  while (anchors.length > anchorsLength) {
    anchors.removeAt(anchors.length - 1, { emitEvent: false });
  }
  form.setValue(value);
};

/** Return the value if it has the structure of a form value and passes the form validators, `null` otherwise. */
export const validatePaletteGenFormValue = (value: unknown): PaletteGenFormValue | null => {
  try {
    const form = getPaletteGenForm();
    setPaletteGenFormValue(form, value as PaletteGenFormValue); // Throws an error if the structure is invalid
    return form.valid ? (value as PaletteGenFormValue) : null;
  } catch {
    return null;
  }
};

export const parsePaletteGenFormValue = (value: string): PaletteGenFormValue | null => {
  try {
    return validatePaletteGenFormValue(JSON.parse(value));
  } catch {
    return null;
  }
};

const paletteGenFormAnchorsEqual = (a: PaletteGenFormAnchor, b: PaletteGenFormAnchor) =>
  a.color === b.color && a.tone === b.tone;

export const paletteGenFormValuesEqual = (a: PaletteGenFormValue, b: PaletteGenFormValue) =>
  a.neutral === b.neutral &&
  a.anchors.length === b.anchors.length &&
  a.anchors.every((anchor, i) => paletteGenFormAnchorsEqual(anchor, b.anchors[i]));
