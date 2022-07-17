/* eslint-disable-next-line */
import { createElement, setDomDocument } from './jsx';
import Chord from './components/Chord';
import fingeringTransform from './util/fingeringTransform';
import fingeringWithoutBarre from './util/fingeringWithoutBarre';
import barreTransform from './util/barreTransform';
import getMinFret from './util/getMinFret';
import getFretboardRange from './util/getFretboardRange';
import getArrayRange from './util/getArrayRange';
import getMaxFret from './util/getMaxFret';
import stringsStatusTransform from './util/stringsStatusTransform';
import isLinearChord from './predicates/isLinearChord';

export default class Illustrator {
  static setContainer(container) {
    Illustrator.container = container;
  }

  static setHeight(height) {
    Illustrator.height = height;
  }

  static setDocument(doc) {
    setDomDocument(doc);
  }

  static setRenderStrategy(strategy) {
    Illustrator.renderStrategy = strategy;
  }

  static make({
    name,
    fingering = {},
    fretboardRange = {},
    mutedStrings = [],
    labels = {},
  } = {}) {
    const { showFretNumber = true, fretNumberPrefix = 'fr' } = labels;
    const hasRange = !!Object.keys(fretboardRange).length;
    const minFret = getMinFret(fingering);
    const linearMargin = isLinearChord(fingering) ? 2 : 1;
    const baseMargin = minFret > 1 ? minFret - linearMargin : 0;
    const rangeDiff = hasRange ? fretboardRange.from - 1 : baseMargin;
    const fingersParsed = fingeringTransform(fingering, rangeDiff);
    const barreTransformed = barreTransform(fingersParsed);
    const frets = hasRange
      ? getArrayRange(fretboardRange)
      : getFretboardRange(fingersParsed);
    const maxFret = hasRange
      ? fretboardRange.to - fretboardRange.from
      : getMaxFret(fingersParsed);
    const fingersParsedWithoutBarre = fingeringWithoutBarre(fingersParsed);

    const stringsStatus = stringsStatusTransform(mutedStrings);

    const chordRendered = (
      <Chord
        height={Illustrator.height}
        fretNumberTitle={hasRange ? fretboardRange.from : minFret}
        fretNumberPrefix={fretNumberPrefix}
        showFretNumber={showFretNumber}
        frets={frets}
        name={name || false}
        maxFret={maxFret}
        fingering={fingersParsedWithoutBarre}
        barre={barreTransformed}
        stringsStatus={stringsStatus}
      />
    );
    if (Illustrator.container) Illustrator.container.appendChild(chordRendered);
    return Illustrator.renderStrategy(chordRendered);
  }
}

Illustrator.height = 440;
Illustrator.container = null;
Illustrator.renderStrategy = (node) => node.outerHTML;
try {
  Illustrator.setDocument(document);
} catch (e) {
  console.warn('document remains unset');
}
