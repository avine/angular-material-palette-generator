import { Pipe, PipeTransform } from '@angular/core';
import { PALETTE_TOKEN_MATCHING_MAP } from '../palette-matching';
import { PaletteMatchingConfig } from './palette-matching-config.types';

@Pipe({
  name: 'paletteMatchingTokensToMirrorColor',
})
export class PaletteMatchingTokensToMirrorColorPipe implements PipeTransform {
  transform(
    tokens: string[],
    { name, mode }: PaletteMatchingConfig,
    percentageMap: Record<number, string>,
  ): string | undefined {
    if (!name) {
      return undefined;
    }

    for (const token of tokens) {
      const mirrorToken = token.startsWith('on-') ? token.substring(3) : `on-${token}`;

      const percentage = PALETTE_TOKEN_MATCHING_MAP[name][mode][mirrorToken];
      if (!percentage) {
        continue;
      }

      const color = percentageMap[percentage];
      if (color) {
        return color;
      }
    }

    return undefined;
  }
}
