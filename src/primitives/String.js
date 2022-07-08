import { createElement } from '../fake-react';
// import { createElement } from 'react';

export default function String({ number, x1 = 25, y1, x2, y2 }) {
  return (
    <line
      data-name={`string-${number}`}
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke="black"
      style={{ opacity: 0.3 }}
      strokeWidth="1"
    />
  );
}
