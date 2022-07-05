import fs from 'fs';
import { test, expect, describe } from '@jest/globals';
import ChordIllustrator from '../src/index';

describe('basic makes', () => {
  test('can make chord', () => {
    const testChord = ChordIllustrator.make({
      name: 'Bm',
      mutedStrings: ['yes'],
      fingering: [
        { fret: 5, string: 1 },
        { fret: 4, string: 2 },
        { fret: 5, string: 3 },
      ],
    });
    fs.writeFileSync('mock.svg', testChord.toString());
    expect(testChord).toBe('Am');
  });
});
