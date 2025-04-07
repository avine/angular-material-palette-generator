import { inspect } from 'node:util';

// Run this script `npm start` and copy/paste the output in:
//    `projects/angular-material-palette-generator/src/lib/palette-matching/palette-matching.ts`
import { PALETTE_MATCHING_ERRORS, PALETTE_MATCHING_MAP } from './palette-matching.utils.ts';

if (PALETTE_MATCHING_ERRORS.length) {
  console.log('\n----- Errors ----------------------------------\n');
  console.log(PALETTE_MATCHING_ERRORS.join('\n'));
}

console.log('\n----- Palette matching map --------------------\n');
console.log(inspect(PALETTE_MATCHING_MAP, { depth: null }));
