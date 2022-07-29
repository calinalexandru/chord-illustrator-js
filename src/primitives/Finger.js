/* eslint-disable-next-line */
import { createElement } from '../jsx';

export default function Finger({
  style = {},
  textStyle = {},
  fret,
  string,
  finger,
  x,
  y,
}) {
  return (
    <g data-name={`finger-${fret}-${string}`}>
      <circle
        data-name={`finger-circle-${fret}-${string}`}
        data-common-name="finger-circle"
        cx={x}
        cy={y}
        r="5"
        stroke="rgb(0, 0, 0)"
        strokeWidth="1"
        fill="rgb(0, 0, 0)"
        style={style}
      />
      {finger && (
        <text
          data-name={`finger-text-${fret}-${string}-${finger}`}
          data-common-name="finger-text"
          x={x - 3}
          y={y + 4}
          fontSize="10"
          fontFamily="Arial"
          fontStyle="italic"
          fill="white"
          style={textStyle}
        >
          {finger}
        </text>
      )}
    </g>
  );
}
