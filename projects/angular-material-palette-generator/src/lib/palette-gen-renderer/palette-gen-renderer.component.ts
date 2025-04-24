import { Component, computed, inject, Signal, ViewEncapsulation } from '@angular/core';
import { PaletteGenService } from '../palette-gen.service';
import { PALETTE_PERCENTAGE_MATCHING_MAP, PaletteName } from '../palette-matching';

@Component({
  selector: 'pg-palette-gen-renderer',
  host: {
    class: 'pg-palette-gen-renderer',
    '[style]': 'buildStyle()',
  },
  templateUrl: './palette-gen-renderer.component.html',
  styleUrl: './palette-gen-renderer.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class PaletteGenRendererComponent {
  protected service = inject(PaletteGenService);

  private tokens: Record<PaletteName, Signal<string>> = {
    primary: this.getComputedTokens('primary'),
    secondary: this.getComputedTokens('secondary'),
    tertiary: this.getComputedTokens('tertiary'),
    neutral: this.getComputedTokens('neutral'),
    'neutral-variant': this.getComputedTokens('neutral-variant'),
    error: this.getComputedTokens('error'),
  };

  private getComputedTokens(paletteName: PaletteName) {
    return computed(() => {
      const { colorMap } = this.service.data[paletteName]();
      return Object.entries(PALETTE_PERCENTAGE_MATCHING_MAP[paletteName][this.service.paletteMode()])
        .map(([token, percentage]) => `--mat-sys-${token}: ${colorMap[percentage]}`)
        .join('; ');
    });
  }

  protected buildStyle() {
    return [
      this.tokens.primary(),
      this.tokens.secondary(),
      this.tokens.tertiary(),
      this.tokens.neutral(),
      this.tokens['neutral-variant'](),
      this.tokens.error(),
      'background-color: var(--mat-sys-surface)',
    ].join('; ');
  }
}
