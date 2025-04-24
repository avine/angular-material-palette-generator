import { DOCUMENT } from '@angular/common';
import { Component, effect, inject, ViewEncapsulation } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatTooltipModule } from '@angular/material/tooltip';
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
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatSliderModule,
    MatTooltipModule,
    CubicBezierControlComponent,
  ],
  templateUrl: './palette-gen-form.component.html',
  styleUrl: './palette-gen-form.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class PaletteGenFormComponent {
  protected service = inject(PaletteGenService);

  private localStorage = inject(DOCUMENT).defaultView?.localStorage;

  protected form = getPaletteGenForm();

  constructor() {
    //this.restore(); // TODO: should depend on paletteName
    this.handleFormStatusChanges(); // Note: must be executed after `this.restore()`
    this.handleServiceFormValue();
  }

  // ----- form -----

  private handleFormStatusChanges() {
    this.form.statusChanges
      .pipe(
        takeUntilDestroyed(),
        startWith(this.form.valid ? 'VALID' : 'INVALID'),
        filter((status) => status === 'VALID'),
      )
      .subscribe(() => {
        this.service.formValue().set(this.form.value as PaletteGenFormValue);
        //this.store(this.form.value as PaletteGenFormValue); // TODO: should depend on paletteName
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

  // ----- storage -----

  private restore() {
    const value = this.localStorage?.getItem('pg-palette-gen-form');
    if (!value) {
      return;
    }
    try {
      this.form.setValue(JSON.parse(value));
      this.form.updateValueAndValidity();
    } catch {
      this.localStorage?.removeItem('pg-palette-gen-form');
      console.error('PaletteGenFormComponent: unable to restore value', value);
    }
  }

  private store(formValue: PaletteGenFormValue) {
    this.localStorage?.setItem('pg-palette-gen-form', JSON.stringify(formValue));
  }
}
