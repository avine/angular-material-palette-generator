import { PaletteGenFormValue } from './palette-gen-form.types';
import {
  getPaletteGenForm,
  paletteGenFormValuesEqual,
  parsePaletteGenFormValue,
  setPaletteGenFormValue,
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
    ['a missing key', { anchors: [{ color: '#005cbb' }], neutral: false }],
    ['an unknown key', { anchors: [{ color: '#005cbb', tone: null }], neutral: false, reverse: false }],
    ['the previous cubic-bezier format', { color: '#005cbb', start: 0, end: 100, params: {}, neutral: false }],
    ['null', null],
  ])('should reject %s', (_, value) => {
    expect(validatePaletteGenFormValue(value)).toBeNull();
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
