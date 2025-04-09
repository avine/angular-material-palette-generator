import { afterRenderEffect, Directive, ElementRef, inject, input, signal } from '@angular/core';
import { PaletteGenService } from '../palette-gen.service';

@Directive({
  selector: '[plCubicBezierControlColors]',
  host: {
    '[style.color]': '"var(" + cssVarName() + ")"',
  },
})
export class CubicBezierControlColorsDirective {
  private host: HTMLElement = inject(ElementRef).nativeElement;

  private refreshCanvas = inject(PaletteGenService).refreshCanvas;

  cssVarName = input.required<string>({ alias: 'plCubicBezierControlColors' });

  public rgbColor = signal<string | undefined>(undefined); // Part of the public directive API

  constructor() {
    afterRenderEffect(() => {
      this.refreshCanvas?.();
      this.cssVarName();

      const rgbColor = this.host.computedStyleMap().get('color')?.toString();
      this.rgbColor.set(rgbColor);
    });
  }
}
