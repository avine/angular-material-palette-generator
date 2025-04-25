import { Component, ViewEncapsulation } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'pg-palette-gen-showcase',
  host: { class: 'pg-palette-gen-showcase' },
  imports: [
    ReactiveFormsModule,
    MatBadgeModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatProgressBarModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatTabsModule,
  ],
  templateUrl: './palette-gen-showcase.component.html',
  styleUrl: './palette-gen-showcase.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class PaletteGenShowcaseComponent {
  formControl1 = new FormControl('', [Validators.required]);
  formControl2 = new FormControl('', [Validators.required]);

  constructor() {
    this.formControl2.markAsTouched();
  }
}
