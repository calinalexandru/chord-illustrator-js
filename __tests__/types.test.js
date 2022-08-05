import { test, expect, describe } from '@jest/globals';
import ChordIllustrator from '../es/index';

describe('basic types', () => {
  test('is not null', () => {
    expect(typeof ChordIllustrator).toBe('function');
  });

  test('has make', () => {
    expect(typeof ChordIllustrator.make).toBe('function');
  });

  test('has set height', () => {
    expect(typeof ChordIllustrator.setHeight).toBe('function');
  });

  test('has set container', () => {
    expect(typeof ChordIllustrator.setContainer).toBe('function');
  });

  test('has set render strategy', () => {
    expect(typeof ChordIllustrator.setRenderStrategy).toBe('function');
  });

  test('has set document', () => {
    expect(typeof ChordIllustrator.setDocument).toBe('function');
  });
});
