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
        string: { style: { stroke: 'blue' } },
        fret: { style: { stroke: 'yellow' } },
        finger: { style: { stroke: 'brown' } },
        fingerText: { style: { stroke: 'purple' } },
        neck: { style: { stroke: 'red' } },
        barre: { style: { fill: 'blue' } },
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
      testChord.querySelector('g[data-name="guitar-strings-container"] line')
        .style.stroke
    ).toBe('blue');
    expect(
      testChord.querySelector('g[data-name="guitar-neck-container"] line').style
        .stroke
    ).toBe('red');
    expect(
      testChord.querySelector('[data-common-name="finger-circle"]').style.stroke
    ).toBe('brown');
    expect(
      testChord.querySelector('g[data-name="barre-container"] circle').style
        .fill
    ).toBe('blue');
  });
});
