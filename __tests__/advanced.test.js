/**
 * @jest-environment jsdom
 */
import { test, expect, describe } from '@jest/globals';
import ChordIllustrator from '../es/index';
import saveMock from '../es/util/saveMock';

ChordIllustrator.setRenderStrategy((node) => node);
describe('advanced chords', () => {
  test('can make Am-2 chord', () => {
    const testChord = ChordIllustrator.make({
      name: 'Am-2',
      fingering: [
        { fret: 2, string: 4, finger: 1 },
        { fret: 3, string: 5, finger: 2 },
        { fret: 5, string: 3, finger: 4 },
        { fret: 5, string: 6, finger: 3 },
      ],
    });

    saveMock('advanced/Am-2', testChord.outerHTML);
    expect(testChord.tagName).toBe('svg');
    expect(testChord.querySelector('[data-name="title"]').outerHTML).toContain(
      'Am-2'
    );
    expect(
      testChord.querySelector('g[data-name="fingers-container"]')
    ).toBeTruthy();
    expect(
      testChord.querySelector('g[data-name="guitar-strings-container"]')
    ).toBeTruthy();
    expect(
      testChord.querySelector('g[data-name="guitar-neck-container"]')
    ).toBeTruthy();
    expect(
      testChord.querySelector('g[data-name="frets-container"]')
    ).toBeTruthy();
    expect(testChord.querySelector('g[data-name="finger-1-4"]')).toBeTruthy();
    expect(testChord.querySelector('g[data-name="finger-2-5"]')).toBeTruthy();
    expect(testChord.querySelector('g[data-name="finger-4-3"]')).toBeTruthy();
    expect(testChord.querySelector('g[data-name="finger-4-6"]')).toBeTruthy();
    expect(
      testChord.querySelector('[data-name="finger-text-1-4-1"]')
    ).toBeTruthy();
    expect(
      testChord.querySelector('[data-name="finger-text-2-5-2"]')
    ).toBeTruthy();
    expect(
      testChord.querySelector('[data-name="finger-text-4-3-4"]')
    ).toBeTruthy();
    expect(
      testChord.querySelector('[data-name="finger-text-4-6-3"]')
    ).toBeTruthy();
  });

  test('can make Emaj11 chord', () => {
    const testChord = ChordIllustrator.make({
      name: 'Emaj11',
      fingering: [
        { fret: 5, barre: { from: 1, to: 2 } },
        { fret: 6, string: 4, finger: 2 },
        { fret: 7, string: 5, finger: 4 },
        { fret: 8, string: 3, finger: 3 },
      ],
    });

    saveMock('advanced/Emaj11', testChord.outerHTML);
    expect(testChord.tagName).toBe('svg');
    expect(testChord.querySelector('[data-name="title"]').outerHTML).toContain(
      'Emaj11'
    );
    expect(
      testChord.querySelector('g[data-name="fingers-container"]')
    ).toBeTruthy();
    expect(
      testChord.querySelector('g[data-name="guitar-strings-container"]')
    ).toBeTruthy();
    expect(
      testChord.querySelector('g[data-name="guitar-neck-container"]')
    ).toBeTruthy();
    expect(
      testChord.querySelector('g[data-name="frets-container"]')
    ).toBeTruthy();
    expect(
      testChord.querySelector('g[data-name="barre-container"]')
    ).toBeTruthy();
    expect(testChord.querySelector('g[data-name="finger-2-4"]')).toBeTruthy();
    expect(testChord.querySelector('g[data-name="finger-3-5"]')).toBeTruthy();
    expect(testChord.querySelector('g[data-name="finger-4-3"]')).toBeTruthy();
    expect(
      testChord.querySelector('[data-name="finger-text-2-4-2"]')
    ).toBeTruthy();
    expect(
      testChord.querySelector('[data-name="finger-text-3-5-4"]')
    ).toBeTruthy();
    expect(
      testChord.querySelector('[data-name="finger-text-4-3-3"]')
    ).toBeTruthy();
  });

  test('can make Emaj13 chord', () => {
    const testChord = ChordIllustrator.make({
      name: 'Emaj13',
      fingering: [
        { fret: 11, barre: { from: 1, to: 5 } },
        { fret: 12, string: 2, finger: 2 },
        { fret: 12, string: 6, finger: 3 },
      ],
    });

    saveMock('advanced/Emaj13', testChord.outerHTML);
    expect(testChord.tagName).toBe('svg');
    expect(testChord.querySelector('[data-name="title"]').outerHTML).toContain(
      'Emaj13'
    );
    expect(
      testChord.querySelector('g[data-name="fingers-container"]')
    ).toBeTruthy();
    expect(
      testChord.querySelector('g[data-name="guitar-strings-container"]')
    ).toBeTruthy();
    expect(
      testChord.querySelector('g[data-name="guitar-neck-container"]')
    ).toBeTruthy();
    expect(
      testChord.querySelector('g[data-name="frets-container"]')
    ).toBeTruthy();
    expect(
      testChord.querySelector('g[data-name="barre-container"]')
    ).toBeTruthy();
    expect(testChord.querySelector('g[data-name="finger-2-2"]')).toBeTruthy();
    expect(testChord.querySelector('g[data-name="finger-2-6"]')).toBeTruthy();
    expect(
      testChord.querySelector('[data-name="finger-text-2-2-2"]')
    ).toBeTruthy();
    expect(
      testChord.querySelector('[data-name="finger-text-2-6-3"]')
    ).toBeTruthy();
  });

  test('can make Eadd9 chord', () => {
    const testChord = ChordIllustrator.make({
      name: 'Eadd9',
      fingering: [
        { fret: 9, barre: { from: 2, to: 4 } },
        { fret: 11, string: 5, finger: 2 },
        { fret: 11, string: 3, finger: 3 },
        { fret: 12, string: 6, finger: 4 },
      ],
    });

    saveMock('advanced/Eadd9', testChord.outerHTML);
    expect(testChord.tagName).toBe('svg');
    expect(testChord.querySelector('[data-name="title"]').outerHTML).toContain(
      'Eadd9'
    );
    expect(
      testChord.querySelector('g[data-name="fingers-container"]')
    ).toBeTruthy();
    expect(
      testChord.querySelector('g[data-name="guitar-strings-container"]')
    ).toBeTruthy();
    expect(
      testChord.querySelector('g[data-name="guitar-neck-container"]')
    ).toBeTruthy();
    expect(
      testChord.querySelector('g[data-name="frets-container"]')
    ).toBeTruthy();
    expect(
      testChord.querySelector('g[data-name="barre-container"]')
    ).toBeTruthy();
    expect(testChord.querySelector('g[data-name="finger-3-5"]')).toBeTruthy();
    expect(testChord.querySelector('g[data-name="finger-3-3"]')).toBeTruthy();
    expect(testChord.querySelector('g[data-name="finger-4-6"]')).toBeTruthy();
    expect(
      testChord.querySelector('[data-name="finger-text-3-5-2"]')
    ).toBeTruthy();
    expect(
      testChord.querySelector('[data-name="finger-text-3-3-3"]')
    ).toBeTruthy();
    expect(
      testChord.querySelector('[data-name="finger-text-4-6-4"]')
    ).toBeTruthy();
  });
});
