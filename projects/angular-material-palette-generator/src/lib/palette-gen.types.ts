export type PaletteGenData = {
  list: PaletteGenDataListItem[];
  percentageMap: Record<number, string>;
};

export type PaletteGenDataListItem = {
  percentage: number;
  color: string;
};
