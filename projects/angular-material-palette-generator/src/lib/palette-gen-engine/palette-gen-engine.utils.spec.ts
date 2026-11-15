import { ColorSpace, inGamut, OKLCH, sRGB } from 'colorjs.io/fn';
import {
  getMaxChroma,
  getOklch,
  getRelativeChroma,
  getTone,
  monotoneInterpolation,
  normalizeHue,
  Oklch,
  solveColor,
  toHex,
  unwrapHues,
} from './palette-gen-engine.utils';

ColorSpace.register(sRGB);
ColorSpace.register(OKLCH);

const isInSrgbGamut = (coords: Oklch) => inGamut({ space: OKLCH, coords, alpha: 1 }, sRGB, { epsilon: 0 });

const FLOAT_TOLERANCE = 1e-9;

describe('monotoneInterpolation', () => {
  it('should go exactly through every point', () => {
    const points = [
      { x: 0, y: 0 },
      { x: 30, y: 5 },
      { x: 40, y: 2 },
      { x: 100, y: 0 },
    ];
    const interpolate = monotoneInterpolation(points);

    points.forEach(({ x, y }) => expect(interpolate(x)).toBeCloseTo(y, 10));
  });

  it('should accept unsorted points', () => {
    const interpolate = monotoneInterpolation([
      { x: 100, y: 10 },
      { x: 0, y: 0 },
    ]);

    expect(interpolate(50)).toBeCloseTo(5, 10);
  });

  it('should never overshoot between two consecutive points', () => {
    const interpolate = monotoneInterpolation([
      { x: 0, y: 0 },
      { x: 10, y: 10 },
      { x: 20, y: 10 },
      { x: 30, y: 0 },
    ]);

    for (let x = 10; x <= 20; x += 0.5) {
      expect(interpolate(x)).toBeCloseTo(10, 10);
    }
    for (let x = 0; x <= 30; x += 0.5) {
      expect(interpolate(x)).toBeGreaterThanOrEqual(0 - FLOAT_TOLERANCE);
      expect(interpolate(x)).toBeLessThanOrEqual(10 + FLOAT_TOLERANCE);
    }
  });

  it('should be monotonic when the points are monotonic', () => {
    const interpolate = monotoneInterpolation([
      { x: 0, y: 0 },
      { x: 5, y: 40 },
      { x: 50, y: 45 },
      { x: 100, y: 100 },
    ]);

    for (let x = 0.5; x <= 100; x += 0.5) {
      expect(interpolate(x)).toBeGreaterThanOrEqual(interpolate(x - 0.5));
    }
  });

  it('should keep the value of the nearest point outside of the points range', () => {
    const interpolate = monotoneInterpolation([
      { x: 20, y: 3 },
      { x: 60, y: 7 },
    ]);

    expect(interpolate(0)).toBe(3);
    expect(interpolate(100)).toBe(7);
  });

  it('should return a constant with a single point', () => {
    const interpolate = monotoneInterpolation([{ x: 40, y: 0.8 }]);

    expect(interpolate(0)).toBe(0.8);
    expect(interpolate(100)).toBe(0.8);
  });

  it('should throw without points', () => {
    expect(() => monotoneInterpolation([])).toThrow();
  });
});

describe('unwrapHues', () => {
  it('should follow the shortest path on the hue circle', () => {
    expect(unwrapHues([350, 10])).toEqual([350, 370]);
    expect(unwrapHues([10, 350])).toEqual([10, -10]);
    expect(unwrapHues([100, 200, 300])).toEqual([100, 200, 300]);
  });

  it('should be normalized back to the 0-360 range', () => {
    expect(normalizeHue(370)).toBe(10);
    expect(normalizeHue(-10)).toBe(350);
  });
});

describe('colors', () => {
  it('should get the tone (CIE L*) of a color', () => {
    expect(getTone('#000000')).toBeCloseTo(0, 1);
    expect(getTone('#ffffff')).toBeCloseTo(100, 1);
    expect(getTone('#005cbb')).toBeCloseTo(40, 0); // Primary color of Material `$azure-palette`
  });

  it('should get a NaN hue for achromatic colors', () => {
    expect(getOklch('#808080')[2]).toBeNaN();
    expect(getOklch('#005cbb')[2]).not.toBeNaN();
  });

  it('should find the maximum chroma of the sRGB gamut', () => {
    [
      [0.3, 30],
      [0.5, 140],
      [0.6, 264],
      [0.9, 100],
    ].forEach(([lightness, hue]) => {
      const maxChroma = getMaxChroma(lightness, hue);

      expect(toHex([lightness, maxChroma, hue])).toMatch(/^#[0-9a-f]{6}$/);
      expect(isInSrgbGamut([lightness, maxChroma, hue])).toBe(true);
      expect(isInSrgbGamut([lightness, maxChroma + 0.001, hue])).toBe(false);
    });
  });

  it('should get no chroma for black and white', () => {
    expect(getMaxChroma(0, 264)).toBeCloseTo(0, 3);
    expect(getMaxChroma(1, 264)).toBeCloseTo(0, 3);
  });

  it('should get the chroma relative to the sRGB gamut', () => {
    // Pure blue is a vertex of the sRGB cube: its chroma is slightly above the chroma reachable continuously
    // along the OKLCH chroma axis, so its relative chroma is clamped to 1
    expect(getRelativeChroma(getOklch('#0000ff'))).toBe(1);
    expect(getRelativeChroma(getOklch('#808080'))).toBe(0);

    const relativeChroma = getRelativeChroma(getOklch('#5e5e62'));
    expect(relativeChroma).toBeGreaterThan(0);
    expect(relativeChroma).toBeLessThan(0.2);
  });

  it('should solve a color with the given tone, relative chroma and hue', () => {
    const [, , hue] = getOklch('#005cbb');

    [10, 25, 40, 60, 90].forEach((tone) => {
      const coords = solveColor(tone, 0.5, hue);

      expect(getTone(toHex(coords))).toBeCloseTo(tone, 0);
      expect(getRelativeChroma(coords)).toBeCloseTo(0.5, 2);
      expect(coords[2]).toBe(hue);
    });
  });

  it('should format colors as 6-digit hex', () => {
    expect(toHex('#abc')).toBe('#aabbcc');
    expect(toHex('#ABCDEF')).toBe('#abcdef');
    expect(toHex([0, 0, 0])).toBe('#000000');
  });
});
