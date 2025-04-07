import { PaletteMode, PaletteName } from '../palette-matching.types';

export type PaletteMatchingConfig = {
  name: PaletteName | undefined;
  mode: PaletteMode;
};
