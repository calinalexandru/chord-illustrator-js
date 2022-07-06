import React from 'react';
import { renderToString } from 'react-dom/server';
import Chord from './components/chord';
import fingeringTransform from './util/fingeringTransform';
import barreTransform from './util/barreTransform';
import getMinFret from './util/getMinFret';

export default class Illustrator {
  static make({ name = 'Am', fingering = {}, fretboardRange = {} } = {}) {
    const hasRange = !!Object.keys(fretboardRange).length;
    const minFret = getMinFret(fingering);
    const baseMargin = minFret > 1 ? minFret - 1 : 0;
    const rangeDiff = hasRange ? fretboardRange.from - 1 : baseMargin;
    const fingersParsed = fingeringTransform(fingering, rangeDiff);
    const barreTransformed = barreTransform(fingersParsed);

    return renderToString(
      <Chord
        fretNumberTitle={hasRange ? fretboardRange.from : minFret}
        fretboardRange={fretboardRange}
        name={name}
        fingering={fingersParsed}
        barre={barreTransformed}
      />
    );
  }
}
