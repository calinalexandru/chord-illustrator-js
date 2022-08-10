/**
 * @jest-environment jsdom
 */
import { test, expect, describe } from '@jest/globals';
import getMinFret from '../../es/util/getMinFret';

describe('getMinFret', () => {
  test('returs the barre from an array of fingering', () => {
    expect(
      getMinFret([
        { fret: 2, barre: { from: 1, to: 5 } },
        { fret: 3, string: 2, finger: 2 },
        { fret: 4, string: 3, finger: 3 },
        { fret: 4, string: 4, finger: 4 },
      ])
    ).toBe(2);

    expect(
      getMinFret([
        { fret: 1, barre: { from: 1, to: 5 } },
        { fret: 3, string: 2, finger: 2 },
        { fret: 4, string: 3, finger: 3 },
        { fret: 4, string: 4, finger: 4 },
      ])
    ).toBe(1);

    expect(
      getMinFret([
        { fret: 6, string: 3, finger: 3 },
        { fret: 6, string: 4, finger: 4 },
      ])
    ).toBe(6);
  });
});
