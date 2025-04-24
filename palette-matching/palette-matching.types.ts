import type { sassPaletteMap } from './palette-matching.data.ts';

export type PaletteName = keyof typeof sassPaletteMap;

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
