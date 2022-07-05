import fs from 'fs';
import { test, expect, describe } from '@jest/globals';
import ChordIllustrator from '../src/index';

describe('basic makes', () => {
  test('can make chord', () => {
    const testChord = ChordIllustrator.make({
      name: 'Bm',
      mutedStrings: ['yes'],
      barre: { fret: 1, from: 1, to: 5 },
      fingering: [
        {
          fret: 1,
          barre: { from: 1, to: 5 },
        },
        { fret: 2, string: 2 },
        { fret: 3, string: 3 },
        { fret: 3, string: 4 },
      ],
    });
    fs.writeFileSync('whatever.svg', testChord.toString());
    expect(testChord).toBe('Am');
  });
});
