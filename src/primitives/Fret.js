/* eslint-disable-next-line */
import { createElement } from '../jsx';

export default function Fret({ number, x1, y1, y2, x2 }) {
  return (
    <line
      data-name={`fret-${number}`}
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      strokeWidth="3"
      stroke="#472611"
    />
  );
}
