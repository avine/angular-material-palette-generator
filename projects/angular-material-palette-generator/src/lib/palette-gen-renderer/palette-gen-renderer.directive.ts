import { Directive, inject } from '@angular/core';
import { PaletteGenRendererService } from './palette-gen-renderer.service';

@Directive({
  selector: '[pgPaletteGenRenderer]',
  host: {
    '[style]': 'rendererService.getStyle()',
  },
})
export class PaletteGenRendererDirective {
  protected rendererService = inject(PaletteGenRendererService);
}
