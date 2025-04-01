import { Component, signal, ViewEncapsulation } from '@angular/core';
import { ColorGenFormComponent, PaletteGenFormValue } from '../palette-gen-form';
import { ColorGenGuideComponent } from '../palette-gen-guide';
import { PaletteGenPreviewComponent } from '../palette-gen-preview';

@Component({
  selector: 'app-palette-gen',
  imports: [ColorGenFormComponent, ColorGenGuideComponent, PaletteGenPreviewComponent],
  templateUrl: './palette-gen.component.html',
  styleUrl: './palette-gen.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class PaletteGenComponent {
  protected formValue = signal<PaletteGenFormValue | undefined>(undefined);

  protected formValueMirror = signal<PaletteGenFormValue | undefined>(undefined);
}
