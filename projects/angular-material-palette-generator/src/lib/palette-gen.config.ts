import { PaletteGenFormValue } from './palette-gen-form/palette-gen-form.types';
import { buildPaletteGenFormValue } from './palette-gen.utils';
import { PaletteName } from './palette-matching/palette-matching.types';

export const PALETTE_FORM_CONTROL_SIZE_DEFAULT = 200; // This value depends on `--mat-sidenav-container-width` (palette-gen-container.component.scss)

export const MATERIAL_PALETTE_PERCENTAGES_MAP = {
  // Works for Material `primary`, `secondary`, `tertiary`, `neutral-variant` and `error` palettes
  default: [0, 10, 20, 25, 30, 35, 40, 50, 60, 70, 80, 90, 95, 98, 99, 100],

  // Works for Material `neutral` palette
  neutral: [0, 4, 6, 10, 12, 17, 20, 22, 24, 25, 30, 35, 40, 50, 60, 70, 80, 87, 90, 92, 94, 95, 96, 98, 99, 100],
};

// Match `$azure-palette` from https://github.com/angular/components/blob/main/src/material/core/theming/_palettes.scss
export const FORM_VALUE_MAP_DEFAULT: Record<PaletteName, PaletteGenFormValue> = {
  primary: buildPaletteGenFormValue('#005cbb', { p1x: 0, p1y: 0.21, p2x: 1, p2y: 1 }),
  secondary: buildPaletteGenFormValue('#565e71', { p1x: 0, p1y: 0.2, p2x: 1, p2y: 1 }),
  tertiary: buildPaletteGenFormValue('#343dff', { p1x: 0, p1y: 0.26, p2x: 1, p2y: 1 }),
  neutral: buildPaletteGenFormValue('#5e5e62', { p1x: 0, p1y: 0.2, p2x: 1, p2y: 1 }, true),
  'neutral-variant': buildPaletteGenFormValue('#5b5e66', { p1x: 0, p1y: 0.2, p2x: 1, p2y: 1 }),
  error: buildPaletteGenFormValue('#ba1a1a', { p1x: 0, p1y: 0.16, p2x: 0.88, p2y: 1 }),
};
