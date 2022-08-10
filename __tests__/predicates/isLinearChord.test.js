/**
 * @jest-environment jsdom
 */
import { test, expect, describe } from '@jest/globals';
import isLinearChord from '../../es/predicates/isLinearChord';

describe('isLinearChord', () => {
  test('returns false not all frets all the same', () => {
    expect(
      isLinearChord([
        { fret: 2, barre: { from: 1, to: 5 } },
        { fret: 3, string: 2, finger: 2 },
        { fret: 4, string: 3, finger: 3 },
        { fret: 4, string: 4, finger: 4 },
      ])
    ).toBe(false);
  });

  test('returns true if all frets all the same (eg: A, E)', () => {
    expect(
      isLinearChord([
        { fret: 4, string: 2 },
        { fret: 4, string: 3 },
        { fret: 4, string: 4 },
      ])
    ).toBe(true);

    expect(
      isLinearChord([
        { fret: 2, string: 2 },
        { fret: 2, string: 3 },
      ])
    ).toBe(true);
  });
});
