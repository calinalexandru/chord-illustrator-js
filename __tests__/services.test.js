/**
 * @jest-environment jsdom
 */
import { test, expect, describe } from '@jest/globals';
import ChordIllustrator from '../es/index';
import saveMock from '../es/util/saveMock';

ChordIllustrator.setRenderStrategy((node) => node);

describe('chords optionals', () => {
  test('can define fretboard range', () => {
    const testChord = ChordIllustrator.make({
      name: 'Eadd9',
      fretboardRange: { from: 1, to: 12 },
      fingering: [
        { fret: 9, barre: { from: 2, to: 4 } },
        { fret: 11, string: 5, finger: 2 },
        { fret: 11, string: 3, finger: 3 },
        { fret: 12, string: 6, finger: 4 },
      ],
    });

    saveMock('services/Eadd9', testChord.outerHTML);
    expect(testChord.querySelector('g[data-name="finger-11-5"]')).toBeTruthy();
    expect(testChord.querySelector('g[data-name="finger-11-3"]')).toBeTruthy();
    expect(testChord.querySelector('g[data-name="finger-12-6"]')).toBeTruthy();
    expect(
      testChord.querySelector('[data-name="finger-text-11-5-2"]')
    ).toBeTruthy();
    expect(
      testChord.querySelector('[data-name="finger-text-11-3-3"]')
    ).toBeTruthy();
    expect(
      testChord.querySelector('[data-name="finger-text-12-6-4"]')
    ).toBeTruthy();
  });

  test('can define vertical chord', () => {
    const testChord = ChordIllustrator.make({
      name: 'E',
      vertical: true,
      fingering: [
        { fret: 2, string: 4, finger: 2 },
        { fret: 2, string: 5, finger: 3 },
      ],
    });

    saveMock('services/E-vertical', testChord.outerHTML);
    expect(testChord.querySelector('[data-name="fretTitle"]')).toBeTruthy();
  });

  test('open strings can be set - manually', () => {
    const testChord = ChordIllustrator.make({
      name: 'Bm-muted-strings',
      mutedStrings: ['yes', 'open', 'yes', 'open', 'yes', 'open'],
      fingering: [
        { fret: 2, barre: { from: 3, to: 5 } },
        { fret: 4, string: 3, finger: 3 },
        { fret: 4, string: 4, finger: 4 },
      ],
    });
    saveMock('services/E-open-manual', testChord.outerHTML);
    expect(
      testChord.querySelectorAll('[data-name="neck-item-muted-string"]').length
    ).toBe(3);
    expect(
      testChord.querySelectorAll('[data-name="neck-item-open-string"]').length
    ).toBe(3);
  });

  test('open strings can be set - manually 2', () => {
    const testChord = ChordIllustrator.make({
      name: 'Bm-muted-strings-2',
      mutedStrings: ['no', 'open', 'yes', 'open', 'yes', 'no'],
      fingering: [
        { fret: 2, barre: { from: 3, to: 5 } },
        { fret: 4, string: 3, finger: 3 },
        { fret: 4, string: 4, finger: 4 },
      ],
    });
    saveMock('services/E-open-manual', testChord.outerHTML);
    expect(
      testChord.querySelectorAll('[data-name="neck-item-muted-string"]').length
    ).toBe(2);
    expect(
      testChord.querySelectorAll('[data-name="neck-item-open-string"]').length
    ).toBe(2);
  });

  test('open strings are auto set - open chord', () => {
    const testChord = ChordIllustrator.make({
      name: 'E',
      fingering: [
        { fret: 2, string: 4, finger: 2 },
        { fret: 2, string: 5, finger: 3 },
      ],
    });

    saveMock('services/E', testChord.outerHTML);
    expect(
      testChord.querySelectorAll('[data-name="neck-item-open-string"]').length
    ).toBe(4);
  });

  test('open strings are auto set - barre chord', () => {
    const testChord = ChordIllustrator.make({
      name: 'Bm',
      fingering: [
        { fret: 2, barre: { from: 1, to: 5 } },
        { fret: 3, string: 2, finger: 2 },
        { fret: 4, string: 3, finger: 3 },
        { fret: 4, string: 4, finger: 4 },
      ],
    });

    saveMock('services/Bm-auto-set', testChord.outerHTML);
    expect(
      testChord.querySelectorAll('[data-name="neck-item-open-string"]').length
    ).toBe(1);
  });

  test('open strings are auto set - barre chord two', () => {
    const testChord = ChordIllustrator.make({
      name: 'Bm',
      fingering: [
        { fret: 2, barre: { from: 2, to: 5 } },
        { fret: 3, string: 2, finger: 2 },
        { fret: 4, string: 3, finger: 3 },
        { fret: 4, string: 4, finger: 4 },
      ],
    });

    saveMock('services/Bm-auto-set-2', testChord.outerHTML);
    expect(
      testChord.querySelectorAll('[data-name="neck-item-open-string"]').length
    ).toBe(2);
  });

  test('open strings are auto set - barre chord three', () => {
    const testChord = ChordIllustrator.make({
      name: 'Bm',
      fingering: [
        { fret: 2, barre: { from: 3, to: 5 } },
        { fret: 4, string: 3, finger: 3 },
        { fret: 4, string: 4, finger: 4 },
      ],
    });

    saveMock('services/Bm-auto-set-3', testChord.outerHTML);
    expect(
      testChord.querySelectorAll('[data-name="neck-item-open-string"]').length
    ).toBe(3);
  });

  test('name is not shown when omitted', () => {
    const testChord = ChordIllustrator.make({
      fingering: [
        { fret: 2, barre: { from: 3, to: 5 } },
        { fret: 4, string: 3, finger: 3 },
        { fret: 4, string: 4, finger: 4 },
      ],
    });

    saveMock('services/nameless', testChord.outerHTML);
    expect(testChord.querySelector('[data-name="title"]')).toBeNull();
  });

  test('label is not shown when false', () => {
    const testChord = ChordIllustrator.make({
      name: 'Bm-label-off',
      fingering: [
        { fret: 2, barre: { from: 3, to: 5 } },
        { fret: 4, string: 3, finger: 3 },
        { fret: 4, string: 4, finger: 4 },
      ],
      labels: {
        fretNumber: { show: false },
        title: { show: false },
      },
    });

    saveMock('services/nameless', testChord.outerHTML);
    expect(testChord.querySelector('[data-name="title"]')).toBeNull();
    expect(testChord.querySelector('[data-name="fretTitle"]')).toBeNull();
  });
});
