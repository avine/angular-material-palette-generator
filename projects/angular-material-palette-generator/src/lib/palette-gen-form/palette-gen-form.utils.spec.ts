import { PaletteGenFormValue } from './palette-gen-form.types';
import {
  formatPaletteIssue,
  getPaletteGenForm,
  getUnavailableTone,
  paletteGenFormValuesEqual,
  parsePaletteGenFormValue,
  setPaletteGenFormValue,
  togglePaletteGenFormAnchor,
  validatePaletteGenFormValue,
} from './palette-gen-form.utils';

const VALUE: PaletteGenFormValue = {
  anchors: [
    { color: '#005cbb', tone: null },
    { color: '#3366cc', tone: 40 },
  ],
  neutral: false,
};

describe('setPaletteGenFormValue', () => {
  it('should add and remove anchor controls as needed', () => {
    const form = getPaletteGenForm();

    setPaletteGenFormValue(form, VALUE);
    expect(form.controls.anchors.length).toBe(2);
    expect(form.getRawValue()).toEqual(VALUE);

    setPaletteGenFormValue(form, { anchors: [{ color: '#ba1a1a', tone: 20 }], neutral: true });
    expect(form.controls.anchors.length).toBe(1);
    expect(form.getRawValue()).toEqual({ anchors: [{ color: '#ba1a1a', tone: 20 }], neutral: true });
  });

  it('should throw when the structure does not match the form', () => {
    expect(() => setPaletteGenFormValue(getPaletteGenForm(), { color: '#005cbb' } as never)).toThrow();
  });
});

describe('validatePaletteGenFormValue', () => {
  it('should accept a valid value', () => {
    expect(validatePaletteGenFormValue(VALUE)).toBe(VALUE);
  });

  it.each([
    ['no anchors', { anchors: [], neutral: false }],
    ['an invalid color', { anchors: [{ color: 'foo', tone: null }], neutral: false }],
    ['a tone out of range', { anchors: [{ color: '#005cbb', tone: 120 }], neutral: false }],
    ['a decimal tone', { anchors: [{ color: '#005cbb', tone: 40.5 }], neutral: false }],
    ['a tone that is not a tone of the palette', { anchors: [{ color: '#005cbb', tone: 52 }], neutral: false }],
    ['a tone of the neutral palette only', { anchors: [{ color: '#005cbb', tone: 12 }], neutral: false }],
    ['a missing key', { anchors: [{ color: '#005cbb' }], neutral: false }],
    ['an unknown key', { anchors: [{ color: '#005cbb', tone: null }], neutral: false, reverse: false }],
    ['null', null],
  ])('should reject %s', (_, value) => {
    expect(validatePaletteGenFormValue(value)).toBeNull();
  });
});

describe('tone validation', () => {
  it('should accept the tones of the palette', () => {
    expect(validatePaletteGenFormValue({ anchors: [{ color: '#5e5e62', tone: 12 }], neutral: true })).not.toBeNull();
  });

  it('should revalidate the tones when the palette becomes (or stops being) neutral', () => {
    const form = getPaletteGenForm();
    setPaletteGenFormValue(form, { anchors: [{ color: '#5e5e62', tone: 12 }], neutral: true });
    expect(form.valid).toBe(true);

    form.controls.neutral.setValue(false);
    expect(form.controls.anchors.at(0).controls.tone.valid).toBe(false);

    form.controls.neutral.setValue(true);
    expect(form.valid).toBe(true);
  });
});

describe('parsePaletteGenFormValue', () => {
  it('should parse a valid JSON value', () => {
    expect(parsePaletteGenFormValue(JSON.stringify(VALUE))).toEqual(VALUE);
  });

  it('should reject an invalid JSON', () => {
    expect(parsePaletteGenFormValue('{ invalid')).toBeNull();
  });
});

describe('paletteGenFormValuesEqual', () => {
  it('should compare values', () => {
    expect(paletteGenFormValuesEqual(VALUE, structuredClone(VALUE))).toBe(true);
    expect(paletteGenFormValuesEqual(VALUE, { ...VALUE, neutral: true })).toBe(false);
    expect(paletteGenFormValuesEqual(VALUE, { ...VALUE, anchors: VALUE.anchors.slice(0, 1) })).toBe(false);
    expect(
      paletteGenFormValuesEqual(VALUE, { ...VALUE, anchors: [VALUE.anchors[0], { color: '#3366cc', tone: 30 }] }),
    ).toBe(false);
  });
});

describe('togglePaletteGenFormAnchor', () => {
  it('should pin a color at a tone, sorted by tone after the key color', () => {
    const value = togglePaletteGenFormAnchor(VALUE, 30, '#254d9e');

    expect(value.anchors).toEqual([
      { color: '#005cbb', tone: null },
      { color: '#254d9e', tone: 30 },
      { color: '#3366cc', tone: 40 },
    ]);
  });

  it('should unpin the color pinned at a tone', () => {
    expect(togglePaletteGenFormAnchor(VALUE, 40, '#3366cc').anchors).toEqual([{ color: '#005cbb', tone: null }]);
  });

  it('should not unpin the last anchor', () => {
    const value: PaletteGenFormValue = { anchors: [{ color: '#3366cc', tone: 40 }], neutral: false };

    expect(togglePaletteGenFormAnchor(value, 40, '#3366cc')).toBe(value);
  });

  it('should not mutate the form value', () => {
    const value = structuredClone(VALUE);
    togglePaletteGenFormAnchor(value, 30, '#254d9e');

    expect(value).toEqual(VALUE);
  });
});

describe('formatPaletteIssue', () => {
  it('should format issues', () => {
    expect(formatPaletteIssue({ type: 'duplicate-tone', tone: 40 })).toBe('Several colors are pinned at tone 40.');
    expect(formatPaletteIssue({ type: 'tone-out-of-range', tone: 120 })).toBe('Tone 120 is out of range (0-100).');
    expect(formatPaletteIssue({ type: 'lightness-order', tones: [30, 45.04] })).toBe(
      'The colors pinned at tones 30 and 45.0 are not ordered by lightness.',
    );
    expect(formatPaletteIssue({ type: 'non-monotonic', tone: 35 })).toBe('The lightness decreases at tone 35.');
  });
});

describe('getUnavailableTone', () => {
  const tones = [0, 10, 20, 100];

  it('should return the tone when it is not one of the tones of the palette', () => {
    expect(getUnavailableTone(4, tones)).toBe(4);
  });

  it('should return null for a tone of the palette or a color pinned at its own tone', () => {
    expect(getUnavailableTone(10, tones)).toBeNull();
    expect(getUnavailableTone(0, tones)).toBeNull();
    expect(getUnavailableTone(null, tones)).toBeNull();
  });
});
