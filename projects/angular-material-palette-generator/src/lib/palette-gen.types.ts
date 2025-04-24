export type PaletteGenData = {
  list: PaletteGenDataListItem[];
  colorMap: Record<number, string>;
};

export type PaletteGenDataListItem = {
  percentage: number;
  color: string;
};
