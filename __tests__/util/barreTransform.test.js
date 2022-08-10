/**
 * @jest-environment jsdom
 */
import { test, expect, describe } from '@jest/globals';
import barreTransform from '../../es/util/barreTransform';

describe('barreTransform', () => {
  test('returns falls if barre is undefined', () => {
    expect(
      barreTransform([
        { fret: 3, string: 2, finger: 2 },
        { fret: 4, string: 3, finger: 3 },
        { fret: 4, string: 4, finger: 4 },
      ])
    ).toBe(false);
  });

  test('returs the barre from an array of fingering', () => {
    expect(
      barreTransform([
        { fret: 2, barre: { from: 1, to: 5 } },
        { fret: 3, string: 2, finger: 2 },
        { fret: 4, string: 3, finger: 3 },
        { fret: 4, string: 4, finger: 4 },
      ])
    ).toMatchObject({ fret: 2, from: 1, to: 5 });
  });
});
