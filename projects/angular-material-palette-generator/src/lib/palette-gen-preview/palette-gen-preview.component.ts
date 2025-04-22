import { DOCUMENT } from '@angular/common';
import { booleanAttribute, Component, computed, inject, input, output, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { PaletteGenFormValue } from '../palette-gen-form';
import {
  PaletteMatchingConfig,
  PaletteMatchingPercentageToTokensPipe,
  PaletteMatchingTokensToMirrorColorPipe,
} from '../palette-matching';
import { MATERIAL_PALETTE_PERCENTAGES_MAP } from './palette-gen-preview.config';
import { PaletteGenPreviewData } from './palette-gen-preview.types';
import { percentageToRgbFactory } from './palette-gen-preview.utils';
import { PreferBlackForgroundColorPipe, WcagContrastRatioCompliancePipe } from './pipes';

@Component({
  selector: 'pg-palette-gen-preview',
  host: {
    class: 'pg-palette-gen-preview',
  },
  imports: [
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    PaletteMatchingPercentageToTokensPipe,
    PaletteMatchingTokensToMirrorColorPipe,
    PreferBlackForgroundColorPipe,
    WcagContrastRatioCompliancePipe,
  ],
  templateUrl: './palette-gen-preview.component.html',
  styleUrl: './palette-gen-preview.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class PaletteGenPreviewComponent {
  private clipboard = inject(DOCUMENT).defaultView?.navigator.clipboard;

  mirrorView = input(false, { transform: booleanAttribute });

  formValue = input.required<PaletteGenFormValue | undefined>();

  action = output<void>();

  compact = input(true);

  matchingConfig = input<PaletteMatchingConfig>({ name: undefined, mode: 'light' });

  protected data = computed<PaletteGenPreviewData>(() => {
    const formValue = this.formValue();
    if (!formValue) {
      return { list: [], percentageMap: {} };
    }

    const { color, start, end, params, reverse, neutral } = formValue;

    const percentages = MATERIAL_PALETTE_PERCENTAGES_MAP[neutral ? 'neutral' : 'default'];
    const percentageToRgb = percentageToRgbFactory({ color, params, reverse });

    const list = percentages
      .map((percentage) => ({
        percentage,
        adjustedPercentage: start + (percentage / 100) * (end - start),
      }))
      .map(({ percentage, adjustedPercentage }) => ({ percentage, color: percentageToRgb(adjustedPercentage) }));

    const percentageMap = list.reduce(
      (map, { percentage, color }) => {
        map[percentage] = color;
        return map;
      },
      {} as Record<number, string>,
    );

    return { list, percentageMap };
  });

  protected sassMapToClipboard() {
    const formValue = this.formValue();
    if (!formValue) {
      return;
    }
    const settings = `  // ${JSON.stringify(formValue)}`;
    this.clipboard?.writeText(`${settings}\n${this.sassMapStringified()}`);
  }

  private sassMapStringified = computed(() => {
    return this.data()
      .list.map(({ percentage, color }) => `  ${percentage}: ${color}`)
      .join(',\n');
  });
}
