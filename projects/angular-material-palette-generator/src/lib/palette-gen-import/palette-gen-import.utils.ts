import { PaletteGenFormValue } from '../palette-gen-form/palette-gen-form.types';
import { parsePaletteGenFormValue } from '../palette-gen-form/palette-gen-form.utils';
import { PaletteName } from '../palette-matching/palette-matching.types';

export const extractFormValueWrapper = (input: string | null | undefined) => {
  const formValuesStringified = (input ?? '')
    .split('\n')
    .filter((line) => line.includes('{')) // Find the line containing a stringified object...
    .map((line) => line.replace('//', '').trim()); // ...Remove the characters defining a Sass comment

  const formValues = formValuesStringified.map(parsePaletteGenFormValue).filter((formValue) => formValue !== null);

  switch (formValues.length) {
    case 6: {
      // Assuming we get the formValue map in order (primary, secondary, ...)
      return {
        type: 'formValueMap' as const,
        data: {
          primary: formValues[0],
          secondary: formValues[1],
          tertiary: formValues[2],
          neutral: formValues[3],
          'neutral-variant': formValues[4],
          error: formValues[5],
        } as Record<PaletteName, PaletteGenFormValue>,
      };
    }

    case 1: {
      // Assuming we get one formValue
      return {
        type: 'formValue' as const,
        data: formValues[0],
      };
    }

    default: {
      // Input is invalid
      return null;
    }
  }
};
