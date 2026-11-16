import { TitleCasePipe } from '@angular/common';
import { booleanAttribute, Component, computed, effect, inject, input, ViewEncapsulation } from '@angular/core';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { filter, startWith } from 'rxjs';
import { getPaletteTones } from '../palette-gen.config';
import { PaletteGenService } from '../palette-gen.service';
import { PaletteName } from '../palette-matching/palette-matching.types';
import { PALETTE_NAMES } from '../palette-matching/palette-matching.utils';
import { PaletteGenFormValue } from './palette-gen-form.types';
import {
  addPaletteGenFormAnchor,
  formatPaletteIssue,
  getPaletteGenForm,
  paletteGenFormValuesEqual,
  setPaletteGenFormValue,
} from './palette-gen-form.utils';

@Component({
  selector: 'pg-palette-gen-form',
  host: {
    class: 'pg-palette-gen-form',
    '[style.--pg-palette-gen-form-control-size]': 'service.controlSize() + "px"',
  },
  imports: [
    TitleCasePipe,
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
  ],
  templateUrl: './palette-gen-form.component.html',
  styleUrl: './palette-gen-form.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class PaletteGenFormComponent {
  protected service = inject(PaletteGenService);

  protected paletteNames: PaletteName[] = PALETTE_NAMES;

  hidePaletteNamesSelector = input(false, { transform: booleanAttribute });

  protected form = getPaletteGenForm();

  private formValue = toSignal(this.form.valueChanges.pipe(startWith(this.form.value)), { requireSync: true });

  /** Tones available for the anchors (the tones of the palette). */
  protected tones = computed(() => getPaletteTones(this.formValue().neutral ?? false));

  /** Tone of each anchor (`null` for anchors pinned at their own tone). */
  protected anchorTones = computed(() => (this.formValue().anchors ?? []).map((anchor) => anchor?.tone ?? null));

  protected issues = computed(() => this.service.dataMap[this.service.paletteName()]().issues.map(formatPaletteIssue));

  protected addAnchor() {
    addPaletteGenFormAnchor(this.form);
  }

  protected removeAnchor(index: number) {
    this.form.controls.anchors.removeAt(index);
  }

  constructor() {
    this.handleFormStatusChanges(); // Note: must be executed after `this.restore()`
    this.handleServiceFormValue();
  }

  private handleFormStatusChanges() {
    this.form.statusChanges
      .pipe(
        takeUntilDestroyed(),
        startWith(this.form.valid ? 'VALID' : 'INVALID'),
        filter((status) => status === 'VALID'),
      )
      .subscribe(() => {
        this.service.formValue().set(this.form.value as PaletteGenFormValue);
      });
  }

  private handleServiceFormValue() {
    effect(() => {
      const formValue = this.service.formValue()();
      if (formValue && !paletteGenFormValuesEqual(formValue, this.form.value as PaletteGenFormValue)) {
        setPaletteGenFormValue(this.form, formValue);
        this.form.updateValueAndValidity();
      }
    });
  }
}
