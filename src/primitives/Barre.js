import { createElement, createFragment } from '../fake-react';

export default function Barre({ x, y1, y2, height }) {
  return (
    <>
      <circle
        cx={x}
        cy={y1}
        r="5"
        stroke="rgb(0, 0, 0)"
        strokeWidth="1"
        fill="rgb(0, 0, 0)"
      />
      <circle
        cx={x}
        cy={y2}
        r="5"
        stroke="rgb(0, 0, 0)"
        strokeWidth="1"
        fill="rgb(0, 0, 0)"
      />
      <rect
        x={x - 5}
        y={y1}
        height={height}
        width="10"
        stroke="rgb(0, 0, 0)"
        strokeWidth="1"
        fill="rgb(0, 0, 0)"
      />
    </>
  );
}
