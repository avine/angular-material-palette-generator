import { afterRenderEffect, Directive, ElementRef, inject, input, signal } from '@angular/core';
import { PaletteGenService } from '../palette-gen.service';

@Directive({
  selector: '[pgCubicBezierControlColors]',
  host: {
    '[style.color]': '"var(" + cssVarName() + ")"',
  },
})
export class CubicBezierControlColorsDirective {
  private host: HTMLElement = inject(ElementRef).nativeElement;

  private service = inject(PaletteGenService);

  cssVarName = input.required<string>({ alias: 'pgCubicBezierControlColors' });

  public rgbColor = signal<string | undefined>(undefined); // Part of the public directive API

  constructor() {
    afterRenderEffect(() => {
      this.service.refreshCanvas?.();
      this.cssVarName();

      const rgbColor = this.host.computedStyleMap().get('color')?.toString();
      this.rgbColor.set(rgbColor);
    });
  }
}
