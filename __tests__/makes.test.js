import fs from 'fs';
import { test, expect, describe } from '@jest/globals';
import ChordIllustrator from '../src/index';

describe('basic makes', () => {
  test('can make chord', () => {
    const testChord = ChordIllustrator.make({
      name: 'Bm',
      mutedStrings: ['yes'],
      fingering: [
        { fret: 2, barre: { from: 1, to: 5 } },
        { fret: 3, string: 2 },
        { fret: 4, string: 3 },
        { fret: 4, string: 4 },
      ],
    });
    fs.writeFileSync('mock.svg', testChord.toString());
    expect(testChord).toBe('Am');
  });
});
