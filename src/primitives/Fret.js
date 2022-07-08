import { createElement } from '../fake-react';

export default function Fret({ number, x1, x2 }) {
  return (
    <line
      data-name={`fret-${number}`}
      x1={x1}
      y1="20"
      x2={x2}
      y2="126"
      strokeWidth="3"
      stroke="#472611"
    />
  );
}
