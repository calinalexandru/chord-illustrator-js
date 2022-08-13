/**
 * @jest-environment jsdom
 */
import { test, expect, describe } from '@jest/globals';
import getFingeringRangeFromBarre from '../../es/util/getFingeringRangeFromBarre';

describe('getFingeringRangeFromBarre', () => {
  test('returns empty array if *to* is smaller than *from*', () => {
    expect(getFingeringRangeFromBarre({ from: 1, to: 1 })).toMatchObject([]);
  });

  test('returns proper range', () => {
    expect(getFingeringRangeFromBarre({ from: 1, to: 3 })).toMatchObject([
      1, 2, 3,
    ]);
    expect(getFingeringRangeFromBarre({ from: 1, to: 5 })).toMatchObject([
      1, 2, 3, 4, 5,
    ]);
    expect(getFingeringRangeFromBarre({ from: 1, to: 6 })).toMatchObject([
      1, 2, 3, 4, 5, 6,
    ]);
  });

  test('returns shifted range', () => {
    expect(getFingeringRangeFromBarre({ from: 2, to: 5 })).toMatchObject([
      2, 3, 4, 5,
    ]);
    expect(getFingeringRangeFromBarre({ from: 3, to: 6 })).toMatchObject([
      3, 4, 5, 6,
    ]);
    expect(getFingeringRangeFromBarre({ from: 5, to: 8 })).toMatchObject([
      5, 6, 7, 8,
    ]);
  });
});
