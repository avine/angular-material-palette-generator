import { DOCUMENT } from '@angular/common';
import { Component, effect, inject, input, signal, ViewEncapsulation } from '@angular/core';
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
import { filter, map, startWith, tap } from 'rxjs';
import { CssColorObserverComponent } from '../css-var-observer/css-var-observer.component';
import { CubicBezierControlColors, CubicBezierControlComponent } from '../cubic-bezier-control';
import { PaletteGenFormValue } from './palette-gen-form.types';
import { getPaletteGenForm } from './palette-gen-form.utils';

@Component({
  selector: 'app-palette-gen-form',
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
    CssColorObserverComponent,
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
    this.localStorage?.setItem('app-palette-gen-form', JSON.stringify(formValue));
  }

  private restore() {
    const value = this.localStorage?.getItem('app-palette-gen-form');
    if (!value) {
      return;
    }
    try {
      this.form.setValue(JSON.parse(value));
      this.form.updateValueAndValidity();
    } catch {
      this.localStorage?.removeItem('app-palette-gen-form');
      console.error('ColorGenFormComponent: unable to restore value', value);
    }
  }

  // ----- Material colors in RGB (for the canvas configuration) -----

  protected cssVarConfig: CubicBezierControlColors = {
    linearColor: '--mat-sys-surface-container-highest',
    curveColor: '--mat-sys-on-surface-variant',
    stickColor: '--mat-sys-primary',
  };

  protected colorMap = signal<typeof this.cssVarConfig>({
    linearColor: 'transparent',
    curveColor: 'transparent',
    stickColor: 'transparent',
  });
}
