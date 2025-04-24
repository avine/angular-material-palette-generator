import { Pipe, PipeTransform } from '@angular/core';
import { PALETTE_PERCENTAGE_MATCHING_MAP } from '../palette-matching.config';
import { PaletteMatchingConfig } from './palette-matching-config.types';

@Pipe({
  name: 'paletteMatchingTokensToMirrorColor',
})
export class PaletteMatchingTokensToMirrorColorPipe implements PipeTransform {
  transform(
    tokens: string[],
    { name, mode }: PaletteMatchingConfig,
    colorMap: Record<number, string>,
  ): string | undefined {
    if (!name) {
      return undefined;
    }

    for (const token of tokens) {
      const mirrorToken = token.startsWith('on-') ? token.substring(3) : `on-${token}`;

      const percentage = PALETTE_PERCENTAGE_MATCHING_MAP[name][mode][mirrorToken];
      if (!percentage) {
        continue;
      }

      const color = colorMap[percentage];
      if (color) {
        return color;
      }
    }

    return undefined;
  }
}
