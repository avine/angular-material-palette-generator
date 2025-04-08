import { Pipe, PipeTransform } from '@angular/core';
import { contrastRatio } from 'wcag-contrast-utils';

// According to WCAG 2.1 guidelines, the required contrast ratios for normal text are:
// - AA: 4.5
// - AAA: 7

@Pipe({
  name: 'wcagContrastRatioCompliance',
})
export class WcagContrastRatioCompliancePipe implements PipeTransform {
  transform(colorA: string, colorB?: string) {
    if (!colorB) {
      return undefined;
    }

    const ratio = contrastRatio(colorA, colorB);
    if (ratio >= 7) {
      return { icon: 'done_all', label: 'WCAG 2 AAA Compliant' };
    }
    if (ratio >= 4.5) {
      return { icon: 'check', label: 'WCAG 2 AA Compliant' };
    }
    return { icon: 'warning', label: 'Not WCAG Compliant' };
  }
}
