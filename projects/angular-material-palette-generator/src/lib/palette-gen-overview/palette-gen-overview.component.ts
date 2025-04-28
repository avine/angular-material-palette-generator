import { TitleCasePipe } from '@angular/common';
import { Component, computed, inject, ViewEncapsulation } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { PreferBlackForgroundColorPipe } from '../constrast-ratio/prefer-black-forground-color.pipe';
import { MATERIAL_PALETTE_PERCENTAGES_MAP } from '../palette-gen.config';
import { PaletteGenService } from '../palette-gen.service';
import { PaletteGenDataListItem } from '../palette-gen.types';
import { PaletteName } from '../palette-matching/palette-matching.types';

// TODO: add "compact" input

@Component({
  selector: 'pg-palette-gen-overview',
  host: { class: 'pg-palette-gen-overview' },
  imports: [TitleCasePipe, MatTooltipModule, PreferBlackForgroundColorPipe],
  templateUrl: './palette-gen-overview.component.html',
  styleUrl: './palette-gen-overview.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class PaletteGenOverviewComponent {
  protected service = inject(PaletteGenService);

  percentages = MATERIAL_PALETTE_PERCENTAGES_MAP.default;

  overview = computed(() => {
    return Object.entries(this.service.dataMap).reduce(
      (acc, [paletteName, data]) => {
        acc.push({ paletteName: paletteName as PaletteName, dataList: data().list });
        return acc;
      },
      [] as { paletteName: PaletteName; dataList: PaletteGenDataListItem[] }[],
    );
  });
}
