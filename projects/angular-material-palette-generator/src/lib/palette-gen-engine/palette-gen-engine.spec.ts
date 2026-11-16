import { buildPalette } from './palette-gen-engine';
import { getOklch, getTone } from './palette-gen-engine.utils';

const TONES = [0, 10, 20, 25, 30, 35, 40, 50, 60, 70, 80, 90, 95, 98, 99, 100];

/** Precision of the tone of a generated color (hex colors are rounded to 8 bits per channel). */
const TONE_PRECISION = 0.6;

/** Precision (in degrees) of the hue of a generated color (hex rounding matters more for dark colors). */
const HUE_PRECISION = 2;

const colorAt = (palette: ReturnType<typeof buildPalette>, tone: number) =>
  palette.tones.find((paletteTone) => paletteTone.tone === tone)?.color ?? '';

describe('buildPalette', () => {
  it('should throw without anchors', () => {
    expect(() => buildPalette([], TONES)).toThrow();
  });

  it('should return the tones sorted', () => {
    const palette = buildPalette([{ color: '#005cbb' }], [100, 0, 40]);

    expect(palette.tones.map(({ tone }) => tone)).toEqual([0, 40, 100]);
  });

  describe('with a key color pinned at its own tone', () => {
    const palette = buildPalette([{ color: '#005cbb' }], TONES);

    it('should generate colors whose tone (CIE L*) is the palette tone', () => {
      palette.tones.forEach(({ tone, color }) => expect(Math.abs(getTone(color) - tone)).toBeLessThan(TONE_PRECISION));
    });

    it('should go from black to white', () => {
      expect(colorAt(palette, 0)).toBe('#000000');
      expect(colorAt(palette, 100)).toBe('#ffffff');
    });

    it('should keep the hue of the key color', () => {
      const [, , keyHue] = getOklch('#005cbb');

      [20, 40, 60, 80].forEach((tone) => expect(getOklch(colorAt(palette, tone))[2]).toBeCloseTo(keyHue, 0));
    });

    it('should not report issues', () => {
      expect(palette.issues).toEqual([]);
    });
  });

  describe('with an anchor pinned at a given tone', () => {
    // #3366cc has a tone of ~45, pinned at tone 40
    const palette = buildPalette([{ color: '#3366cc', tone: 40 }], TONES);

    it('should return exactly the anchor color at its tone', () => {
      expect(palette.tones.find(({ tone }) => tone === 40)).toEqual({ tone: 40, color: '#3366cc', anchored: true });
    });

    it('should flag only the anchored tone', () => {
      expect(palette.tones.filter(({ anchored }) => anchored).map(({ tone }) => tone)).toEqual([40]);
    });

    it('should shift the lightness around the anchor and keep black and white', () => {
      expect(getTone(colorAt(palette, 35))).toBeGreaterThan(35 + 1);
      expect(getTone(colorAt(palette, 50))).toBeGreaterThan(50 + 1);
      expect(colorAt(palette, 0)).toBe('#000000');
      expect(colorAt(palette, 100)).toBe('#ffffff');
    });

    it('should keep the lightness increasing', () => {
      const lightnesses = palette.tones.map(({ color }) => getTone(color));

      lightnesses.slice(1).forEach((lightness, i) => expect(lightness).toBeGreaterThan(lightnesses[i]));
      expect(palette.issues).toEqual([]);
    });
  });

  describe('with several anchors', () => {
    const anchors = [
      { color: '#4a2a8a', tone: 30 }, // Purple
      { color: '#3366cc', tone: 40 }, // Blue
    ];
    const palette = buildPalette(anchors, TONES);

    it('should return exactly every anchor color', () => {
      anchors.forEach(({ color, tone }) => expect(colorAt(palette, tone)).toBe(color));
    });

    it('should interpolate the hue between anchors', () => {
      const [, , purpleHue] = getOklch('#4a2a8a');
      const [, , blueHue] = getOklch('#3366cc');
      const [, , hue] = getOklch(colorAt(palette, 35));

      expect(hue).toBeGreaterThan(Math.min(purpleHue, blueHue));
      expect(hue).toBeLessThan(Math.max(purpleHue, blueHue));
    });

    it('should keep the hue of the extreme anchors beyond them', () => {
      expect(Math.abs(getOklch(colorAt(palette, 10))[2] - getOklch('#4a2a8a')[2])).toBeLessThan(HUE_PRECISION);
      expect(Math.abs(getOklch(colorAt(palette, 80))[2] - getOklch('#3366cc')[2])).toBeLessThan(HUE_PRECISION);
    });
  });

  describe('with an achromatic anchor', () => {
    it('should generate a grey palette', () => {
      const palette = buildPalette([{ color: '#808080' }], TONES);

      palette.tones.forEach(({ color }) => {
        const [r, g, b] = [1, 3, 5].map((i) => color.slice(i, i + 2));
        expect(r).toBe(g);
        expect(g).toBe(b);
      });
    });

    it('should take the hue of the chromatic anchors only', () => {
      const palette = buildPalette(
        [
          { color: '#808080', tone: 50 },
          { color: '#005cbb', tone: 40 },
        ],
        TONES,
      );

      expect(getOklch(colorAt(palette, 20))[2]).toBeCloseTo(getOklch('#005cbb')[2], 0);
    });
  });

  describe('issues', () => {
    it('should report anchors pinned at the same tone', () => {
      const { issues } = buildPalette(
        [
          { color: '#005cbb', tone: 40 },
          { color: '#3366cc', tone: 40 },
        ],
        TONES,
      );

      expect(issues).toContainEqual({ type: 'duplicate-tone', tone: 40 });
    });

    it('should report anchors pinned outside of the 0-100 range', () => {
      const { issues } = buildPalette([{ color: '#005cbb', tone: 120 }], TONES);

      expect(issues).toContainEqual({ type: 'tone-out-of-range', tone: 120 });
    });

    it('should report anchors not ordered by lightness like they are by tone', () => {
      const { issues } = buildPalette(
        [
          { color: '#3366cc', tone: 30 }, // Lighter...
          { color: '#001133', tone: 40 }, // ...than this darker color, pinned at a higher tone
        ],
        TONES,
      );

      expect(issues).toContainEqual({ type: 'lightness-order', tones: [30, 40] });
      expect(issues.some(({ type }) => type === 'non-monotonic')).toBe(true);
    });
  });
});
