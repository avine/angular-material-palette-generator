import { afterRenderEffect, Directive, ElementRef, inject, input, signal } from '@angular/core';
import { CssColorObserverService } from './css-var-observer.service';

@Directive({
  selector: '[plCssVarItemObserver]',
  host: {
    '[style.color]': '"var(" + cssVarName() + ")"',
  },
})
export class CssVarItemObserverDirective {
  private host: HTMLElement = inject(ElementRef).nativeElement;

  trigger = inject(CssColorObserverService).trigger;

  cssVarName = input.required<string>({ alias: 'plCssVarItemObserver' });

  rgbColor = signal<string | undefined>(undefined);

  constructor() {
    afterRenderEffect(() => {
      this.trigger?.();
      this.cssVarName();

      const rgbColor = this.host.computedStyleMap().get('color')?.toString();
      this.rgbColor.set(rgbColor);
    });
  }
}
