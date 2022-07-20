/* eslint-disable-next-line */
import { createElement, createFragment } from '../jsx';

export default function Barre({ vertical, x, y1, y2, height, width = 10 }) {
  return (
    <>
      <circle
        cx={vertical ? y1 : x}
        cy={vertical ? x : y1}
        r="5"
        stroke="rgb(0, 0, 0)"
        strokeWidth="1"
        fill="rgb(0, 0, 0)"
      />
      <circle
        cx={vertical ? y2 : x}
        cy={vertical ? x : y2}
        r="5"
        stroke="rgb(0, 0, 0)"
        strokeWidth="1"
        fill="rgb(0, 0, 0)"
      />
      <rect
        x={vertical ? y1 : x - 5}
        y={vertical ? x - 5 : y1}
        height={vertical ? width : height}
        width={vertical ? height : width}
        stroke="rgb(0, 0, 0)"
        strokeWidth="1"
        fill="rgb(0, 0, 0)"
      />
    </>
  );
}
