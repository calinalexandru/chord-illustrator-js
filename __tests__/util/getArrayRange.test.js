/**
 * @jest-environment jsdom
 */
import { test, expect, describe } from '@jest/globals';
import getArrayRange from '../../es/util/getArrayRange';

describe('getArrayRange', () => {
  test('returns filled array with incremental values', () => {
    expect(getArrayRange({ from: 1, to: 6 })).toMatchObject([1, 2, 3, 4, 5, 6]);
    expect(getArrayRange({ from: 1, to: 12 })).toMatchObject([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
    ]);
  });

  test('supports not starting from 1', () => {
    expect(getArrayRange({ from: 6, to: 12 })).toMatchObject([
      1, 2, 3, 4, 5, 6, 7,
    ]);
    expect(getArrayRange({ from: 3, to: 6 })).toMatchObject([
      1, 2, 3, 4, 
    ]);
  });
});
