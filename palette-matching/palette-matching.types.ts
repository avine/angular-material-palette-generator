import type { sassPaletteMap } from './palette-matching.constants.ts';

export type PaletteName = keyof typeof sassPaletteMap;

export type PaletteMode = 'light' | 'dark';

export type PaletteTokensMap = Record<number, string[]>;

export type PaletteMatching = Record<PaletteMode, PaletteTokensMap>;

export type PaletteMatchingMap = Record<PaletteName, PaletteMatching>;
