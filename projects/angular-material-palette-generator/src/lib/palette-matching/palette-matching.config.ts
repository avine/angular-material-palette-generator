import { PalettePercentageMatchingMap, PaletteTokenMatchingMap } from './palette-matching.types';

// DO NOT MODIFY THE FOLLOWING OBJECTS MANUALLY
// --------------------------------------------
// The content of following objects has been generated from the script:
//    `<rootDir>/palette-matching/palette-matching.script.ts`

export const PALETTE_TOKEN_MATCHING_MAP: PaletteTokenMatchingMap = {
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

export const PALETTE_PERCENTAGE_MATCHING_MAP: PalettePercentageMatchingMap = {
  primary: {
    light: {
      'on-primary-container': 10,
      'on-primary-fixed': 10,
      'on-primary-fixed-variant': 30,
      primary: 40,
      'surface-tint': 40,
      'inverse-primary': 80,
      'primary-fixed-dim': 80,
      'primary-container': 90,
      'primary-fixed': 90,
      'on-primary': 100,
    },
    dark: {
      'on-primary-fixed': 10,
      'on-primary': 20,
      'primary-container': 30,
      'on-primary-fixed-variant': 30,
      'inverse-primary': 40,
      primary: 80,
      'primary-fixed-dim': 80,
      'surface-tint': 80,
      'on-primary-container': 90,
      'primary-fixed': 90,
    },
  },
  secondary: {
    light: {
      'on-secondary-container': 10,
      'on-secondary-fixed': 10,
      'on-secondary-fixed-variant': 30,
      secondary: 40,
      'secondary-fixed-dim': 80,
      'secondary-container': 90,
      'secondary-fixed': 90,
      'on-secondary': 100,
    },
    dark: {
      'on-secondary-fixed': 10,
      'on-secondary': 20,
      'secondary-container': 30,
      'on-secondary-fixed-variant': 30,
      secondary: 80,
      'secondary-fixed-dim': 80,
      'on-secondary-container': 90,
      'secondary-fixed': 90,
    },
  },
  tertiary: {
    light: {
      'on-tertiary-container': 10,
      'on-tertiary-fixed': 10,
      'on-tertiary-fixed-variant': 30,
      tertiary: 40,
      'tertiary-fixed-dim': 80,
      'tertiary-container': 90,
      'tertiary-fixed': 90,
      'on-tertiary': 100,
    },
    dark: {
      'on-tertiary-fixed': 10,
      'on-tertiary': 20,
      'tertiary-container': 30,
      'on-tertiary-fixed-variant': 30,
      tertiary: 80,
      'tertiary-fixed-dim': 80,
      'on-tertiary-container': 90,
      'tertiary-fixed': 90,
    },
  },
  neutral: {
    light: {
      shadow: 0,
      scrim: 0,
      'on-background': 10,
      'on-surface': 10,
      neutral10: 10,
      'inverse-surface': 20,
      'surface-dim': 87,
      'surface-container-highest': 90,
      'surface-container-high': 92,
      'surface-container': 94,
      'inverse-on-surface': 95,
      background: 98,
      surface: 98,
      'surface-bright': 98,
      'surface-container-lowest': 100,
    },
    dark: {
      shadow: 0,
      scrim: 0,
      'surface-container-lowest': 4,
      background: 6,
      surface: 6,
      'surface-dim': 6,
      neutral10: 10,
      'surface-container': 12,
      'surface-container-high': 17,
      'inverse-on-surface': 20,
      'surface-container-highest': 22,
      'surface-bright': 24,
      'on-background': 90,
      'on-surface': 90,
      'inverse-surface': 90,
    },
  },
  'neutral-variant': {
    light: {
      'neutral-variant20': 20,
      'on-surface-variant': 30,
      outline: 50,
      'outline-variant': 80,
      'surface-variant': 90,
    },
    dark: {
      'neutral-variant20': 20,
      'surface-variant': 30,
      'outline-variant': 30,
      outline: 60,
      'on-surface-variant': 80,
    },
  },
  error: {
    light: {
      'on-error-container': 10,
      error: 40,
      'error-container': 90,
      'on-error': 100,
    },
    dark: {
      'on-error': 20,
      'error-container': 30,
      error: 80,
      'on-error-container': 90,
    },
  },
};
