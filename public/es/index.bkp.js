// /** @jsx createElement */
import { createElement } from './fake-react';
import Chord from './components/Chord';
import fingeringTransform from './util/fingeringTransform';
import barreTransform from './util/barreTransform';
import getMinFret from './util/getMinFret';
import getFretboardRange from './util/getFretboardRange';
import getArrayRange from './util/getArrayRange';
import getMaxFret from './util/getMaxFret';
import isLinearChord from './predicates/isLinearChord';
export default class Illustrator {
  static setContainer(container) {
    Illustrator.container = container;
  }

  static setHeight(height) {
    Illustrator.height = height;
  }

  static setRenderStrategy(strategy) {
    Illustrator.renderStrategy = strategy;
  }

  static make({
    name = 'Am',
    fingering = {},
    fretboardRange = {}
  } = {}) {
    const hasRange = !!Object.keys(fretboardRange).length;
    const minFret = getMinFret(fingering);
    const linearMargin = isLinearChord(fingering) ? 2 : 1;
    const baseMargin = minFret > 1 ? minFret - linearMargin : 0;
    const rangeDiff = hasRange ? fretboardRange.from - 1 : baseMargin;
    const fingersParsed = fingeringTransform(fingering, rangeDiff);
    const barreTransformed = barreTransform(fingersParsed);
    const frets = hasRange ? getArrayRange(fretboardRange) : getFretboardRange(fingersParsed);
    const maxFret = hasRange ? fretboardRange.to - fretboardRange.from : getMaxFret(fingersParsed);
    const chordRendered = createElement(Chord, {
      height: Illustrator.height,
      fretNumberTitle: hasRange ? fretboardRange.from : minFret,
      frets: frets,
      name: name,
      maxFret: maxFret,
      fingering: fingersParsed,
      barre: barreTransformed
    });
    if (Illustrator.container) Illustrator.container.appendChid(chordRendered);
    return Illustrator.renderStrategy(chordRendered);
  }

}

Illustrator.renderStrategy = jsxNode => {
  const tmp = document.createElement('div');
  tmp.appendChild(jsxNode);
  return tmp.innerHTML;
};

Illustrator.height = 440;
Illustrator.container = null;