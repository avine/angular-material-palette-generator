import { normalizeHexColor } from './palette-gen-form.validator';

describe('normalizeHexColor', () => {
  it.each([
    ['#3366cc', '#3366cc'],
    ['3366cc', '#3366cc'],
    ['#3366CC', '#3366cc'],
    ['#36c', '#3366cc'],
    ['36C', '#3366cc'],
  ])('should normalize %s to %s', (color, expected) => {
    expect(normalizeHexColor(color)).toBe(expected);
  });

  it('should return an invalid color as is', () => {
    expect(normalizeHexColor('foo')).toBe('foo');
    expect(normalizeHexColor('')).toBe('');
  });
});
