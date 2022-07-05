import React from 'react';
import { renderToString } from 'react-dom/server';
import Chord from './components/chord';

export default class Illustrator {
  static make({ name, fingering, barre }) {
    return renderToString(
      <Chord name={name} fingering={fingering} barre={barre} />
    );
  }
}
