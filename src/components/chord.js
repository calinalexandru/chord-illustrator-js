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
import getMaxFret from '../util/getMaxFret';
import getArrayRange from '../util/getArrayRange';
import getFretPosX from '../util/getFretPosX';
import Barre from '../primitives/Barre';

/* eslint-disable react/prop-types */
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
        <circle
          cx="15"
          cy="23"
          r="5"
          stroke="rgb(0, 0, 0)"
          strokeWidth="1"
          style={{ opacity: 0.3 }}
          fill="rgb(255, 255, 255)"
        />
        <circle
          cx="15"
          cy="43"
          r="5"
          stroke="rgb(0, 0, 0)"
          strokeWidth="1"
          style={{ opacity: 0.3 }}
          fill="rgb(255, 255, 255)"
        />
        <circle
          cx="15"
          cy="63"
          r="5"
          stroke="rgb(0, 0, 0)"
          strokeWidth="1"
          style={{ opacity: 0.3 }}
          fill="rgb(255, 255, 255)"
        />
        <circle
          cx="15"
          cy="83"
          r="5"
          stroke="rgb(0, 0, 0)"
          strokeWidth="1"
          style={{ opacity: 0.3 }}
          fill="rgb(255, 255, 255)"
        />
        <circle
          cx="15"
          cy="103"
          r="5"
          stroke="rgb(0, 0, 0)"
          strokeWidth="1"
          style={{ opacity: 0.3 }}
          fill="rgb(255, 255, 255)"
        />
        <line
          x1="10"
          y1="118"
          x2="20"
          y2="128"
          stroke="rgb(0, 0, 0)"
          style={{ opacity: 0.3 }}
          strokeWidth="1"
        />
        <line
          x1="20"
          y1="118"
          x2="10"
          y2="128"
          stroke="rgb(0, 0, 0)"
          style={{ opacity: 0.3 }}
          strokeWidth="1"
        />
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
              <g key={`finger-${fret}-${string}`}>
                <circle
                  cx={FRET_MARGIN * (fret - 1) + BARRE_START}
                  cy={GUITAR_STRING_MARGIN * (string - 1) + GUITAR_STRING_START}
                  r="5"
                  stroke="rgb(0, 0, 0)"
                  strokeWidth="1"
                  fill="rgb(0, 0, 0)"
                />
                {string && (
                  <text
                    key={`finger-circle-${fret}-${string}`}
                    x={FRET_MARGIN * (fret - 1) + BARRE_START - 3}
                    y={
                      GUITAR_STRING_MARGIN * (string - 1) +
                      GUITAR_STRING_START +
                      3
                    }
                    fontSize="10"
                    fontFamily="Arial"
                    fontStyle="italic"
                    fill="white"
                  >
                    {string}
                  </text>
                )}
              </g>
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
