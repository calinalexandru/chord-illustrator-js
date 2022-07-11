/**
 * @jest-environment jsdom
 */
import { test, expect, describe } from '@jest/globals';
import ChordIllustrator from '../src/index';
import saveMock from '../src/util/saveMock';

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

    saveMock('services/Eadd9', testChord);
    expect(testChord).toContain(
      `<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" style="height:440px;width:auto" viewBox="0 0 688 141">`
    );
    expect(testChord).toContain(
      `<text x="115" y="13" font-family="Courier" fill="rgb(0, 0, 0)" text-anchor="middle">Eadd9</text>`
    );
    expect(testChord).toContain(`<g data-name="fingers-container">`);
    expect(testChord).toContain(`<g data-name="guitar-strings-container">`);
    expect(testChord).toContain(`<g data-name="guitar-neck-container">`);
    expect(testChord).toContain(`<g data-name="frets-container">`);
    expect(testChord).toContain(`<g data-name="finger-11-5">`);
    expect(testChord).toContain(`<g data-name="finger-11-3">`);
    expect(testChord).toContain(`<g data-name="finger-12-6">`);
    expect(testChord).toContain(`data-name="finger-text-11-5-2"`);
    expect(testChord).toContain(`data-name="finger-text-11-3-3"`);
    expect(testChord).toContain(`data-name="finger-text-12-6-4"`);
  });
});
