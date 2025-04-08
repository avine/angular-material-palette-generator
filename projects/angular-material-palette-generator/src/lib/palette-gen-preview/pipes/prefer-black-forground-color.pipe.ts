import { Pipe, PipeTransform } from '@angular/core';
import { contrastRatio } from 'wcag-contrast-utils';

@Pipe({
  name: 'preferBlackForgroundColor',
})
export class PreferBlackForgroundColorPipe implements PipeTransform {
  transform(backgroundColor: string): boolean {
    return contrastRatio(backgroundColor, '#fff') < contrastRatio(backgroundColor, '#000');
  }
}
