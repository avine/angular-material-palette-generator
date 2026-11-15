import { Palette, PaletteAnchor, PaletteIssue, PaletteTone } from './palette-gen-engine.types';
import {
  getOklch,
  getRelativeChroma,
  getTone,
  monotoneInterpolation,
  normalizeHue,
  Point,
  solveColor,
  toHex,
  unwrapHues,
} from './palette-gen-engine.utils';

const MIN_TONE = 0;
const MAX_TONE = 100;

type ResolvedAnchor = {
  tone: number;
  color: string;
  lightness: number; // CIE L*
  relativeChroma: number;
  hue: number; // NaN for achromatic colors
};

const resolveAnchor = ({ color, tone }: PaletteAnchor): ResolvedAnchor => {
  const oklch = getOklch(color);
  const lightness = getTone(color);
  return {
    tone: tone ?? lightness,
    color,
    lightness,
    relativeChroma: getRelativeChroma(oklch),
    hue: oklch[2],
  };
};

const getAnchorIssues = (anchors: ResolvedAnchor[]): PaletteIssue[] => {
  const issues: PaletteIssue[] = [];

  anchors.forEach(({ tone }, i) => {
    if (tone < MIN_TONE || tone > MAX_TONE) {
      issues.push({ type: 'tone-out-of-range', tone });
    }
    if (i > 0 && tone === anchors[i - 1].tone) {
      issues.push({ type: 'duplicate-tone', tone });
    }
  });

  anchors.slice(1).forEach((anchor, i) => {
    const previous = anchors[i];
    if (anchor.tone !== previous.tone && anchor.lightness <= previous.lightness) {
      issues.push({ type: 'lightness-order', tones: [previous.tone, anchor.tone] });
    }
  });

  return issues;
};

/**
 * Lightness of the palette, as a function of the tone.
 *
 * By default, the lightness of a tone is the tone itself (Material definition: tone = CIE L*).
 * Each anchor shifts the lightness so that the curve goes exactly through the anchor color.
 * The shift is interpolated between anchors and goes back to zero at tones 0 and 100 (black and white).
 */
const lightnessFactory = (anchors: ResolvedAnchor[]) => {
  const shifts: Point[] = anchors.map(({ tone, lightness }) => ({ x: tone, y: lightness - tone }));
  if (!anchors.some(({ tone }) => tone === MIN_TONE)) {
    shifts.push({ x: MIN_TONE, y: 0 });
  }
  if (!anchors.some(({ tone }) => tone === MAX_TONE)) {
    shifts.push({ x: MAX_TONE, y: 0 });
  }
  const shift = monotoneInterpolation(shifts);
  return (tone: number) => tone + shift(tone);
};

/** Relative chroma and hue of the palette, as functions of the tone (constant beyond the extreme anchors). */
const chromaAndHueFactory = (anchors: ResolvedAnchor[]) => {
  const relativeChroma = monotoneInterpolation(
    anchors.map(({ tone, relativeChroma }) => ({ x: tone, y: relativeChroma })),
  );

  // Achromatic anchors have no hue: they don't take part in the hue interpolation
  const chromaticAnchors = anchors.filter(({ hue }) => !Number.isNaN(hue));
  const unwrappedHues = unwrapHues(chromaticAnchors.map(({ hue }) => hue));
  const hue =
    chromaticAnchors.length === 0
      ? () => 0
      : monotoneInterpolation(chromaticAnchors.map(({ tone }, i) => ({ x: tone, y: unwrappedHues[i] })));

  return { relativeChroma, hue: (tone: number) => normalizeHue(hue(tone)) };
};

/**
 * Build a palette going exactly through the given anchors.
 *
 * - Lightness: tone = CIE L* (as in Material), shifted where needed to go through the anchors.
 * - Chroma: relative to the sRGB gamut, interpolated between anchors.
 * - Hue: OKLCH hue, interpolated between anchors along the shortest path.
 *
 * @param anchors At least one anchor (typically the key color, pinned at its own tone).
 * @param tones The tones of the palette (e.g. `[0, 10, 20, ..., 100]`).
 */
export const buildPalette = (anchors: PaletteAnchor[], tones: readonly number[]): Palette => {
  if (anchors.length === 0) {
    throw new Error('At least one anchor is required to build a palette');
  }

  const resolvedAnchors = anchors.map(resolveAnchor).sort((a, b) => a.tone - b.tone);
  const issues = getAnchorIssues(resolvedAnchors);

  const lightness = lightnessFactory(resolvedAnchors);
  const { relativeChroma, hue } = chromaAndHueFactory(resolvedAnchors);

  const sortedTones = [...tones].sort((a, b) => a - b);

  sortedTones.slice(1).forEach((tone, i) => {
    if (lightness(tone) <= lightness(sortedTones[i])) {
      issues.push({ type: 'non-monotonic', tone });
    }
  });

  const paletteTones = sortedTones.map((tone): PaletteTone => {
    const anchor = resolvedAnchors.find((resolvedAnchor) => resolvedAnchor.tone === tone);
    if (anchor) {
      return { tone, color: toHex(anchor.color), anchored: true };
    }
    return { tone, color: toHex(solveColor(lightness(tone), relativeChroma(tone), hue(tone))), anchored: false };
  });

  return { tones: paletteTones, issues };
};
