/* eslint-disable-next-line */
import { createElement } from '../jsx';

export default function String({ number, style = {}, x1 = 25, y1, x2, y2 }) {
  return (
    <line
      data-name={`string-${number}`}
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke="black"
      style={{ opacity: 0.3, ...style }}
      strokeWidth="1"
    />
  );
}
