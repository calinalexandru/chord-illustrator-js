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
    expect(testChord.tagName).toContain('svg');
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
});
