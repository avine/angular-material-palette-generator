import { inject, provideAppInitializer } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';

export const provideIcons = () =>
  provideAppInitializer(() => {
    // Set font class according to the NPM package installed: "@material-symbols/font-600"
    // Values: 'material-symbols-outlined', 'material-symbols-rounded' or 'material-symbols-sharp'.
    // For more infos: https://fonts.google.com/icons
    inject(MatIconRegistry).setDefaultFontSetClass('material-symbols-outlined');
  });
