import { PalettePercentageMatchingMap } from './palette-matching.types';

// DO NOT MODIFY THE FOLLOWING OBJECT MANUALLY
// -------------------------------------------
// The content of following object has been generated from the script:
//    `<rootDir>/palette-matching/script.ts`
export const PALETTE_PERCENTAGE_MATCHING_MAP: PalettePercentageMatchingMap = {
  primary: {
    light: {
      '10': ['on-primary-container', 'on-primary-fixed'],
      '30': ['on-primary-fixed-variant'],
      '40': ['primary', 'surface-tint'],
      '80': ['inverse-primary', 'primary-fixed-dim'],
      '90': ['primary-container', 'primary-fixed'],
      '100': ['on-primary'],
    },
    dark: {
      '10': ['on-primary-fixed'],
      '20': ['on-primary'],
      '30': ['primary-container', 'on-primary-fixed-variant'],
      '40': ['inverse-primary'],
      '80': ['primary', 'primary-fixed-dim', 'surface-tint'],
      '90': ['on-primary-container', 'primary-fixed'],
    },
  },

  secondary: {
    light: {
      '10': ['on-secondary-container', 'on-secondary-fixed'],
      '30': ['on-secondary-fixed-variant'],
      '40': ['secondary'],
      '80': ['secondary-fixed-dim'],
      '90': ['secondary-container', 'secondary-fixed'],
      '100': ['on-secondary'],
    },
    dark: {
      '10': ['on-secondary-fixed'],
      '20': ['on-secondary'],
      '30': ['secondary-container', 'on-secondary-fixed-variant'],
      '80': ['secondary', 'secondary-fixed-dim'],
      '90': ['on-secondary-container', 'secondary-fixed'],
    },
  },

  tertiary: {
    light: {
      '10': ['on-tertiary-container', 'on-tertiary-fixed'],
      '30': ['on-tertiary-fixed-variant'],
      '40': ['tertiary'],
      '80': ['tertiary-fixed-dim'],
      '90': ['tertiary-container', 'tertiary-fixed'],
      '100': ['on-tertiary'],
    },
    dark: {
      '10': ['on-tertiary-fixed'],
      '20': ['on-tertiary'],
      '30': ['tertiary-container', 'on-tertiary-fixed-variant'],
      '80': ['tertiary', 'tertiary-fixed-dim'],
      '90': ['on-tertiary-container', 'tertiary-fixed'],
    },
  },

  neutral: {
    light: {
      '0': ['shadow', 'scrim'],
      '10': ['on-background', 'on-surface', 'neutral10'],
      '20': ['inverse-surface'],
      '87': ['surface-dim'],
      '90': ['surface-container-highest'],
      '92': ['surface-container-high'],
      '94': ['surface-container'],
      '95': ['inverse-on-surface'],
      '98': ['background', 'surface', 'surface-bright'],
      '100': ['surface-container-lowest'],
    },
    dark: {
      '0': ['shadow', 'scrim'],
      '4': ['surface-container-lowest'],
      '6': ['background', 'surface', 'surface-dim'],
      '10': ['neutral10'],
      '12': ['surface-container'],
      '17': ['surface-container-high'],
      '20': ['inverse-on-surface'],
      '22': ['surface-container-highest'],
      '24': ['surface-bright'],
      '90': ['on-background', 'on-surface', 'inverse-surface'],
    },
  },

  'neutral-variant': {
    light: {
      '20': ['neutral-variant20'],
      '30': ['on-surface-variant'],
      '50': ['outline'],
      '80': ['outline-variant'],
      '90': ['surface-variant'],
    },
    dark: {
      '20': ['neutral-variant20'],
      '30': ['surface-variant', 'outline-variant'],
      '60': ['outline'],
      '80': ['on-surface-variant'],
    },
  },

  error: {
    light: {
      '10': ['on-error-container'],
      '40': ['error'],
      '90': ['error-container'],
      '100': ['on-error'],
    },
    dark: {
      '20': ['on-error'],
      '30': ['error-container'],
      '80': ['error'],
      '90': ['on-error-container'],
    },
  },
};
