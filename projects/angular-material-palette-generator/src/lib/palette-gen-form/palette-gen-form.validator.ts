import { AbstractControl, ValidationErrors } from '@angular/forms';

export const HEX_COLOR_REGEXP = /^#?([0-9abcdef]{3}|[0-9abcdef]{6})$/i;

export const HEX_COLOR_ERROR_KEY = 'hexColor';

export const hexColorValidator = (control: AbstractControl): ValidationErrors | null =>
  (control.value as string | null | undefined)?.match(HEX_COLOR_REGEXP) ? null : { [HEX_COLOR_ERROR_KEY]: true };

export const TONE_ERROR_KEY = 'tone';

/** Accept `null` (tone not set) or an integer between 0 and 100. */
export const toneValidator = (control: AbstractControl): ValidationErrors | null => {
  const value = control.value as unknown;
  return value === null || (Number.isInteger(value) && (value as number) >= 0 && (value as number) <= 100)
    ? null
    : { [TONE_ERROR_KEY]: true };
};
