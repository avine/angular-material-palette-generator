import { DOCUMENT } from '@angular/common';
import { booleanAttribute, Component, computed, inject, input, output, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { PaletteGenFormValue } from '../palette-gen-form';
import { PALETTE_MAPPINGS } from '../palette-mapping';
import { ForgroundColorPipe } from './forground-color.pipe';
import { materialPalettePercentagesMap } from './palette-gen-preview.constants';
import { PaletteGenMatchConfig } from './palette-gen-preview.types';
import { percentageToRgbFactory } from './palette-gen-preview.utils';

@Component({
  selector: 'pl-palette-gen-preview',
  host: {
    class: 'pl-palette-gen-preview',
  },
  imports: [MatButtonModule, MatIconModule, MatTooltipModule, ForgroundColorPipe],
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

  protected PALETTE_MAPPINGS = PALETTE_MAPPINGS;

  matchConfig = input<PaletteGenMatchConfig>({ palette: undefined, mode: 'light' });

  // TODO: use a pipe with the "percentage" as input and "PaletteGenMatchConfig" as additional param
  protected matchColorNames({ palette, mode }: PaletteGenMatchConfig, percentage: number) {
    if (!palette) {
      return;
    }
    return PALETTE_MAPPINGS[palette][mode][percentage];
  }

  protected colorMap = computed(() => {
    const formValue = this.formValue();
    if (!formValue) {
      return [];
    }

    const { color, start, end, params, reverse, neutral } = formValue;

    const percentagesMap = materialPalettePercentagesMap[neutral ? 'neutral' : 'default'];
    const percentageToRgb = percentageToRgbFactory({ color, params, reverse });

    return percentagesMap
      .map((percentage) => ({
        percentage,
        adjustedPercentage: start + (percentage / 100) * (end - start),
      }))
      .map(({ percentage, adjustedPercentage }) => ({ percentage, color: percentageToRgb(adjustedPercentage) }));
  });

  protected sassMapToClipboard() {
    const formValue = this.formValue();
    if (!formValue) {
      return;
    }
    const settings = `  // ${this.stringifyColorGen(formValue)}`;
    this.clipboard?.writeText(`${settings}\n${this.sassMap()}`);
  }

  private stringifyColorGen(formValue: PaletteGenFormValue) {
    const value = { ...formValue };
    value.color = value.color.toLowerCase();
    return JSON.stringify(value);
  }

  protected sassMap = computed(() => {
    const map = this.colorMap()
      .map(({ percentage, color }) => `  ${percentage}: ${color}`)
      .join(',\n');

    return map;
  });
}
