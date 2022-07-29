/**
 * @jest-environment jsdom
 */
// import { createRoot } from 'react-dom/client';
import { test, expect, describe } from '@jest/globals';
import ChordIllustrator from '../es/index';
import saveMock from '../es/util/saveMock';

ChordIllustrator.setRenderStrategy((node) => node);

// const renderToStaticMarkup = (dom) => dom.outerHTML;
// const container = document.createElement('div');
// document.body.appendChild(container);
// const root = createRoot(container);
// ChordIllustrator.setRenderStrategy(root);

describe('basic chords', () => {
  test('can make Bm chord', () => {
    const testChord = ChordIllustrator.make({
      name: 'Bm',
      mutedStrings: ['yes'],
      fingering: [
        { fret: 2, barre: { from: 1, to: 5 } },
        { fret: 3, string: 2, finger: 2 },
        { fret: 4, string: 3, finger: 3 },
        { fret: 4, string: 4, finger: 4 },
      ],
    });

    saveMock('basic/Bm', testChord.outerHTML);
    expect(testChord.tagName).toBe('svg');
    expect(testChord.querySelector('[data-name="title"]').outerHTML).toContain(
      'Bm'
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
    expect(testChord.querySelector('g[data-name="finger-3-3"]')).toBeTruthy();
    expect(testChord.querySelector('g[data-name="finger-3-4"]')).toBeTruthy();
    expect(
      testChord.querySelector('[data-name="finger-text-2-2-2"]')
    ).toBeTruthy();
    expect(
      testChord.querySelector('[data-name="finger-text-3-3-3"]')
    ).toBeTruthy();
    expect(
      testChord.querySelector('[data-name="finger-text-3-4-4"]')
    ).toBeTruthy();
  });

  test('can make Am chord', () => {
    const testChord = ChordIllustrator.make({
      name: 'Am',
      mutedStrings: ['yes'],
      fingering: [
        { fret: 1, string: 2, finger: 1 },
        { fret: 2, string: 3, finger: 2 },
        { fret: 2, string: 4, finger: 3 },
      ],
    });
    saveMock('basic/Am', testChord.outerHTML);
    expect(testChord.tagName).toContain('svg');
    expect(testChord.querySelector('[data-name="title"]').outerHTML).toContain(
      'Am'
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
    expect(testChord.querySelector('g[data-name="finger-1-2"]')).toBeTruthy();
    expect(testChord.querySelector('g[data-name="finger-2-3"]')).toBeTruthy();
    expect(testChord.querySelector('g[data-name="finger-2-4"]')).toBeTruthy();
    expect(
      testChord.querySelector('[data-name="finger-text-1-2-1"]')
    ).toBeTruthy();
    expect(
      testChord.querySelector('[data-name="finger-text-2-3-2"]')
    ).toBeTruthy();
    expect(
      testChord.querySelector('[data-name="finger-text-2-4-3"]')
    ).toBeTruthy();
  });

  test('can make Em chord', () => {
    const testChord = ChordIllustrator.make({
      name: 'Em',
      fingering: [
        { fret: 2, string: 4, finger: 2 },
        { fret: 2, string: 5, finger: 3 },
      ],
    });
    saveMock('basic/Em', testChord.outerHTML);
    expect(testChord.tagName).toContain('svg');
    expect(testChord.querySelector('[data-name="title"]').outerHTML).toContain(
      'Em'
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
    expect(testChord.querySelector('g[data-name="finger-2-4"]')).toBeTruthy();
    expect(testChord.querySelector('g[data-name="finger-2-5"]')).toBeTruthy();
    expect(
      testChord.querySelector('[data-name="finger-text-2-4-2"]')
    ).toBeTruthy();
    expect(
      testChord.querySelector('[data-name="finger-text-2-5-3"]')
    ).toBeTruthy();
  });

  test('can make Dm chord', () => {
    const testChord = ChordIllustrator.make({
      name: 'Dm',
      mutedStrings: ['yes', 'yes', 'open'],
      fingering: [
        { fret: 1, string: 1, finger: 1 },
        { fret: 2, string: 3, finger: 2 },
        { fret: 3, string: 2, finger: 3 },
      ],
    });
    saveMock('basic/Dm', testChord.outerHTML);
    expect(testChord.tagName).toContain('svg');
    expect(testChord.querySelector('[data-name="title"]').outerHTML).toContain(
      'Dm'
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
    expect(testChord.querySelector('g[data-name="finger-1-1"]')).toBeTruthy();
    expect(testChord.querySelector('g[data-name="finger-2-3"]')).toBeTruthy();
    expect(testChord.querySelector('g[data-name="finger-3-2"]')).toBeTruthy();
    expect(
      testChord.querySelector('[data-name="finger-text-1-1-1"]')
    ).toBeTruthy();
    expect(
      testChord.querySelector('[data-name="finger-text-2-3-2"]')
    ).toBeTruthy();
    expect(
      testChord.querySelector('[data-name="finger-text-3-2-3"]')
    ).toBeTruthy();
  });
});
