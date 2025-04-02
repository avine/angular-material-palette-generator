import { DOCUMENT } from '@angular/common';
import { Component, computed, inject, signal, TemplateRef, viewChild, ViewEncapsulation } from '@angular/core';
import { outputFromObservable, takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { FormControl, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { filter, map, startWith, tap } from 'rxjs';
import { CssColorObserverComponent } from '../css-var-observer/css-var-observer.component';
import { CubicBezierControlColors, CubicBezierControlComponent } from '../cubic-bezier-control';
import { addFormControlErrors, removeFormControlErrors } from '../form-control-errors';
import { PaletteGenFormValue } from './palette-gen-form.types';
import { hexColorValidator, RANGE_ERROR_KEY, rangeValidatorFactory } from './palette-gen-form.validator';

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

  protected form = inject(NonNullableFormBuilder).group(
    {
      color: ['#666666', [Validators.required, hexColorValidator]],
      start: [0, [Validators.required]],
      end: [100, [Validators.required]],
      params: [{ p1x: 0, p1y: 0, p2x: 1, p2y: 1 }],
      reverse: [false],
      neutral: [false],
    },
    { validators: [rangeValidatorFactory()] },
  );

  formValueChange = outputFromObservable<PaletteGenFormValue | undefined>(
    this.form.statusChanges.pipe(
      takeUntilDestroyed(),
      startWith(this.form.valid ? 'VALID' : 'INVALID'),
      filter((status) => status === 'VALID'),
      map(() => this.form.value as PaletteGenFormValue),
      tap((formValue) => this.store(formValue)),
    ),
  );

  constructor() {
    this.initRangeErrorHandler();
    this.restore();
  }

  // ----- form -----

  private initRangeErrorHandler() {
    const updateRangeError = (formControl: FormControl) => {
      if (this.form.getError(RANGE_ERROR_KEY)) {
        // Propagate the error from parent to child control
        addFormControlErrors(formControl, { [RANGE_ERROR_KEY]: true });
      } else if (formControl.hasError(RANGE_ERROR_KEY)) {
        // Propagate the removal of the error from the parent to the child control
        removeFormControlErrors(formControl, [RANGE_ERROR_KEY]);
      }
    };
    this.form.valueChanges.pipe(takeUntilDestroyed()).subscribe(() => {
      updateRangeError(this.form.controls.start);
      updateRangeError(this.form.controls.end);
    });
  }

  // ----- settings -----

  private settingsDialog?: MatDialogRef<unknown>;

  private dialog = inject(MatDialog);

  private settingsTemplate = viewChild.required<TemplateRef<unknown>>('settingsTemplate');

  protected settingsCtrl = new FormControl('');

  protected openSettings() {
    this.settingsDialog = this.dialog.open(this.settingsTemplate(), { width: '420px' });
  }

  protected applySettings() {
    try {
      const value = JSON.parse(this.settingsCtrl.value!);

      this.form.setValue(value);
      this.form.updateValueAndValidity();

      this.settingsDialog?.close();

      this.settingsCtrl.setValue(JSON.stringify(value)); // This is just to format the value
    } catch {
      this.settingsCtrl.setErrors({ settings: true });
    }
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

  // ----- snapshot -----

  protected maxSnapshots = 10;

  protected snapshots = signal<{ alias: string; value: string }[]>([]);

  protected formValueSnapshot = toSignal(this.form.valueChanges.pipe(map((formValue) => JSON.stringify(formValue))), {
    initialValue: JSON.stringify(this.form.value),
  });

  protected takeSnapshot() {
    this.snapshots.update((snapshots) => [
      ...snapshots,
      {
        alias: this.nextSnapshotAlias,
        value: this.formValueSnapshot(),
      },
    ]);
  }

  protected hasSelectedSnapshot = computed(() =>
    this.snapshots().some(({ value }) => value === this.formValueSnapshot()),
  );

  protected removeSelectedSnapshot() {
    this.snapshots.update((snapshots) => snapshots.filter(({ value }) => value !== this.formValueSnapshot()));
  }

  protected applySnapshot(snapshot: string) {
    this.form.setValue(JSON.parse(snapshot));
    this.form.updateValueAndValidity();
  }

  private snapshotAliasList = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  private snapshotAliasIndex = 0;

  private get nextSnapshotAlias() {
    return this.snapshotAliasList[this.snapshotAliasIndex++ % this.snapshotAliasList.length];
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
