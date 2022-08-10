/**
 * @jest-environment jsdom
 */
import { test, expect, describe } from '@jest/globals';
import fingeringWithoutBarre from '../../es/util/fingeringWithoutBarre';

describe('fingeringWithoutBarre', () => {
  test('returns the object without the barre property', () => {
    expect(
      fingeringWithoutBarre([
        { fret: 2, barre: { from: 1, to: 5 } },
        { fret: 3, string: 2, finger: 2 },
        { fret: 4, string: 3, finger: 3 },
        { fret: 4, string: 4, finger: 4 },
      ])
    ).toMatchObject([
      { fret: 3, string: 2, finger: 2 },
      { fret: 4, string: 3, finger: 3 },
      { fret: 4, string: 4, finger: 4 },
    ]);
  });
});
