import { AbstractControl, ValidationErrors } from '@angular/forms';
import { getPaletteTones } from '../palette-gen.config';

export const HEX_COLOR_REGEXP = /^#?([0-9abcdef]{3}|[0-9abcdef]{6})$/i;

export const HEX_COLOR_ERROR_KEY = 'hexColor';

export const hexColorValidator = (control: AbstractControl): ValidationErrors | null =>
  (control.value as string | null | undefined)?.match(HEX_COLOR_REGEXP) ? null : { [HEX_COLOR_ERROR_KEY]: true };

/** Normalize a valid hex color to its 6-digit lowercase form with `#` (e.g. `36C` -> `#3366cc`), or return it as is. */
export const normalizeHexColor = (color: string): string => {
  const digits = HEX_COLOR_REGEXP.exec(color)?.[1]?.toLowerCase();
  if (!digits) {
    return color;
  }
  return '#' + (digits.length === 3 ? [...digits].map((digit) => digit + digit).join('') : digits);
};

export const TONE_ERROR_KEY = 'tone';

/**
 * Accept `null` (color pinned at its own tone) or one of the tones of the palette.
 * The tones depend on the `neutral` control of the root form, which must revalidate this control when it changes.
 */
export const paletteToneValidator = (control: AbstractControl): ValidationErrors | null => {
  const tone = control.value as number | null;
  const neutral = control.root.get('neutral')?.value === true;
  return tone === null || getPaletteTones(neutral).includes(tone) ? null : { [TONE_ERROR_KEY]: true };
};
