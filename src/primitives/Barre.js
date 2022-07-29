/* eslint-disable-next-line */
import { createElement, createFragment } from '../jsx';

export default function Barre({
  style = {},
  vertical,
  x1,
  x2,
  y1,
  y2,
  height,
  width = 10,
}) {
  return (
    <g data-name="barre-container">
      <circle
        cx={x1}
        cy={y1}
        r="5"
        stroke="rgb(0, 0, 0)"
        strokeWidth="1"
        fill="rgb(0, 0, 0)"
        style={style}
      />
      <circle
        cx={x2}
        cy={y2}
        r="5"
        stroke="rgb(0, 0, 0)"
        strokeWidth="1"
        fill="rgb(0, 0, 0)"
        style={style}
      />
      <rect
        x={vertical ? x1 : x1 - 5}
        y={vertical ? y1 - 5 : y1 - 5}
        height={height}
        width={width}
        stroke="rgb(0, 0, 0)"
        strokeWidth="1"
        fill="rgb(0, 0, 0)"
        style={style}
      />
    </g>
  );
}
