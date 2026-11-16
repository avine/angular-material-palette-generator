import { afterRenderEffect, Directive, ElementRef, inject, input, signal } from '@angular/core';

@Directive({
  selector: '[pgCubicBezierControlColors]',
  host: {
    '[style.color]': '"var(" + cssVarName() + ")"',
  },
})
export class CubicBezierControlColorsDirective {
  private host: HTMLElement = inject(ElementRef).nativeElement;

  cssVarName = input.required<string>({ alias: 'pgCubicBezierControlColors' });

  /** Trigger signal: whenever its value changes, the color is read again (e.g. on theme change). */
  refreshOn = input<unknown>();

  public rgbColor = signal<string | undefined>(undefined); // Part of the public directive API

  constructor() {
    afterRenderEffect(() => {
      this.refreshOn();
      this.cssVarName();

      const rgbColor = this.host.computedStyleMap().get('color')?.toString();
      this.rgbColor.set(rgbColor);
    });
  }
}
