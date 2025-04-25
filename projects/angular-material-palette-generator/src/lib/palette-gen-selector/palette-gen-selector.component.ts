import { TitleCasePipe } from '@angular/common';
import { Component, inject, output, ViewEncapsulation } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { PaletteGenService } from '../palette-gen.service';
import { PaletteMode, PaletteName } from '../palette-matching';

@Component({
  selector: 'pg-palette-gen-selector',
  host: { class: 'pg-palette-gen-selector' },
  imports: [TitleCasePipe, MatButtonToggleModule, MatFormFieldModule, MatSelectModule],
  templateUrl: './palette-gen-selector.component.html',
  styleUrl: './palette-gen-selector.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class PaletteGenSelectorComponent {
  protected service = inject(PaletteGenService);

  protected paletteModes: PaletteMode[] = ['light', 'dark'];

  protected paletteNames: PaletteName[] = ['primary', 'secondary', 'tertiary', 'neutral', 'neutral-variant', 'error'];

  paletteModeChange = output<PaletteMode>();

  paletteNameChange = output<PaletteName>();
}
