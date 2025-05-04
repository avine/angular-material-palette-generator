import { Component, DestroyRef, inject, ViewEncapsulation } from '@angular/core';
import { PaletteGenOverlayService, PaletteGenShowcaseComponent } from 'angular-material-palette-generator';

@Component({
  selector: 'app-palette-gen-overlay-demo',
  imports: [PaletteGenShowcaseComponent],
  templateUrl: './palette-gen-overlay-demo.component.html',
  encapsulation: ViewEncapsulation.None,
})
export default class PaletteGenOverlayComponent {
  protected paletteGenOverlayService = inject(PaletteGenOverlayService);

  constructor() {
    this.paletteGenOverlayService.enable();

    inject(DestroyRef).onDestroy(() => this.paletteGenOverlayService.disable());
  }
}
