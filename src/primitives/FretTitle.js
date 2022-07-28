/* eslint-disable-next-line */
import { createElement } from '../jsx';

export default function FretTitle({
  x1 = 24,
  x2 = 0,
  y1 = 138,
  y2 = 36,
  vertical,
  style,
  prefix,
  number,
}) {
  return (
    <text
      x={vertical ? x2 : x1}
      y={vertical ? y2 : y1}
      fontSize="12"
      fontFamily="Courier"
      fontWeight="bold"
      style={{ opacity: 0.3, ...style }}
      fill="rgb(0, 0, 0)"
    >
      {`${prefix}${number}`}
    </text>
  );
}
