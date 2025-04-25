import { PaletteMode, PaletteName } from './palette-matching';

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
