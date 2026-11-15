import { PaletteGenFormValue } from './palette-gen-form/palette-gen-form.types';
import { importTypedFormValue } from './palette-gen-import/palette-gen-import.utils';
import { MATERIAL_PALETTE_PERCENTAGES_MAP } from './palette-gen.config';
import { buildPaletteGenData, buildPaletteGenFormValue, buildSassMapStringified } from './palette-gen.utils';

describe('buildPaletteGenFormValue', () => {
  it('should pin the key color at its own tone', () => {
    expect(buildPaletteGenFormValue('#005cbb')).toEqual({
      anchors: [{ color: '#005cbb', tone: null }],
      neutral: false,
    });
    expect(buildPaletteGenFormValue('#5e5e62', true).neutral).toBe(true);
  });
});

describe('buildPaletteGenData', () => {
  it('should return empty data without form value', () => {
    expect(buildPaletteGenData(undefined)).toEqual({ list: [], colorMap: {}, issues: [] });
  });

  it('should use the tones of the Material palettes', () => {
    const tones = (neutral: boolean) =>
      buildPaletteGenData(buildPaletteGenFormValue('#005cbb', neutral)).list.map(({ percentage }) => percentage);

    expect(tones(false)).toEqual(MATERIAL_PALETTE_PERCENTAGES_MAP.default);
    expect(tones(true)).toEqual(MATERIAL_PALETTE_PERCENTAGES_MAP.neutral);
  });

  it('should pin the anchors and build the color map', () => {
    const { list, colorMap, issues } = buildPaletteGenData({
      anchors: [{ color: '#3366cc', tone: 40 }],
      neutral: false,
    });

    expect(list.find(({ percentage }) => percentage === 40)).toEqual({
      percentage: 40,
      color: '#3366cc',
      anchored: true,
    });
    expect(colorMap[40]).toBe('#3366cc');
    expect(colorMap[0]).toBe('#000000');
    expect(issues).toEqual([]);
  });

  it('should accept hex colors without `#`', () => {
    const { colorMap } = buildPaletteGenData({ anchors: [{ color: '3366cc', tone: 40 }], neutral: false });

    expect(colorMap[40]).toBe('#3366cc');
  });

  it('should report issues', () => {
    const { issues } = buildPaletteGenData({
      anchors: [
        { color: '#3366cc', tone: 40 },
        { color: '#005cbb', tone: 40 },
      ],
      neutral: false,
    });

    expect(issues).toContainEqual({ type: 'duplicate-tone', tone: 40 });
  });
});

describe('buildSassMapStringified', () => {
  const formValue: PaletteGenFormValue = {
    anchors: [
      { color: '#005cbb', tone: null },
      { color: '#3366cc', tone: 40 },
    ],
    neutral: false,
  };

  it('should be imported back', () => {
    const sassMap = buildSassMapStringified(formValue, buildPaletteGenData(formValue).list);

    expect(importTypedFormValue(sassMap)).toEqual({ type: 'formValue', data: formValue });
  });

  it('should not import the previous cubic-bezier format', () => {
    const previousFormat = `  // {"color":"#005cbb","start":0,"end":100,"params":{"p1x":0,"p1y":0.21,"p2x":1,"p2y":1},"reverse":false,"neutral":false}\n  0: #000000,\n`;

    expect(importTypedFormValue(previousFormat)).toBeNull();
  });
});
