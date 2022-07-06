import React from 'react';
import { renderToString } from 'react-dom/server';
import Chord from './components/chord';
import fingeringTransform from './util/fingeringTransform';
import barreTransform from './util/barreTransform';

export default class Illustrator {
  static make({ name = 'Am', fingering = {}, fretboardRange = {} } = {}) {
    const fingersParsed = fingeringTransform(fingering);
    const barreTransformed = barreTransform(fingering);
    return renderToString(
      <Chord
        fretboardRange={fretboardRange}
        name={name}
        fingering={fingersParsed}
        barre={barreTransformed}
      />
    );
  }
}
