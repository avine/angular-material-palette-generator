import { Pipe, PipeTransform } from '@angular/core';
import { contrastRatio } from 'wcag-contrast-utils';

@Pipe({
  name: 'forgroundColor',
})
export class ForgroundColorPipe implements PipeTransform {
  transform(forgroundColor: string) {
    return contrastRatio(forgroundColor, '#fff') < contrastRatio(forgroundColor, '#000');
  }
}
