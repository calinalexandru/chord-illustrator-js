// import { createElement } from 'react';
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

  static make({ name = 'Am', fingering = {}, fretboardRange = {} } = {}) {
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

    const chordRendered = (
      <Chord
        height={Illustrator.height}
        fretNumberTitle={hasRange ? fretboardRange.from : minFret}
        frets={frets}
        name={name}
        maxFret={maxFret}
        fingering={fingersParsed}
        barre={barreTransformed}
      />
    );
    if (Illustrator.container) Illustrator.container.appendChid(chordRendered);
    // console.log('chordRendered', chordRendered);
    // document.body.appendChild(chordRendered);
    return Illustrator.renderStrategy(chordRendered);
  }
}

Illustrator.height = 440;
Illustrator.container = null;
Illustrator.renderStrategy = (node) => node.outerHTML;

// Illustrator.make({
//   name: 'Bm',
//   mutedStrings: ['yes'],
//   fingering: [
//     { fret: 2, barre: { from: 1, to: 5 } },
//     { fret: 3, string: 2, finger: 2 },
//     { fret: 4, string: 3, finger: 3 },
//     { fret: 4, string: 4, finger: 4 },
//   ],
// });
