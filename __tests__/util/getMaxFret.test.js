/**
 * @jest-environment jsdom
 */
import { test, expect, describe } from '@jest/globals';
import getMaxFret from '../../es/util/getMaxFret';

describe('getMaxFret', () => {
  test('returs the barre from an array of fingering', () => {
    expect(
      getMaxFret([
        { fret: 2, barre: { from: 1, to: 5 } },
        { fret: 3, string: 2, finger: 2 },
        { fret: 4, string: 3, finger: 3 },
        { fret: 4, string: 4, finger: 4 },
      ])
    ).toBe(4);

    expect(
      getMaxFret([
        { fret: 1, barre: { from: 1, to: 5 } },
        { fret: 3, string: 2, finger: 2 },
        { fret: 4, string: 3, finger: 3 },
        { fret: 5, string: 4, finger: 4 },
      ])
    ).toBe(5);

    expect(
      getMaxFret([
        { fret: 6, string: 3, finger: 3 },
        { fret: 6, string: 4, finger: 4 },
      ])
    ).toBe(6);
  });
});
