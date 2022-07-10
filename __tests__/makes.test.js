/**
 * @jest-environment jsdom
 */
// import { createRoot } from 'react-dom/client';
import { test, expect, describe } from '@jest/globals';
import ChordIllustrator from '../src/index';
import saveMock from '../src/util/saveMock';

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

    saveMock(testChord);
    expect(testChord).toContain(
      `<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" style="height:440px;width:auto" viewBox="0 0 208 141">`
    );
    expect(testChord).toContain(
      `<text x="115" y="13" font-family="Courier" fill="rgb(0, 0, 0)" text-anchor="middle">Bm</text>`
    );
    expect(testChord).toContain(`<g data-name="fingers-container">`);
    expect(testChord).toContain(`<g data-name="guitar-strings-container">`);
    expect(testChord).toContain(`<g data-name="guitar-neck-container">`);
    expect(testChord).toContain(`<g data-name="frets-container">`);
    expect(testChord).toContain(`<g data-name="barre-container">`);
    expect(testChord).toContain(`<g data-name="finger-2-2">`);
    expect(testChord).toContain(`<g data-name="finger-3-3">`);
    expect(testChord).toContain(`<g data-name="finger-3-4">`);
    expect(testChord).toContain(`data-name="finger-text-2-2-2"`);
    expect(testChord).toContain(`data-name="finger-text-3-3-3"`);
    expect(testChord).toContain(`data-name="finger-text-3-4-4"`);
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
    expect(testChord).toContain(
      `<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" style="height:440px;width:auto" viewBox="0 0 208 141">`
    );
    expect(testChord).toContain(
      `<text x="115" y="13" font-family="Courier" fill="rgb(0, 0, 0)" text-anchor="middle">Am</text>`
    );
    expect(testChord).toContain(`<g data-name="fingers-container">`);
    expect(testChord).toContain(`<g data-name="guitar-strings-container">`);
    expect(testChord).toContain(`<g data-name="guitar-neck-container">`);
    expect(testChord).toContain(`<g data-name="frets-container">`);
    expect(testChord).toContain(`<g data-name="finger-1-2">`);
    expect(testChord).toContain(`<g data-name="finger-2-3">`);
    expect(testChord).toContain(`<g data-name="finger-2-4">`);
    expect(testChord).toContain(`data-name="finger-text-1-2-1"`);
    expect(testChord).toContain(`data-name="finger-text-2-3-2"`);
    expect(testChord).toContain(`data-name="finger-text-2-4-3"`);
  });

  test('can make Dm chord', () => {
    const testChord = ChordIllustrator.make({
      name: 'Em',
      fingering: [
        { fret: 2, string: 4, finger: 2 },
        { fret: 2, string: 5, finger: 3 },
      ],
    });
    expect(testChord).toContain(
      `<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" style="height:440px;width:auto" viewBox="0 0 208 141">`
    );
    expect(testChord).toContain(
      `<text x="115" y="13" font-family="Courier" fill="rgb(0, 0, 0)" text-anchor="middle">Em</text>`
    );
    expect(testChord).toContain(`<g data-name="fingers-container">`);
    expect(testChord).toContain(`<g data-name="guitar-strings-container">`);
    expect(testChord).toContain(`<g data-name="guitar-neck-container">`);
    expect(testChord).toContain(`<g data-name="frets-container">`);
    expect(testChord).toContain(`<g data-name="finger-2-4">`);
    expect(testChord).toContain(`<g data-name="finger-2-5">`);
    expect(testChord).toContain(`data-name="finger-text-2-4-2"`);
    expect(testChord).toContain(`data-name="finger-text-2-5-3"`);
  });

  test('can make Dm chord', () => {
    const testChord = ChordIllustrator.make({
      name: 'Dm',
      fingering: [
        { fret: 1, string: 1, finger: 1 },
        { fret: 2, string: 3, finger: 2 },
        { fret: 3, string: 2, finger: 3 },
      ],
    });
    expect(testChord).toContain(
      `<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" style="height:440px;width:auto" viewBox="0 0 208 141">`
    );
    expect(testChord).toContain(
      `<text x="115" y="13" font-family="Courier" fill="rgb(0, 0, 0)" text-anchor="middle">Dm</text>`
    );
    expect(testChord).toContain(`<g data-name="fingers-container">`);
    expect(testChord).toContain(`<g data-name="guitar-strings-container">`);
    expect(testChord).toContain(`<g data-name="guitar-neck-container">`);
    expect(testChord).toContain(`<g data-name="frets-container">`);
    expect(testChord).toContain(`<g data-name="finger-1-1">`);
    expect(testChord).toContain(`<g data-name="finger-2-3">`);
    expect(testChord).toContain(`<g data-name="finger-3-2">`);
    expect(testChord).toContain(`data-name="finger-text-1-1-1"`);
    expect(testChord).toContain(`data-name="finger-text-2-3-2"`);
    expect(testChord).toContain(`data-name="finger-text-3-2-3"`);
  });
});
