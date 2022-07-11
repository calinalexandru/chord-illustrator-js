/**
 * @jest-environment jsdom
 */
import { test, expect, describe } from '@jest/globals';
import ChordIllustrator from '../src/index';
import saveMock from '../src/util/saveMock';

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

    saveMock('advanced/Am-2', testChord);
    expect(testChord).toContain(
      `<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" style="height:440px;width:auto" viewBox="0 0 268 141">`
    );
    expect(testChord).toContain(
      `<text x="115" y="13" font-family="Courier" fill="rgb(0, 0, 0)" text-anchor="middle">Am-2</text>`
    );
    expect(testChord).toContain(`<g data-name="fingers-container">`);
    expect(testChord).toContain(`<g data-name="guitar-strings-container">`);
    expect(testChord).toContain(`<g data-name="guitar-neck-container">`);
    expect(testChord).toContain(`<g data-name="frets-container">`);
    expect(testChord).toContain(`<g data-name="finger-1-4">`);
    expect(testChord).toContain(`<g data-name="finger-2-5">`);
    expect(testChord).toContain(`<g data-name="finger-4-3">`);
    expect(testChord).toContain(`<g data-name="finger-4-6">`);
    expect(testChord).toContain(`data-name="finger-text-1-4-1"`);
    expect(testChord).toContain(`data-name="finger-text-2-5-2"`);
    expect(testChord).toContain(`data-name="finger-text-4-3-4"`);
    expect(testChord).toContain(`data-name="finger-text-4-6-3"`);
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

    saveMock('advanced/Emaj11', testChord);
    expect(testChord).toContain(
      `<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" style="height:440px;width:auto" viewBox="0 0 268 141">`
    );
    expect(testChord).toContain(
      `<text x="115" y="13" font-family="Courier" fill="rgb(0, 0, 0)" text-anchor="middle">Emaj11</text>`
    );
    expect(testChord).toContain(`<g data-name="fingers-container">`);
    expect(testChord).toContain(`<g data-name="guitar-strings-container">`);
    expect(testChord).toContain(`<g data-name="guitar-neck-container">`);
    expect(testChord).toContain(`<g data-name="frets-container">`);
    expect(testChord).toContain(`<g data-name="finger-2-4">`);
    expect(testChord).toContain(`<g data-name="finger-3-5">`);
    expect(testChord).toContain(`<g data-name="finger-4-3">`);
    expect(testChord).toContain(`data-name="finger-text-2-4-2"`);
    expect(testChord).toContain(`data-name="finger-text-3-5-4"`);
    expect(testChord).toContain(`data-name="finger-text-4-3-3"`);
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

    saveMock('advanced/Emaj13', testChord);
    expect(testChord).toContain(
      `<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" style="height:440px;width:auto" viewBox="0 0 208 141">`
    );
    expect(testChord).toContain(
      `<text x="115" y="13" font-family="Courier" fill="rgb(0, 0, 0)" text-anchor="middle">Emaj13</text>`
    );
    expect(testChord).toContain(`<g data-name="fingers-container">`);
    expect(testChord).toContain(`<g data-name="guitar-strings-container">`);
    expect(testChord).toContain(`<g data-name="guitar-neck-container">`);
    expect(testChord).toContain(`<g data-name="frets-container">`);
    expect(testChord).toContain(`<g data-name="barre-container">`);
    expect(testChord).toContain(`<g data-name="finger-2-2">`);
    expect(testChord).toContain(`<g data-name="finger-2-6">`);
    expect(testChord).toContain(`data-name="finger-text-2-2-2"`);
    expect(testChord).toContain(`data-name="finger-text-2-6-3"`);
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

    saveMock('advanced/Eadd9', testChord);
    expect(testChord).toContain(
      `<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" style="height:440px;width:auto" viewBox="0 0 268 141">`
    );
    expect(testChord).toContain(
      `<text x="115" y="13" font-family="Courier" fill="rgb(0, 0, 0)" text-anchor="middle">Eadd9</text>`
    );
    expect(testChord).toContain(`<g data-name="fingers-container">`);
    expect(testChord).toContain(`<g data-name="guitar-strings-container">`);
    expect(testChord).toContain(`<g data-name="guitar-neck-container">`);
    expect(testChord).toContain(`<g data-name="frets-container">`);
    expect(testChord).toContain(`<g data-name="barre-container">`);
    expect(testChord).toContain(`<g data-name="finger-3-5">`);
    expect(testChord).toContain(`<g data-name="finger-3-3">`);
    expect(testChord).toContain(`<g data-name="finger-4-6">`);
    expect(testChord).toContain(`data-name="finger-text-3-5-2"`);
    expect(testChord).toContain(`data-name="finger-text-3-3-3"`);
    expect(testChord).toContain(`data-name="finger-text-4-6-4"`);
  });
});
