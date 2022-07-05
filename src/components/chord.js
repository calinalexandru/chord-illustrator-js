import React from 'react';

/* eslint-disable react/prop-types */
export default function Chord({ name = 'Am', fingering, barre }) {
  const guitarStringStart = 23;
  const guitarStringMargin = 20;
  const fretStart = 85;
  const fretMargin = 60;
  const barreStart = 55;
  const barreMargin = 65;
  const guitarStrings = [0, 1, 2, 3, 4, 5];
  const barreX = barreMargin * (barre.fret - 1) + barreStart;
  return (
    <svg height="440" viewBox="0 0 215 141" xmlns="http://www.w3.org/2000/svg">
      <rect
        x="25"
        y="23"
        height="100"
        width="180"
        stroke="rgb(0, 0, 0)"
        strokeWidth="0"
        style={{ opacity: 0.3 }}
        fill="rgb(255, 255, 255)"
      />
      <g data-name="frets-container">
        {fingering.map(({ fret }) => (
          <line
            data-name={`fret-${fret}`}
            x1={fretMargin * (fret - 1) + fretStart}
            y1="20"
            x2={fretMargin * (fret - 1) + fretStart}
            y2="126"
            strokeWidth="3"
            stroke="#472611"
          />
        ))}
      </g>
      <g data-name="guitar-strings-container">
        {guitarStrings.map((gstring) => (
          <line
            x1="25"
            y1={guitarStringMargin * gstring + guitarStringStart}
            x2="205"
            y2={guitarStringMargin * gstring + guitarStringStart}
            stroke="black"
            style={{ opacity: 0.3 }}
            strokeWidth="1"
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
      {barre && (
        <g data-name="barre-container">
          <circle
            cx={barreX}
            cy="23"
            r="5"
            stroke="rgb(0, 0, 0)"
            strokeWidth="1"
            fill="rgb(0, 0, 0)"
          />
          <circle
            cx={barreX}
            cy="103"
            r="5"
            stroke="rgb(0, 0, 0)"
            strokeWidth="1"
            fill="rgb(0, 0, 0)"
          />
          <rect
            x={barreX - 5}
            y="23"
            height="80"
            width="10"
            stroke="rgb(0, 0, 0)"
            strokeWidth="1"
            fill="rgb(0, 0, 0)"
          />
        </g>
      )}
      <circle
        cx="115"
        cy="43"
        r="5"
        stroke="rgb(0, 0, 0)"
        strokeWidth="1"
        fill="rgb(0, 0, 0)"
      />
      <text
        x="112"
        y="46"
        fontSize="10"
        fontFamily="Arial"
        fontStyle="italic"
        fill="white"
      >
        2
      </text>
      <circle
        cx="175"
        cy="63"
        r="5"
        stroke="rgb(0, 0, 0)"
        strokeWidth="1"
        fill="rgb(0, 0, 0)"
      />
      <text
        x="172"
        y="66"
        fontSize="10"
        fontFamily="Arial"
        fontStyle="italic"
        fill="white"
      >
        4
      </text>
      <circle
        cx="175"
        cy="83"
        r="5"
        stroke="rgb(0, 0, 0)"
        strokeWidth="1"
        fill="rgb(0, 0, 0)"
      />
      <text
        x="172"
        y="86"
        fontSize="10"
        fontFamily="Arial"
        fontStyle="italic"
        fill="white"
      >
        3
      </text>
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
        fr2
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
