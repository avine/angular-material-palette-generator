import type { sassPaletteMap } from './palette-matching.constants.ts';

export type PaletteName = keyof typeof sassPaletteMap;

// -----

export type PaletteMode = 'light' | 'dark';

// -----

export type PalettePercentageMap = Record<number, string[]>;

export type PalettePercentageMatching = Record<PaletteMode, PalettePercentageMap>;

export type PalettePercentageMatchingMap = Record<PaletteName, PalettePercentageMatching>;

// -----

export type PaletteTokenMap = Record<string, number>;

export type PaletteTokenMatching = Record<PaletteMode, PaletteTokenMap>;

export type PaletteTokenMatchingMap = Record<PaletteName, PaletteTokenMatching>;
