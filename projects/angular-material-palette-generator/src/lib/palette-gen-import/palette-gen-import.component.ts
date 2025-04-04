import { Component, inject, output, TemplateRef, viewChild, ViewEncapsulation } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { PaletteGenFormValue } from '../palette-gen-form';
import { parsePaletteGenFormValue } from '../palette-gen-form/palette-gen-form.utils';

@Component({
  selector: 'pl-palette-gen-import',
  imports: [ReactiveFormsModule, MatButtonModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule],
  templateUrl: './palette-gen-import.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class PaletteGenImportComponent {
  private importDialog?: MatDialogRef<unknown>;

  private dialog = inject(MatDialog);

  private importTemplate = viewChild.required<TemplateRef<unknown>>('importTemplate');

  protected importCtrl = new FormControl('');

  protected openDialog() {
    this.importDialog = this.dialog.open(this.importTemplate(), { width: '420px' });
  }

  formValue = output<PaletteGenFormValue>();

  protected import() {
    const formValue = parsePaletteGenFormValue(this.importCtrl.value!);
    if (formValue) {
      this.formValue.emit(formValue);

      this.importDialog?.close();

      this.importCtrl.setValue(JSON.stringify(formValue)); // This is just to format the value
    } else {
      this.importCtrl.setErrors({ import: true });
    }
  }
}
