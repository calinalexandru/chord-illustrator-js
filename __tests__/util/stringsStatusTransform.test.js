/**
 * @jest-environment jsdom
 */
import { test, expect, describe } from '@jest/globals';
import stringsStatusTransform from '../../es/util/stringsStatusTransform';

describe('stringsStatusTransform', () => {
  test('can transform strings status from user', () => {
    expect(
      stringsStatusTransform(
        ['no', 'no', 'no', 'no', 'no', 'no'],
        ['open', 'open', 'open']
      )
    ).toMatchObject(['no', 'no', 'no', 'open', 'open', 'open']);

    expect(
      stringsStatusTransform(['no', 'no', 'no', 'no', 'no', 'no'], ['yes'])
    ).toMatchObject(['no', 'no', 'no', 'no', 'no', 'muted']);

    expect(
      stringsStatusTransform(
        ['no', 'no', 'no', 'no', 'no', 'no'],
        ['yes', 'yes']
      )
    ).toMatchObject(['no', 'no', 'no', 'no', 'muted', 'muted']);

    expect(
      stringsStatusTransform(
        ['no', 'no', 'no', 'no', 'no', 'no'],
        ['yes', 'yes', 'open']
      )
    ).toMatchObject(['no', 'no', 'no', 'open', 'muted', 'muted']);
  });
});
