/* eslint-disable-next-line */
import { createElement } from '../jsx';

export default function Finger({ vertical, fret, string, finger, x, y }) {
  return (
    <g data-name={`finger-${fret}-${string}`}>
      <circle
        data-name={`finger-circle-${fret}-${string}`}
        cx={vertical ? y : x}
        cy={vertical ? x : y}
        r="5"
        stroke="rgb(0, 0, 0)"
        strokeWidth="1"
        fill="rgb(0, 0, 0)"
      />
      {finger && (
        <text
          data-name={`finger-text-${fret}-${string}-${finger}`}
          x={vertical ? y - 3 : x - 3}
          y={vertical ? x + 4 : y + 4}
          fontSize="10"
          fontFamily="Arial"
          fontStyle="italic"
          fill="white"
        >
          {finger}
        </text>
      )}
    </g>
  );
}
