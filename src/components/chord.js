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
  GUITAR_STRING_MARGIN_2,
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
  showTitle = true,
  showFretNumber = true,
  fingering = [],
  vertical = false,
  barre = false,
  frets = [],
  maxFret = 3,
  stringsStatus = GUITAR_STRINGS_STATUS,
  titleStyle,
  fretStyle,
  stringStyle,
  fingerStyle,
  fingerTextStyle,
  neckStyle,
  fretNumberStyle,
}) {
  let x1Buffer;
  let y1Buffer;
  const griffHeight = vertical ? maxFret * FRET_MARGIN : 100;
  const griffWidth = vertical ? griffHeight : maxFret * FRET_MARGIN;
  const griffViewboxHeight = 141;
  let barreX;
  let barreY1;
  let barreY2;
  let barreWidth;
  let barreHeight;
  if (barre) {
    barreX = calculatePosition(BARRE_MARGIN, barre.fret - 1, BARRE_START);
    barreY1 =
      GUITAR_STRING_MARGIN * (vertical ? Math.abs(barre.to - 7) : barre.from) +
      GUTTER_SMALL;
    barreY2 =
      GUITAR_STRING_MARGIN * (vertical ? Math.abs(barre.from - 7) : barre.to) +
      GUTTER_SMALL;
    barreWidth = 10;
    barreHeight = (barre.to - barre.from) * GUITAR_STRING_MARGIN;
  }

  return (
    <svg
      style={{
        height: vertical ? 'auto' : `${height}px`,
        width: !vertical ? 'auto' : `${height}px`,
      }}
      viewBox={`0 0 ${vertical ? griffViewboxHeight : griffWidth + 28} ${
        !vertical ? griffViewboxHeight : griffWidth + 28
      }`}
    >
      <GriffBase width={griffWidth} height={griffHeight} />
      <g data-name="frets-container">
        {frets.map((fretKey) => {
          x1Buffer = calculatePosition(FRET_MARGIN, fretKey - 1, FRET_START);
          return (
            <Fret
              style={fretStyle}
              key={`fret-${fretKey}`}
              number={fretKey}
              y1={vertical ? x1Buffer : GUITAR_STRING_MARGIN}
              y2={vertical ? x1Buffer : GUITAR_STRING_MARGIN_2}
              x1={vertical ? GUITAR_STRING_MARGIN : x1Buffer}
              x2={vertical ? GUITAR_STRING_MARGIN_2 : x1Buffer}
            />
          );
        })}
      </g>
      <g data-name="guitar-strings-container">
        {GUITAR_STRINGS.map((gstring) => {
          x1Buffer = calculatePosition(
            GUITAR_STRING_MARGIN,
            gstring,
            GUITAR_STRING_START
          );
          y1Buffer =
            calculatePosition(FRET_MARGIN, maxFret, GUITAR_STRING_START) + 2;
          return (
            <String
              style={stringStyle}
              key={`string-${gstring}`}
              number={gstring}
              y1={vertical ? 25 : x1Buffer}
              x1={vertical ? x1Buffer : 25}
              x2={vertical ? x1Buffer : y1Buffer}
              y2={vertical ? y1Buffer : x1Buffer}
            />
          );
        })}
      </g>
      <g data-name="guitar-neck-container">
        <Neck
          style={neckStyle}
          vertical={vertical}
          stringsStatus={vertical ? stringsStatus.reverse() : stringsStatus}
        />
      </g>
      <g data-name="fingers-container">
        {fingering.map(({ fret = 1, string = 1, finger }) => {
          x1Buffer = calculatePosition(FRET_MARGIN, fret - 1, BARRE_START);
          y1Buffer = calculatePosition(
            GUITAR_STRING_MARGIN,
            vertical ? Math.abs(string - 6) : string - 1,
            GUITAR_STRING_START
          );
          return (
            <Finger
              textStyle={fingerTextStyle}
              style={fingerStyle}
              key={`finger-${string}-${fret}`}
              string={string}
              fret={fret}
              finger={finger}
              x={vertical ? y1Buffer : x1Buffer}
              y={vertical ? x1Buffer : y1Buffer}
            />
          );
        })}
      </g>
      {barre && (
        <g data-name="barre-container">
          <Barre
            vertical={vertical}
            width={vertical ? barreHeight : barreWidth}
            height={vertical ? barreWidth : barreHeight}
            x1={vertical ? barreY1 : barreX}
            x2={vertical ? barreY2 : barreX}
            y1={vertical ? barreX : barreY1}
            y2={vertical ? barreX : barreY2}
          />
        </g>
      )}
      {showFretNumber && (
        <FretTitle
          vertical={vertical}
          number={fretNumberTitle}
          prefix={fretNumberPrefix}
          style={fretNumberStyle}
        />
      )}
      {name && showTitle && (
        <Title vertical={vertical} style={titleStyle} name={name} />
      )}
    </svg>
  );
}
