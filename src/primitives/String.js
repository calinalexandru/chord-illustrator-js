/* eslint-disable-next-line */
import { createElement } from '../jsx';

export default function String({
  number,
  vertical = false,
  x1 = 25,
  y1,
  x2,
  y2,
}) {
  return (
    <line
      data-name={`string-${number}`}
      x1={vertical ? y1 : x1}
      y1={vertical ? x1 : y1}
      x2={vertical ? y2 : x2}
      y2={vertical ? x2 : y2}
      stroke="black"
      style={{ opacity: 0.3 }}
      strokeWidth="1"
    />
  );
}
