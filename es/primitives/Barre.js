/* eslint-disable-next-line */
import { createElement, createFragment } from '../jsx';
export default function Barre({
  x,
  y1,
  y2,
  height
}) {
  return createElement(createFragment, null, createElement("circle", {
    cx: x,
    cy: y1,
    r: "5",
    stroke: "rgb(0, 0, 0)",
    strokeWidth: "1",
    fill: "rgb(0, 0, 0)"
  }), createElement("circle", {
    cx: x,
    cy: y2,
    r: "5",
    stroke: "rgb(0, 0, 0)",
    strokeWidth: "1",
    fill: "rgb(0, 0, 0)"
  }), createElement("rect", {
    x: x - 5,
    y: y1,
    height: height,
    width: "10",
    stroke: "rgb(0, 0, 0)",
    strokeWidth: "1",
    fill: "rgb(0, 0, 0)"
  }));
}