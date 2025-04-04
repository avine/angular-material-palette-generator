import { Component, computed, inject, signal, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { PaletteGenService } from '../palette-gen';
import { PaletteGenFormValue } from '../palette-gen-form';
import { PaletteGenPreviewComponent } from '../palette-gen-preview';

@Component({
  selector: 'pl-palette-gen-content',
  host: { class: 'pl-palette-gen-content' },
  imports: [MatButtonModule, MatIconModule, MatTooltipModule, PaletteGenPreviewComponent],
  templateUrl: './palette-gen-content.component.html',
  styleUrl: './palette-gen-content.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class PaletteGenContentComponent {
  protected service = inject(PaletteGenService);

  protected formValueMirror = signal<PaletteGenFormValue | undefined>(undefined);

  protected setMirror() {
    this.formValueMirror.set(this.service.formValue());
  }

  protected unsetMirror() {
    this.formValueMirror.set(undefined);
  }

  protected compact = signal(false);

  protected compactAction = computed(() => (this.compact() ? 'Expand preview' : 'Reduce preview'));

  protected toggleCompact() {
    this.compact.update((compact) => !compact);
  }
}
