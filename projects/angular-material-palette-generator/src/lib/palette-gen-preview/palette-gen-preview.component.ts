
import { booleanAttribute, Component, computed, inject, input, output, ViewEncapsulation, DOCUMENT } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { PreferBlackForgroundColorPipe } from '../constrast-ratio/prefer-black-forground-color.pipe';
import { WcagContrastRatioCompliancePipe } from '../constrast-ratio/wcag-contrast-ratio-compliance.pipe';
import { PaletteGenFormValue } from '../palette-gen-form/palette-gen-form.types';
import { PaletteGenData } from '../palette-gen.types';
import { buildPaletteGenData, buildSassMapStringified } from '../palette-gen.utils';
import { PaletteMatchingConfig } from '../palette-matching/pipes/palette-matching-config.types';
import { PaletteMatchingPercentageToTokensPipe } from '../palette-matching/pipes/palette-matching-percentage-to-tokens.pipe';
import { PaletteMatchingTokensToMirrorColorPipe } from '../palette-matching/pipes/palette-matching-tokens-to-mirror-color.pipe';

@Component({
  selector: 'pg-palette-gen-preview',
  host: { class: 'pg-palette-gen-preview' },
  imports: [
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    PaletteMatchingPercentageToTokensPipe,
    PaletteMatchingTokensToMirrorColorPipe,
    PreferBlackForgroundColorPipe,
    WcagContrastRatioCompliancePipe,
  ],
  templateUrl: './palette-gen-preview.component.html',
  styleUrl: './palette-gen-preview.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class PaletteGenPreviewComponent {
  private clipboard = inject(DOCUMENT).defaultView?.navigator.clipboard;

  mirrorView = input(false, { transform: booleanAttribute });

  formValue = input<PaletteGenFormValue>();

  action = output<void>();

  compact = input(false);

  matchingConfig = input<PaletteMatchingConfig>({ name: undefined, mode: 'light' });

  protected data = computed<PaletteGenData>(() => buildPaletteGenData(this.formValue()));

  protected sassMapToClipboard() {
    const formValue = this.formValue();
    if (!formValue) {
      return;
    }
    this.clipboard?.writeText(buildSassMapStringified(formValue, this.data().list));
  }
}
