import { DOCUMENT } from '@angular/common';
import {
  computed,
  effect,
  EffectRef,
  inject,
  Injectable,
  Injector,
  RendererFactory2,
  signal,
  Signal,
} from '@angular/core';
import { PaletteGenService } from '../palette-gen.service';
import { PALETTE_PERCENTAGE_MATCHING_MAP } from '../palette-matching/palette-matching.config';
import { PaletteName } from '../palette-matching/palette-matching.types';

@Injectable({
  providedIn: 'root',
})
export class PaletteGenRendererService {
  private injector = inject(Injector);

  private renderer = inject(RendererFactory2).createRenderer(null, null);

  private document = inject(DOCUMENT);

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

  getStyle() {
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

  private _isPageSharingActive = signal(false);

  isPageSharingActive = this._isPageSharingActive.asReadonly();

  private effectRef?: EffectRef;

  togglePageSharing() {
    if (!this.effectRef) {
      this.effectRef = effect(
        () => {
          this.renderer.setProperty(this.document.body, 'style', this.getStyle());
        },
        { injector: this.injector },
      );
    } else {
      this.renderer.setProperty(this.document.body, 'style', null);
      this.effectRef?.destroy();
      this.effectRef = undefined;
    }
    this._isPageSharingActive.set(!!this.effectRef);
  }
}
