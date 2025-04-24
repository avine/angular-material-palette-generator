export type PaletteName = 'primary' | 'secondary' | 'tertiary' | 'neutral' | 'neutral-variant' | 'error';

// -----

export type PaletteMode = 'light' | 'dark';

// -----

export type PaletteTokenMap = Record<number, string[]>;

export type PaletteTokenMatching = Record<PaletteMode, PaletteTokenMap>;

export type PaletteTokenMatchingMap = Record<PaletteName, PaletteTokenMatching>;

// -----

export type PalettePercentageMap = Record<string, number>;

export type PalettePercentageMatching = Record<PaletteMode, PalettePercentageMap>;

export type PalettePercentageMatchingMap = Record<PaletteName, PalettePercentageMatching>;
