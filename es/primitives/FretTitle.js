/* eslint-disable-next-line */
import { createElement } from '../jsx';
export default function FretTitle({
  prefix,
  number
}) {
  return createElement("text", {
    x: "24",
    y: "138",
    fontSize: "12",
    fontFamily: "Courier",
    fontWeight: "bold",
    style: {
      opacity: 0.3
    },
    fill: "rgb(0, 0, 0)"
  }, `${prefix}${number}`);
}