import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { PaletteIssue } from '../palette-gen-engine/palette-gen-engine.types';
import { PaletteGenFormAnchor, PaletteGenFormValue } from './palette-gen-form.types';
import { hexColorValidator, paletteToneValidator } from './palette-gen-form.validator';

const getPaletteGenAnchorForm = () =>
  new FormGroup({
    color: new FormControl('', { nonNullable: true, validators: [Validators.required, hexColorValidator] }),
    tone: new FormControl<number | null>(null, { validators: [paletteToneValidator] }),
  });

export const getPaletteGenForm = () => {
  const form = new FormGroup({
    // Note: `Validators.minLength` ignores empty arrays, while `Validators.required` rejects them
    anchors: new FormArray([getPaletteGenAnchorForm()], { validators: [Validators.required] }),
    neutral: new FormControl(false, { nonNullable: true }),
  });

  // The available tones depend on the `neutral` control
  form.controls.neutral.valueChanges.subscribe(() =>
    form.controls.anchors.controls.forEach(({ controls }) => controls.tone.updateValueAndValidity()),
  );

  return form;
};

export type PaletteGenForm = ReturnType<typeof getPaletteGenForm>;

/** Add an empty anchor (the form stays invalid until its color is set). */
export const addPaletteGenFormAnchor = (form: PaletteGenForm) => form.controls.anchors.push(getPaletteGenAnchorForm());

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

/** Sort anchors: anchors pinned at their own tone first, then anchors pinned at a tone, by tone. */
const sortPaletteGenFormAnchors = (anchors: PaletteGenFormAnchor[]) =>
  [...anchors].sort((a, b) => (a.tone ?? -1) - (b.tone ?? -1));

/**
 * Pin the color at the given tone or, if a color is already pinned at this tone, unpin it.
 * The last anchor of the palette can not be unpinned.
 */
export const togglePaletteGenFormAnchor = (
  formValue: PaletteGenFormValue,
  tone: number,
  color: string,
): PaletteGenFormValue => {
  const anchors = formValue.anchors.filter((anchor) => anchor.tone !== tone);

  if (anchors.length === formValue.anchors.length) {
    return { ...formValue, anchors: sortPaletteGenFormAnchors([...anchors, { color, tone }]) };
  }
  return anchors.length === 0 ? formValue : { ...formValue, anchors };
};

/** Tones of anchors pinned at their own tone are not integers. */
const formatTone = (tone: number) => (Number.isInteger(tone) ? `${tone}` : tone.toFixed(1));

export const formatPaletteIssue = (issue: PaletteIssue): string => {
  switch (issue.type) {
    case 'duplicate-tone':
      return `Several colors are pinned at tone ${issue.tone}.`;
    case 'tone-out-of-range':
      return `Tone ${issue.tone} is out of range (0-100).`;
    case 'lightness-order':
      return `The colors pinned at tones ${issue.tones.map(formatTone).join(' and ')} are not ordered by lightness.`;
    case 'non-monotonic':
      return `The lightness decreases at tone ${issue.tone}.`;
  }
};
