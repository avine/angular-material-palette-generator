import { Component, inject, ViewEncapsulation } from '@angular/core';
import { PaletteGenPreviewComponent } from '../palette-gen-preview';
import { PaletteGenService } from '../palette-gen/palette-gen.service';

@Component({
  selector: 'app-palette-gen-content',
  host: { class: 'app-palette-gen-content' },
  imports: [PaletteGenPreviewComponent],
  templateUrl: './palette-gen-content.component.html',
  styleUrl: './palette-gen-content.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class PaletteGenContentComponent {
  protected service = inject(PaletteGenService);
}
