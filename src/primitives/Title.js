/* eslint-disable-next-line */
import { createElement } from '../jsx';

export default function Title({ name }) {
  return (
    <text
      x="115"
      y="13"
      fontFamily="Courier"
      fill="rgb(0, 0, 0)"
      textAnchor="middle"
    >
      {name}
    </text>
  );
}
