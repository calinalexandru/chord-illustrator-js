/**
 * @jest-environment jsdom
 */
import { test, expect, describe } from '@jest/globals';
import ChordIllustrator from '../src/index';

const ci = new ChordIllustrator();

describe('basic types', () => {
  test('is not null', () => {
    expect(typeof (() => {})).toBe('function');
  });

  test('has make', () => {
    expect(typeof ci.make).toBe('function');
  });

  test('has setContainer', () => {
    expect(typeof ci.setContainer).toBe('function');
  });
});
