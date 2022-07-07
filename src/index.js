import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import Chord from './components/Chord';
import fingeringTransform from './util/fingeringTransform';
import barreTransform from './util/barreTransform';
import getMinFret from './util/getMinFret';

export default class Illustrator {
  static setContainer(container) {
    Illustrator.container = container;
  }

  static setHeight(height) {
    Illustrator.height = height;
  }

  static make({ name = 'Am', fingering = {}, fretboardRange = {} } = {}) {
    const hasRange = !!Object.keys(fretboardRange).length;
    const minFret = getMinFret(fingering);
    const baseMargin = minFret > 1 ? minFret - 1 : 0;
    const rangeDiff = hasRange ? fretboardRange.from - 1 : baseMargin;
    const fingersParsed = fingeringTransform(fingering, rangeDiff);
    const barreTransformed = barreTransform(fingersParsed);
    const chordRendered = (
      <Chord
        height={Illustrator.height}
        fretNumberTitle={hasRange ? fretboardRange.from : minFret}
        fretboardRange={fretboardRange}
        name={name}
        fingering={fingersParsed}
        barre={barreTransformed}
      />
    );
    if (Illustrator.container) Illustrator.container.appendChid(chordRendered);
    return renderToStaticMarkup(chordRendered);
  }
}

Illustrator.height = 440;
Illustrator.container = null;
