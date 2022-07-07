import React from 'react';
import getFretboardRange from '../util/getFretboardRange';
import {
  BARRE_START,
  BARRE_MARGIN,
  FRET_MARGIN,
  FRET_START,
  GUITAR_STRING_MARGIN,
  GUITAR_STRING_START,
  GUITAR_STRINGS,
} from '../constants';
import String from '../primitives/String';
import Fret from '../primitives/Fret';
import Barre from '../primitives/Barre';
import Neck from '../primitives/Neck';
import Finger from '../primitives/Finger';
import getMaxFret from '../util/getMaxFret';
import getArrayRange from '../util/getArrayRange';
import getFretPosX from '../util/getFretPosX';

export default function Chord({
  name = 'Am',
  fretNumberTitle = 1,
  fingering = [],
  barre = {},
  fretboardRange = {},
}) {
  const hasRange = !!Object.keys(fretboardRange).length;
  const hasBarre = !!Object.keys(barre).length;
  const barreFret = hasBarre ? barre.fret : 0;
  const barreX = BARRE_MARGIN * (barre.fret - 1) + BARRE_START;
  const frets = hasRange
    ? getArrayRange(fretboardRange)
    : getFretboardRange(fingering);
  const maxFret = hasRange
    ? fretboardRange.to - fretboardRange.from
    : getMaxFret(fingering);

  return (
    <svg
      style={{
        height: '440px',
        width: 'auto',
      }}
      viewBox={`0 0 ${maxFret * FRET_MARGIN + 28} 141`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="25"
        y="23"
        height="100"
        width={maxFret * FRET_MARGIN}
        stroke="rgb(0, 0, 0)"
        strokeWidth="0"
        style={{ opacity: 0.3 }}
        fill="rgb(255, 255, 255)"
      />
      <g data-name="frets-container">
        {frets.map((fretKey) => (
          <Fret
            key={`fret-${fretKey}`}
            number={fretKey}
            x1={getFretPosX(FRET_MARGIN, fretKey, FRET_START)}
            x2={getFretPosX(FRET_MARGIN, fretKey, FRET_START)}
          />
        ))}
      </g>
      <g data-name="guitar-strings-container">
        {GUITAR_STRINGS.map((gstring) => (
          <String
            key={`string-${gstring}`}
            number={gstring}
            y1={GUITAR_STRING_MARGIN * gstring + GUITAR_STRING_START}
            x2={FRET_MARGIN * maxFret + GUITAR_STRING_START + 2}
            y2={GUITAR_STRING_MARGIN * gstring + GUITAR_STRING_START}
          />
        ))}
      </g>
      <g data-name="guitar-neck-container">
        <Neck />
      </g>
      {hasBarre && (
        <g data-name="barre-container">
          <Barre
            height={(barre.to - barre.from) * GUITAR_STRING_MARGIN}
            x={barreX}
            y1={GUITAR_STRING_MARGIN * barre.from + 3}
            y2={GUITAR_STRING_MARGIN * barre.to + 3}
          />
        </g>
      )}
      <g data-name="fingers-container">
        {fingering.map(
          ({ fret = 1, string = 1 }) =>
            fret !== barreFret && (
              <Finger
                string={string}
                fret={fret}
                x={FRET_MARGIN * (fret - 1) + BARRE_START}
                y={GUITAR_STRING_MARGIN * (string - 1) + GUITAR_STRING_START}
              />
            )
        )}
      </g>
      <text
        x="14"
        y="138"
        fontSize="12"
        fontFamily="Courier"
        fontStyle="italic"
        fontWeight="bold"
        style={{ opacity: 0.3 }}
        fill="rgb(0, 0, 0)"
      >
        {`fr${fretNumberTitle}`}
      </text>
      <text
        x="115"
        y="13"
        fontFamily="Courier"
        fill="rgb(0, 0, 0)"
        textAnchor="middle"
      >
        {name}
      </text>
    </svg>
  );
}
