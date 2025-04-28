import { Pipe, PipeTransform } from '@angular/core';
import { contrastRatio } from 'wcag-contrast-utils';

// TODO: move this pipe because it is also used in "preview" and "overview" components

@Pipe({
  name: 'preferBlackForgroundColor',
})
export class PreferBlackForgroundColorPipe implements PipeTransform {
  transform(backgroundColor: string): boolean {
    return contrastRatio(backgroundColor, '#fff') < contrastRatio(backgroundColor, '#000');
  }
}
