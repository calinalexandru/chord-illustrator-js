import { createElement } from '../jsx';
// import { createElement } from 'react';

export default function FretTitle({ number }) {
  return (
    <text
      x="14"
      y="138"
      fontSize="12"
      fontFamily="Courier"
      fontStyle="italic"
      fontWeight="bold"
      style={{ opacity: 0.3 }}
      fill="rgb(0, 0, 0)"
    >
      {`fr${number}`}
    </text>
  );
}
