export type PaletteGenFormAnchor = {
  /** Hex color. */
  color: string;

  /** Tone (0-100) at which the color is pinned, or `null` to pin the color at its own tone (its CIE L*). */
  tone: number | null;
};

export type PaletteGenFormValue = {
  /** Colors the palette goes through (at least one). */
  anchors: PaletteGenFormAnchor[];

  /** Whether the palette uses the tones of the Material `neutral` palette. */
  neutral: boolean;
};
