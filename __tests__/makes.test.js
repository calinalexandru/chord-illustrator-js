import fs from 'fs';
import { test, expect, describe } from '@jest/globals';
import ChordIllustrator from '../src/index';

describe('basic makes', () => {
  test('can make chord', () => {
    const testChord = ChordIllustrator.make({
      name: 'Bm',
      mutedStrings: ['yes'],
      fingering: [
        { fret: 1, barre: { from: 1, to: 5 } },
        { fret: 2, string: 2 },
        { fret: 3, string: 3 },
        { fret: 4, string: 4 },
        { fret: 5, string: 5 },
      ],
    });
    fs.writeFileSync('mock.svg', testChord.toString());
    expect(testChord).toBe('Am');
  });
});
