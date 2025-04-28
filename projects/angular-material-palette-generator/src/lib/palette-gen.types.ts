import { PaletteMode, PaletteName } from './palette-matching/palette-matching.types';

export type PaletteGenData = {
  list: PaletteGenDataListItem[];
  colorMap: Record<number, string>;
};

export type PaletteGenDataListItem = {
  percentage: number;
  color: string;
};

export type PaletteGenState = {
  name: PaletteName;
  mode: PaletteMode;
};
