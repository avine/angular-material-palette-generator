export type PaletteName = 'primary' | 'secondary' | 'tertiary' | 'neutral' | 'neutral-variant' | 'error';

export type PaletteMode = 'light' | 'dark';

export type PaletteTokensMap = Record<number, string[]>;

export type PaletteMatching = Record<PaletteMode, PaletteTokensMap>;

export type PaletteMatchingMap = Record<PaletteName, PaletteMatching>;
