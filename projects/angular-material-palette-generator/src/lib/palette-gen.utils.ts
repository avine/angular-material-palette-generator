import { buildPalette } from './palette-gen-engine/palette-gen-engine';
import { PaletteGenFormValue } from './palette-gen-form/palette-gen-form.types';
import { MATERIAL_PALETTE_PERCENTAGES_MAP } from './palette-gen.config';
import { PaletteGenData, PaletteGenDataListItem } from './palette-gen.types';

/** Form value of a palette going through a key color, pinned at its own tone. */
export const buildPaletteGenFormValue = (color: string, neutral = false): PaletteGenFormValue => ({
  anchors: [{ color, tone: null }],
  neutral,
});

const normalizeHexColor = (color: string) => (color.startsWith('#') ? color : `#${color}`);

export const buildPaletteGenData = (formValue: PaletteGenFormValue | undefined): PaletteGenData => {
  if (!formValue) {
    return { list: [], colorMap: {}, issues: [] };
  }
  const { anchors, neutral } = formValue;

  const { tones, issues } = buildPalette(
    anchors.map(({ color, tone }) => ({ color: normalizeHexColor(color), tone: tone ?? undefined })),
    MATERIAL_PALETTE_PERCENTAGES_MAP[neutral ? 'neutral' : 'default'],
  );

  const list = tones.map(({ tone, color, anchored }) => ({ percentage: tone, color, anchored }));

  const colorMap = list.reduce(
    (map, { percentage, color }) => {
      map[percentage] = color;
      return map;
    },
    {} as Record<number, string>,
  );

  return { list, colorMap, issues };
};

export const buildSassMapStringified = (formValue: PaletteGenFormValue, dataList: PaletteGenDataListItem[]) => {
  const settings = `  // ${JSON.stringify(formValue)}\n`;

  const sassMap = dataList.map(({ percentage, color }) => `  ${percentage}: ${color},\n`).join('');

  return settings + sassMap;
};
