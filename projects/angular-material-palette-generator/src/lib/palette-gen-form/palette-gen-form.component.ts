import { DOCUMENT } from '@angular/common';
import { Component, effect, inject, input, ViewEncapsulation } from '@angular/core';
import { outputFromObservable } from '@angular/core/rxjs-interop';
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
import { PaletteGenService } from 'angular-material-palette-generator';
import { filter, map, startWith, tap } from 'rxjs';
import { CubicBezierControlComponent } from '../cubic-bezier-control';
import { PaletteGenFormValue } from './palette-gen-form.types';
import { getPaletteGenForm } from './palette-gen-form.utils';

@Component({
  selector: 'pg-palette-gen-form',
  host: {
    class: 'pg-palette-gen-form',
    '[style.--pg-palette-gen-form-control-size]': 'controlSize() + "px"',
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
export class ColorGenFormComponent {
  private localStorage = inject(DOCUMENT).defaultView?.localStorage;

  protected form = getPaletteGenForm();

  formValue = input<PaletteGenFormValue>();

  formValueChange = outputFromObservable<PaletteGenFormValue>(
    this.form.statusChanges.pipe(
      startWith(this.form.valid ? 'VALID' : 'INVALID'),
      filter((status) => status === 'VALID'),
      map(() => this.form.value as PaletteGenFormValue),
      tap((formValue) => this.store(formValue)),
    ),
  );

  protected controlSize = inject(PaletteGenService).controlSize;

  constructor() {
    this.initFormValueHandler();
    this.restore();
  }

  // ----- form -----

  private initFormValueHandler() {
    effect(() => {
      const formValue = this.formValue();
      if (formValue) {
        this.form.setValue(formValue);
        this.form.updateValueAndValidity();
      }
    });
  }

  // ----- storage -----

  private store(formValue: PaletteGenFormValue) {
    this.localStorage?.setItem('pg-palette-gen-form', JSON.stringify(formValue));
  }

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
      console.error('ColorGenFormComponent: unable to restore value', value);
    }
  }
}
