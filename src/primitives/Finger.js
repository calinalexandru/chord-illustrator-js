import React from 'react';

export default function Finger({ fret, string, x, y }) {
  return (
    <g data-name={`finger-${fret}-${string}`}>
      <circle
        data-name={`finger-circle-${fret}-${string}`}
        cx={x}
        cy={y}
        r="5"
        stroke="rgb(0, 0, 0)"
        strokeWidth="1"
        fill="rgb(0, 0, 0)"
      />
      {string && (
        <text
          data-name={`finger-text-${fret}-${string}`}
          x={x - 3}
          y={y + 3}
          fontSize="10"
          fontFamily="Arial"
          fontStyle="italic"
          fill="white"
        >
          {string}
        </text>
      )}
    </g>
  );
}