import { TitleCasePipe } from '@angular/common';
import { Component, inject, output, ViewEncapsulation } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { PaletteGenService } from '../palette-gen.service';
import { PaletteMode, PaletteName } from '../palette-matching/palette-matching.types';
import { PALETTE_MODES, PALETTE_NAMES } from '../palette-matching/palette-matching.utils';

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

  protected paletteModes: PaletteMode[] = PALETTE_MODES;

  protected paletteNames: PaletteName[] = PALETTE_NAMES;

  paletteModeChange = output<PaletteMode>();

  paletteNameChange = output<PaletteName>();
}
