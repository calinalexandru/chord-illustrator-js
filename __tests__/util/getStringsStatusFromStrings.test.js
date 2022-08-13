/**
 * @jest-environment jsdom
 */
import { test, expect, describe } from '@jest/globals';
import getStringsStatusFromStrings from '../../es/util/getStringsStatusFromStrings';
import { GUITAR_STRINGS_STATUS } from '../../src/constants';

describe('getStringsStatusFromStrings', () => {
  test('returns proper strings status based on strings', () => {
    expect(
      getStringsStatusFromStrings(GUITAR_STRINGS_STATUS, [2, 3, 4])
    ).toMatchObject(['open', 'open', 'closed', 'closed', 'closed', 'open']);
    expect(
      getStringsStatusFromStrings(GUITAR_STRINGS_STATUS, [4, 5, 6])
    ).toMatchObject(['closed', 'closed', 'closed', 'open', 'open', 'open']);
    expect(
      getStringsStatusFromStrings(GUITAR_STRINGS_STATUS, [1, 5, 6])
    ).toMatchObject(['closed', 'closed', 'open', 'open', 'open', 'closed']);
  });
});
