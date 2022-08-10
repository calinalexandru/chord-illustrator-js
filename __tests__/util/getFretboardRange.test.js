/**
 * @jest-environment jsdom
 */
import { test, expect, describe } from '@jest/globals';
import getFretboardRange from '../../es/util/getFretboardRange';

describe('getFretboardRange', () => {
  test('returns fretboard range from fingering', () => {
    expect(
      getFretboardRange([
        { fret: 2, barre: { from: 1, to: 5 } },
        { fret: 3, string: 2, finger: 2 },
        { fret: 4, string: 3, finger: 3 },
        { fret: 4, string: 4, finger: 4 },
      ])
    ).toMatchObject([1, 2, 3]);
  });

  test('frets are higher but still no diff bigger than three', () => {
    expect(
      getFretboardRange([
        { fret: 4, barre: { from: 1, to: 5 } },
        { fret: 5, string: 2, finger: 2 },
        { fret: 4, string: 3, finger: 3 },
        { fret: 6, string: 4, finger: 4 },
      ])
    ).toMatchObject([1, 2, 3]);

    expect(
      getFretboardRange([
        { fret: 10, string: 2, finger: 2 },
        { fret: 11, string: 3, finger: 3 },
        { fret: 12, string: 4, finger: 4 },
      ])
    ).toMatchObject([1, 2, 3]);
  });

  test('frets are spread apart', () => {
    expect(
      getFretboardRange([
        { fret: 1, barre: { from: 1, to: 5 } },
        { fret: 5, string: 2, finger: 2 },
        { fret: 4, string: 3, finger: 3 },
        { fret: 6, string: 4, finger: 4 },
      ])
    ).toMatchObject([1, 2, 3, 4, 5, 6]);

    expect(
      getFretboardRange([
        { fret: 1, barre: { from: 1, to: 5 } },
        { fret: 5, string: 2, finger: 2 },
        { fret: 4, string: 3, finger: 3 },
        { fret: 12, string: 4, finger: 4 },
      ])
    ).toMatchObject([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  });
});
