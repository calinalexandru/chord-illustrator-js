import fs from 'fs';
import { test, expect, describe } from '@jest/globals';
import ChordIllustrator from '../src/index';

describe('basic makes', () => {
  test('can make chord', () => {
    const testChord = ChordIllustrator.make({
      name: 'Bm',
      mutedStrings: ['yes'],
      fretboardRange: { from: 1, to: 12 },
      fingering: [
        { fret: 5, barre: { from: 3, to: 5 } },
        { fret: 6, string: 2 },
        { fret: 7, string: 3 },
        { fret: 7, string: 4 },
      ],
    });
    fs.writeFileSync('mock.svg', testChord.toString());
    expect(testChord).toBe('Am');
  });
});
