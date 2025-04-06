import { Pipe, PipeTransform } from '@angular/core';
import { PALETTE_MATCHING_MAP } from '../palette-matching';
import { PaletteGenPreviewPaletteMatch } from './palette-gen-preview.types';

@Pipe({
  name: 'matchTokens',
})
export class MatchTokensPipe implements PipeTransform {
  transform(percentage: number, { name, mode }: PaletteGenPreviewPaletteMatch) {
    if (!name) {
      return '';
    }
    return (PALETTE_MATCHING_MAP[name][mode][percentage] ?? []).join(', ');
  }
}
