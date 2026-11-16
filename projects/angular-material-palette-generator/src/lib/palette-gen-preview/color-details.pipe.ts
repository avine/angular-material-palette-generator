import { Pipe, PipeTransform } from '@angular/core';
import { formatColorDetails } from '../palette-gen-engine/palette-gen-engine.utils';

@Pipe({
  name: 'colorDetails',
})
export class ColorDetailsPipe implements PipeTransform {
  transform(color: string): string {
    return formatColorDetails(color);
  }
}
