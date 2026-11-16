import { AbstractControl, ValidationErrors } from '@angular/forms';
import { getPaletteTones } from '../palette-gen.config';

export const HEX_COLOR_REGEXP = /^#?([0-9abcdef]{3}|[0-9abcdef]{6})$/i;

export const HEX_COLOR_ERROR_KEY = 'hexColor';

export const hexColorValidator = (control: AbstractControl): ValidationErrors | null =>
  (control.value as string | null | undefined)?.match(HEX_COLOR_REGEXP) ? null : { [HEX_COLOR_ERROR_KEY]: true };

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
