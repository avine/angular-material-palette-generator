import { Component, inject, ViewEncapsulation } from '@angular/core';
import { PaletteGenSnapshotsComponent } from '../palette-gen-snapshots';
import { PaletteGenService } from '../palette-gen/palette-gen.service';

@Component({
  selector: 'app-footer',
  host: { class: 'app-footer' },
  imports: [PaletteGenSnapshotsComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class FooterComponent {
  protected service = inject(PaletteGenService);
}
