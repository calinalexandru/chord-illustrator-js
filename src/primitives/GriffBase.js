/* eslint-disable-next-line */
import { createElement } from '../jsx';

export default function GriffBase({
  x = 25,
  y = 23,
  width = 180,
  height = 100,
}) {
  return (
    <rect
      x={x}
      y={y}
      height={height}
      width={width}
      stroke="rgb(0, 0, 0)"
      strokeWidth="0"
      style={{ opacity: 0.3 }}
      fill="rgb(255, 255, 255)"
    />
  );
}
