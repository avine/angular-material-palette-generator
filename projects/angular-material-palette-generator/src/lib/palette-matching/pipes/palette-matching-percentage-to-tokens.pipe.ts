import { Pipe, PipeTransform } from '@angular/core';
import { PALETTE_TOKEN_MATCHING_MAP } from '../palette-matching.config';
import { PaletteMatchingConfig } from './palette-matching-config.types';

@Pipe({
  name: 'paletteMatchingPercentageToTokens',
})
export class PaletteMatchingPercentageToTokensPipe implements PipeTransform {
  transform(percentage: number, { name, mode }: PaletteMatchingConfig): string[] {
    if (!name) {
      return [];
    }
    return PALETTE_TOKEN_MATCHING_MAP[name][mode][percentage] ?? [];
  }
}
