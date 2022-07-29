/* eslint-disable-next-line */
import { createElement } from '../jsx';

export default function Title({
  style = {},
  x1 = 115,
  x2 = 72,
  y1 = 13,
  y2 = 9,
  vertical,
  name,
}) {
  return (
    <text
      x={vertical ? x2 : x1}
      y={vertical ? y2 : y1}
      data-name="title"
      fontFamily="Courier"
      fill="rgb(0, 0, 0)"
      textAnchor="middle"
      style={style}
    >
      {name}
    </text>
  );
}
