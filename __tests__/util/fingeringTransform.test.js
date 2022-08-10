/**
 * @jest-environment jsdom
 */
import { test, expect, describe } from '@jest/globals';
import fingeringTransform from '../../es/util/fingeringTransform';

describe('fingeringTransform', () => {
  test('returns same object if margin is 0', () => {
    expect(
      fingeringTransform(
        [
          { fret: 2, barre: { from: 1, to: 5 } },
          { fret: 3, string: 2, finger: 2 },
          { fret: 4, string: 3, finger: 3 },
          { fret: 4, string: 4, finger: 4 },
        ],
        0
      )
    ).toMatchObject([
      { fret: 2, barre: { from: 1, to: 5 } },
      { fret: 3, string: 2, finger: 2 },
      { fret: 4, string: 3, finger: 3 },
      { fret: 4, string: 4, finger: 4 },
    ]);
  });

  test('adding margin will substract from fret value', () => {
    expect(
      fingeringTransform(
        [
          { fret: 2, barre: { from: 1, to: 5 } },
          { fret: 3, string: 2, finger: 2 },
          { fret: 4, string: 3, finger: 3 },
          { fret: 4, string: 4, finger: 4 },
        ],
        1
      )
    ).toMatchObject([
      { fret: 1, barre: { from: 1, to: 5 } },
      { fret: 2, string: 2, finger: 2 },
      { fret: 3, string: 3, finger: 3 },
      { fret: 3, string: 4, finger: 4 },
    ]);

    expect(
      fingeringTransform(
        [
          { fret: 6, string: 2, finger: 2 },
          { fret: 5, string: 3, finger: 3 },
          { fret: 4, string: 4, finger: 4 },
        ],
        3
      )
    ).toMatchObject([
      { fret: 3, string: 2, finger: 2 },
      { fret: 2, string: 3, finger: 3 },
      { fret: 1, string: 4, finger: 4 },
    ]);
  });
});
