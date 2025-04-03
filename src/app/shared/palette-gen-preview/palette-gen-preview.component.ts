import { DOCUMENT } from '@angular/common';
import { booleanAttribute, Component, computed, inject, input, output, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { PaletteGenFormValue } from '../palette-gen-form';
import { materialPalettePercentagesMap } from './palette-gen-preview.constants';
import { percentageToRgbFactory } from './palette-gen-preview.utils';

@Component({
  selector: 'app-palette-gen-preview',
  host: {
    class: 'app-palette-gen-preview',
  },
  imports: [MatButtonModule, MatIconModule, MatTooltipModule],
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
