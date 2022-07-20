/* eslint-disable-next-line */
import { createElement } from '../jsx';

export default function Fret({
  number,
  vertical = false,
  x1,
  y1 = 20,
  y2 = 126,
  x2,
}) {
  return (
    <line
      data-name={`fret-${number}`}
      x1={vertical ? y1 : x1}
      y1={vertical ? x1 : y1}
      x2={vertical ? y2 : x2}
      y2={vertical ? x2 : y2}
      strokeWidth="3"
      stroke="#472611"
    />
  );
}
