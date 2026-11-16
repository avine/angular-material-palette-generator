export type PaletteAnchor = {
  /** Color pinned in the palette (any CSS color supported by `colorjs.io`, typically hex). */
  color: string;

  /**
   * Tone (0-100) at which the color is pinned.
   * When omitted, the color is pinned at its own tone (its CIE L*), as Material does with a key color.
   */
  tone?: number;
};

export type PaletteTone = {
  tone: number;

  /** Hex color. */
  color: string;

  /** `true` when the color is exactly the color of an anchor pinned at this tone. */
  anchored: boolean;
};

export type PaletteIssue =
  /** Several anchors are pinned at the same tone. */
  | { type: 'duplicate-tone'; tone: number }

  /** An anchor is pinned outside of the 0-100 range. */
  | { type: 'tone-out-of-range'; tone: number }

  /** Two consecutive anchors are not ordered by lightness like they are by tone (the palette would fold back). */
  | { type: 'lightness-order'; tones: [number, number] }

  /** The lightness of the generated palette decreases at this tone (anchors pull the curve too far). */
  | { type: 'non-monotonic'; tone: number };

export type Palette = {
  tones: PaletteTone[];
  issues: PaletteIssue[];
};
