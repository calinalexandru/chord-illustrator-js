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

describe('chord styles', () => {
  test('can style basic', () => {
    const testChord = ChordIllustrator.make({
      name: 'Bm',
      mutedStrings: ['yes'],
      fingering: [
        { fret: 2, barre: { from: 1, to: 5 } },
        { fret: 3, string: 2, finger: 2 },
        { fret: 4, string: 3, finger: 3 },
        { fret: 4, string: 4, finger: 4 },
      ],
      labels: {
        title: { style: { fill: 'blue' } },
        fretNumber: { style: { fill: 'red' } },
      },
      fretboard: {
        string: { style: { stroke: 'blue', fill: '#333333' } },
        fret: { style: { stroke: 'yellow', fill: '#999999' } },
        finger: { style: { stroke: 'brown', fill: '#666666' } },
        fingerText: { style: { stroke: 'purple', fill: '#cc0033' } },
        neck: { style: { stroke: 'red', fill: '#ff0000' } },
        barre: { style: { fill: 'blue', stroke: '#123123' } },
      },
    });

    saveMock('chord-styles/Bm', testChord.outerHTML);
    expect(testChord.querySelector('[data-name="title"]').style.fill).toBe(
      'blue'
    );
    expect(testChord.querySelector('[data-name="fretTitle"]').style.fill).toBe(
      'red'
    );
    expect(
      testChord.querySelector('g[data-name="frets-container"] line').style
        .stroke
    ).toBe('yellow');
    expect(
      testChord.querySelector('g[data-name="frets-container"] line').style.fill
    ).toBe('#999999');
    expect(
      testChord.querySelector('g[data-name="guitar-strings-container"] line')
        .style.stroke
    ).toBe('blue');
    expect(
      testChord.querySelector('g[data-name="guitar-strings-container"] line')
        .style.fill
    ).toBe('#333333');
    expect(
      testChord.querySelector('g[data-name="guitar-neck-container"] line').style
        .stroke
    ).toBe('red');
    expect(
      testChord.querySelector('g[data-name="guitar-neck-container"] line').style
        .fill
    ).toBe('#ff0000');
    expect(
      testChord.querySelector('[data-common-name="finger-circle"]').style.stroke
    ).toBe('brown');
    expect(
      testChord.querySelector('[data-common-name="finger-circle"]').style.fill
    ).toBe('#666666');
    expect(
      testChord.querySelector('[data-common-name="finger-text"]').style.fill
    ).toBe('#cc0033');
    expect(
      testChord.querySelector('[data-common-name="finger-text"]').style.stroke
    ).toBe('purple');
    expect(
      testChord.querySelector('g[data-name="barre-container"] circle').style
        .fill
    ).toBe('blue');
    expect(
      testChord.querySelector('g[data-name="barre-container"] circle').style
        .stroke
    ).toBe('#123123');
  });
});
