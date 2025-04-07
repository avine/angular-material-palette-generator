import { Pipe, PipeTransform } from '@angular/core';
import { PaletteMatchingTokensConfig } from './match-matching-tokens.types';
import { PALETTE_MATCHING_MAP } from './palette-matching';

@Pipe({
  name: 'paletteMatchingTokens',
})
export class PaletteMatchingTokensPipe implements PipeTransform {
  transform(percentage: number, { name, mode }: PaletteMatchingTokensConfig) {
    if (!name) {
      return '';
    }
    return (PALETTE_MATCHING_MAP[name][mode][percentage] ?? []).join(', ');
  }
}
