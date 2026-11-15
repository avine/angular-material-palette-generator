import { ColorSpace, inGamut, Lab_D65, OKLCH, parse, serialize, sRGB, to } from 'colorjs.io/fn';

ColorSpace.register(sRGB);
ColorSpace.register(OKLCH);
ColorSpace.register(Lab_D65);

// ----- Interpolation -----

export type Point = { x: number; y: number };

/**
 * Monotone cubic interpolation (Fritsch-Carlson / PCHIP) through the given points.
 *
 * The curve goes exactly through every point and never overshoots between two consecutive points,
 * which prevents artificial bumps. Outside of the points range, the value of the nearest point is kept.
 */
export const monotoneInterpolation = (points: Point[]): ((x: number) => number) => {
  const sorted = [...points].sort((a, b) => a.x - b.x);
  const n = sorted.length;

  if (n === 0) {
    throw new Error('At least one point is required');
  }
  if (n === 1) {
    return () => sorted[0].y;
  }

  const xs = sorted.map(({ x }) => x);
  const ys = sorted.map(({ y }) => y);

  const deltas = xs.slice(1).map((x, i) => (ys[i + 1] - ys[i]) / (x - xs[i]));

  const tangents = xs.map((_, i) => {
    if (i === 0) {
      return deltas[0];
    }
    if (i === n - 1) {
      return deltas[n - 2];
    }
    const [before, after] = [deltas[i - 1], deltas[i]];
    // Flat tangent at local extrema, harmonic mean of the slopes otherwise
    return before * after <= 0 ? 0 : (2 * before * after) / (before + after);
  });

  return (x: number) => {
    if (x <= xs[0]) {
      return ys[0];
    }
    if (x >= xs[n - 1]) {
      return ys[n - 1];
    }
    const i = xs.findIndex((_, index) => x < xs[index + 1]);
    const h = xs[i + 1] - xs[i];
    const t = (x - xs[i]) / h;

    // Cubic Hermite basis functions
    const h00 = 2 * t ** 3 - 3 * t ** 2 + 1;
    const h10 = t ** 3 - 2 * t ** 2 + t;
    const h01 = -2 * t ** 3 + 3 * t ** 2;
    const h11 = t ** 3 - t ** 2;

    return h00 * ys[i] + h10 * h * tangents[i] + h01 * ys[i + 1] + h11 * h * tangents[i + 1];
  };
};

/**
 * Make a list of hues (in degrees) continuous, so that interpolating between two consecutive hues
 * follows the shortest path on the hue circle (e.g. 350 -> 10 becomes 350 -> 370).
 */
export const unwrapHues = (hues: number[]): number[] =>
  hues.reduce<number[]>((result, hue, i) => {
    if (i === 0) {
      return [hue];
    }
    const previous = result[i - 1];
    const delta = ((((hue - previous) % 360) + 540) % 360) - 180;
    return [...result, previous + delta];
  }, []);

export const normalizeHue = (hue: number) => ((hue % 360) + 360) % 360;

// ----- Colors -----

/** Below this OKLCH chroma, a color is considered achromatic (its hue is meaningless). */
export const ACHROMATIC_CHROMA = 0.0001;

/** Upper bound of the OKLCH chroma of any sRGB color. */
const MAX_SRGB_CHROMA = 0.37;

const BISECTION_ITERATIONS = { chroma: 16, lightness: 20 };

export type Oklch = [lightness: number, chroma: number, hue: number];

const oklchColor = (coords: Oklch) => ({ space: OKLCH, coords, alpha: 1 });

/** Tone of a color, as defined by Material: its CIE L* (0-100). */
export const getTone = (color: string): number => to(parse(color), Lab_D65).coords[0] ?? 0;

/** OKLCH coordinates of a color (hue is `NaN` for achromatic colors). */
export const getOklch = (color: string): Oklch => {
  const [lightness, chroma, hue] = to(parse(color), OKLCH).coords;
  return [lightness ?? 0, chroma ?? 0, chroma && chroma > ACHROMATIC_CHROMA ? (hue ?? NaN) : NaN];
};

/** Maximum OKLCH chroma of a color that stays inside the sRGB gamut, for the given lightness and hue. */
export const getMaxChroma = (lightness: number, hue: number): number => {
  let [min, max] = [0, MAX_SRGB_CHROMA];
  for (let i = 0; i < BISECTION_ITERATIONS.chroma; i++) {
    const chroma = (min + max) / 2;
    if (inGamut(oklchColor([lightness, chroma, hue]), sRGB, { epsilon: 0 })) {
      min = chroma;
    } else {
      max = chroma;
    }
  }
  return min;
};

/**
 * Chroma of a color relative to the maximum chroma available in the sRGB gamut for its lightness and hue (0-1).
 * Interpolating relative chroma (rather than absolute chroma) keeps colors inside the gamut and naturally
 * reduces chroma towards black and white.
 */
export const getRelativeChroma = ([lightness, chroma, hue]: Oklch): number => {
  if (Number.isNaN(hue)) {
    return 0;
  }
  const maxChroma = getMaxChroma(lightness, hue);
  return maxChroma === 0 ? 0 : Math.min(chroma / maxChroma, 1);
};

/** Find the sRGB color with the given tone (CIE L*), relative chroma and OKLCH hue. */
export const solveColor = (tone: number, relativeChroma: number, hue: number): Oklch => {
  let [min, max] = [0, 1];
  let coords: Oklch = [0, 0, hue];
  for (let i = 0; i < BISECTION_ITERATIONS.lightness; i++) {
    const lightness = (min + max) / 2;
    coords = [lightness, relativeChroma * getMaxChroma(lightness, hue), hue];
    if ((to(oklchColor(coords), Lab_D65).coords[0] ?? 0) < tone) {
      min = lightness;
    } else {
      max = lightness;
    }
  }
  return coords;
};

/** Format a color as a 6-digit hex string (e.g. `#aabbcc`). */
export const toHex = (color: string | Oklch): string =>
  serialize(to(typeof color === 'string' ? parse(color) : oklchColor(color), sRGB), {
    format: 'hex',
    collapse: false,
  });
