import { Pipe, PipeTransform } from '@angular/core';
import { PALETTE_PERCENTAGE_MATCHING_MAP } from '../palette-matching';
import { PaletteMatchingConfig } from './palette-matching-config.types';

@Pipe({
  name: 'palettePercentageMatching',
})
export class PalettePercentageMatchingPipe implements PipeTransform {
  transform(percentage: number, { name, mode }: PaletteMatchingConfig) {
    if (!name) {
      return '';
    }
    return (PALETTE_PERCENTAGE_MATCHING_MAP[name][mode][percentage] ?? []).join(', ');
  }
}
