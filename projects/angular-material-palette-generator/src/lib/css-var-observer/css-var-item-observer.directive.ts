import { afterRenderEffect, Directive, ElementRef, inject, input, signal } from '@angular/core';
// import { ThemeService } from '../theme';

@Directive({
  selector: '[plCssVarItemObserver]',
  host: {
    '[style.color]': '"var(" + cssVarName() + ")"',
  },
})
export class CssVarItemObserverDirective {
  private host: HTMLElement = inject(ElementRef).nativeElement;

  // private theme = inject(ThemeService).theme;

  cssVarName = input.required<string>({ alias: 'plCssVarItemObserver' });

  rgbColor = signal<string | undefined>(undefined);

  constructor() {
    afterRenderEffect(() => {
      // this.theme();
      this.cssVarName();

      const rgbColor = this.host.computedStyleMap().get('color')?.toString();
      this.rgbColor.set(rgbColor);
    });
  }
}
