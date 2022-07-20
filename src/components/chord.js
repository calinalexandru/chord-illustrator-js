/* eslint-disable-next-line */
import { createElement } from '../jsx';
import {
  BARRE_START,
  BARRE_MARGIN,
  FRET_MARGIN,
  FRET_START,
  GUITAR_STRING_MARGIN,
  GUITAR_STRING_START,
  GUITAR_STRINGS,
  GUTTER_SMALL,
  GUITAR_STRINGS_STATUS,
} from '../constants';
import GriffBase from '../primitives/GriffBase';
import String from '../primitives/String';
import Fret from '../primitives/Fret';
import Barre from '../primitives/Barre';
import Neck from '../primitives/Neck';
import Finger from '../primitives/Finger';
import FretTitle from '../primitives/FretTitle';
import Title from '../primitives/Title';
import calculatePosition from '../util/calculatePosition';

export default function Chord({
  name,
  height,
  fretNumberTitle = 1,
  fretNumberPrefix = 'fr',
  showFretNumber = true,
  fingering = [],
  barre = false,
  frets = [],
  maxFret = 3,
  stringsStatus = GUITAR_STRINGS_STATUS,
}) {
  const vertical = true;
  const griffWidth = maxFret * FRET_MARGIN;
  const griffHeight = 141;
  return (
    <svg
      style={{
        height: vertical ? 'auto' : `${height}px`,
        width: !vertical ? 'auto' : `${height}px`,
      }}
      viewBox={`0 0 ${vertical ? griffHeight : griffWidth + 28} ${
        !vertical ? griffHeight : griffWidth + 28
      }`}
    >
      <GriffBase width={griffWidth} vertical={vertical} />
      <g data-name="frets-container">
        {frets.map((fretKey) => (
          <Fret
            vertical={vertical}
            key={`fret-${fretKey}`}
            number={fretKey}
            x1={calculatePosition(FRET_MARGIN, fretKey - 1, FRET_START)}
            x2={calculatePosition(FRET_MARGIN, fretKey - 1, FRET_START)}
          />
        ))}
      </g>
      <g data-name="guitar-strings-container">
        {GUITAR_STRINGS.map((gstring) => (
          <String
            vertical={vertical}
            key={`string-${gstring}`}
            number={gstring}
            y1={calculatePosition(
              GUITAR_STRING_MARGIN,
              gstring,
              GUITAR_STRING_START
            )}
            x2={
              calculatePosition(FRET_MARGIN, maxFret, GUITAR_STRING_START) + 2
            }
            y2={calculatePosition(
              GUITAR_STRING_MARGIN,
              gstring,
              GUITAR_STRING_START
            )}
          />
        ))}
      </g>
      <g data-name="guitar-neck-container">
        <Neck vertical={vertical} stringsStatus={stringsStatus} />
      </g>
      <g data-name="fingers-container">
        {fingering.map(({ fret = 1, string = 1, finger }) => (
          <Finger
            vertical={vertical}
            key={`finger-${string}-${fret}`}
            string={string}
            fret={fret}
            finger={finger}
            x={calculatePosition(FRET_MARGIN, fret - 1, BARRE_START)}
            y={calculatePosition(
              GUITAR_STRING_MARGIN,
              vertical ? Math.abs(string - 6) : string - 1,
              GUITAR_STRING_START
            )}
          />
        ))}
      </g>
      {barre && (
        <g data-name="barre-container">
          <Barre
            vertical={vertical}
            height={(barre.to - barre.from) * GUITAR_STRING_MARGIN}
            x={calculatePosition(BARRE_MARGIN, barre.fret - 1, BARRE_START)}
            y1={GUITAR_STRING_MARGIN * barre.from + GUTTER_SMALL}
            y2={GUITAR_STRING_MARGIN * barre.to + GUTTER_SMALL}
          />
        </g>
      )}
      {showFretNumber && (
        <FretTitle number={fretNumberTitle} prefix={fretNumberPrefix} />
      )}
      {name && <Title name={name} />}
    </svg>
  );
}
