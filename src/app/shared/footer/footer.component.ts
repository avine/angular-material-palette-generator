import { Component, inject, ViewEncapsulation } from '@angular/core';
import { PaletteGenService } from '../palette-gen';
import { PaletteGenSnapshotsComponent } from '../palette-gen-snapshots';

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
