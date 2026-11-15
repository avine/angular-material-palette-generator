import { Component, inject, TemplateRef, viewChild, ViewEncapsulation } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { PaletteGenService } from '../palette-gen.service';
import { PaletteName } from '../palette-matching/palette-matching.types';
import { importTypedFormValue } from './palette-gen-import.utils';

@Component({
  selector: 'pg-palette-gen-import',
  imports: [ReactiveFormsModule, MatButtonModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule],
  templateUrl: './palette-gen-import.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class PaletteGenImportComponent {
  private service = inject(PaletteGenService);

  private importDialog?: MatDialogRef<unknown>;

  private dialog = inject(MatDialog);

  private importTemplate = viewChild.required<TemplateRef<unknown>>('importTemplate');

  protected importCtrl = new FormControl('');

  protected openDialog() {
    this.importDialog = this.dialog.open(this.importTemplate(), { width: 'calc(100% - 3rem)', maxWidth: '960px' });
  }

  protected import() {
    const typedFormValue = importTypedFormValue(this.importCtrl.value);

    if (typedFormValue === null) {
      this.importCtrl.setErrors({ import: true });
      return;
    }

    let importCtrlValueFormatted: string;

    switch (typedFormValue.type) {
      case 'formValueMap': {
        Object.entries(typedFormValue.data).forEach(([paletteName, formValue]) => {
          this.service.formValueMap[paletteName as PaletteName].set(formValue);
        });

        importCtrlValueFormatted = Object.values(typedFormValue.data)
          .map((formValue) => JSON.stringify(formValue))
          .join('\n');
        break;
      }

      case 'formValue': {
        this.service.formValue().set(typedFormValue.data);

        importCtrlValueFormatted = JSON.stringify(typedFormValue.data);
        break;
      }
    }

    this.importCtrl.setValue(importCtrlValueFormatted);

    this.importDialog?.close();
  }
}
