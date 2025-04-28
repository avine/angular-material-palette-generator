import { Component, effect, inject, ViewEncapsulation } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { filter, startWith } from 'rxjs';
import { CubicBezierControlComponent } from '../cubic-bezier-control';
import { PaletteGenService } from '../palette-gen.service';
import { PaletteGenFormValue } from './palette-gen-form.types';
import { getPaletteGenForm, paletteGenFormValuesEqual } from './palette-gen-form.utils';

@Component({
  selector: 'pg-palette-gen-form',
  host: {
    class: 'pg-palette-gen-form',
    '[style.--pg-palette-gen-form-control-size]': 'service.controlSize() + "px"',
  },
  imports: [
    ReactiveFormsModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSliderModule,
    CubicBezierControlComponent,
  ],
  templateUrl: './palette-gen-form.component.html',
  styleUrl: './palette-gen-form.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class PaletteGenFormComponent {
  protected service = inject(PaletteGenService);

  protected form = getPaletteGenForm();

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
        this.form.setValue(formValue);
        this.form.updateValueAndValidity();
      }
    });
  }
}
