import { computed, Directive, inject, Signal } from '@angular/core';
import { PaletteGenService } from '../palette-gen.service';
import { PALETTE_PERCENTAGE_MATCHING_MAP } from '../palette-matching/palette-matching.config';
import { PaletteName } from '../palette-matching/palette-matching.types';

@Directive({
  selector: '[pgPaletteGenRenderer]',
  host: {
    '[style]': 'buildStyle()',
  },
})
export class PaletteGenRendererDirective {
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
      const { colorMap } = this.service.dataMap[paletteName]();
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
