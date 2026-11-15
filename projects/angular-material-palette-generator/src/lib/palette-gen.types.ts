import { PaletteIssue } from './palette-gen-engine/palette-gen-engine.types';
import { PaletteMode, PaletteName } from './palette-matching/palette-matching.types';

export type PaletteGenData = {
  list: PaletteGenDataListItem[];
  colorMap: Record<number, string>;
  issues: PaletteIssue[];
};

export type PaletteGenDataListItem = {
  percentage: number;
  color: string;

  /** `true` when the color is exactly the color of an anchor pinned at this tone. */
  anchored: boolean;
};

export type PaletteGenState = {
  name: PaletteName;
  mode: PaletteMode;
};
