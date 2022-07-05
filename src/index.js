import React from 'react';
import { renderToString } from 'react-dom/server';
import fingeringTransform from './util/fingeringTransform';
import Chord from './components/chord';

export default class Illustrator {
  static make({ name = 'Am', fingering = {}, barre = {} } = {}) {
    const fingersParsed = fingeringTransform(fingering);
    return renderToString(
      <Chord name={name} fingering={fingersParsed} barre={barre} />
    );
  }
}
