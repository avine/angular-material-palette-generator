import {
  computed,
  DOCUMENT,
  effect,
  EffectRef,
  inject,
  Injectable,
  Injector,
  RendererFactory2,
  RendererStyleFlags2,
  signal,
  Signal,
} from '@angular/core';
import { PaletteGenService } from '../palette-gen.service';
import { PALETTE_PERCENTAGE_MATCHING_MAP } from '../palette-matching/palette-matching.config';
import { PaletteName } from '../palette-matching/palette-matching.types';

type PaletteGenStyle = Record<string, string>;

@Injectable({
  providedIn: 'root',
})
export class PaletteGenRendererService {
  private injector = inject(Injector);

  private renderer = inject(RendererFactory2).createRenderer(null, null);

  private document = inject(DOCUMENT);

  protected service = inject(PaletteGenService);

  private tokens: Record<PaletteName, Signal<PaletteGenStyle>> = {
    primary: this.getComputedTokens('primary'),
    secondary: this.getComputedTokens('secondary'),
    tertiary: this.getComputedTokens('tertiary'),
    neutral: this.getComputedTokens('neutral'),
    'neutral-variant': this.getComputedTokens('neutral-variant'),
    error: this.getComputedTokens('error'),
  };

  private getComputedTokens(paletteName: PaletteName): Signal<PaletteGenStyle> {
    return computed(() => {
      const { colorMap } = this.service.dataMap[paletteName]();
      return Object.fromEntries(
        Object.entries(PALETTE_PERCENTAGE_MATCHING_MAP[paletteName][this.service.paletteMode()]).map(
          ([token, percentage]) => [`--mat-sys-${token}`, colorMap[percentage]],
        ),
      );
    });
  }

  getStyle(): PaletteGenStyle {
    return {
      ...this.tokens.primary(),
      ...this.tokens.secondary(),
      ...this.tokens.tertiary(),
      ...this.tokens.neutral(),
      ...this.tokens['neutral-variant'](),
      ...this.tokens.error(),
    };
  }

  private _isPageSharingActive = signal(false);

  isPageSharingActive = this._isPageSharingActive.asReadonly();

  private effectRef?: EffectRef;

  enablePageSharing() {
    if (this.effectRef) {
      return;
    }
    // Apply the tokens on `<html>` (and not `<body>`) so that custom properties declared on `:root`
    // that reference them (e.g. `--my-color: var(--mat-sys-primary)`) resolve against the overridden values.
    this.effectRef = effect(
      () => {
        for (const [property, value] of Object.entries(this.getStyle())) {
          this.renderer.setStyle(this.document.documentElement, property, value, RendererStyleFlags2.DashCase);
        }
      },
      { injector: this.injector },
    );

    this._isPageSharingActive.set(true);
  }

  disablePageSharing() {
    if (!this.effectRef) {
      return;
    }
    // Remove only the tokens (same keys in light and dark modes), leaving any other inline style untouched.
    for (const property of Object.keys(this.getStyle())) {
      this.renderer.removeStyle(this.document.documentElement, property, RendererStyleFlags2.DashCase);
    }
    this.effectRef.destroy();
    this.effectRef = undefined;

    this._isPageSharingActive.set(false);
  }

  togglePageSharing() {
    if (!this.effectRef) {
      this.enablePageSharing();
    } else {
      this.disablePageSharing();
    }
  }
}
