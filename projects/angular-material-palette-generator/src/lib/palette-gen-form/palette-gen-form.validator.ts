import { AbstractControl, ValidationErrors } from '@angular/forms';

export const HEX_COLOR_REGEXP = /^#?([0-9abcdef]{3}|[0-9abcdef]{6})$/i;

export const HEX_COLOR_ERROR_KEY = 'hexColor';

export const hexColorValidator = (control: AbstractControl): ValidationErrors | null =>
  (control.value as string | null | undefined)?.match(HEX_COLOR_REGEXP) ? null : { [HEX_COLOR_ERROR_KEY]: true };
