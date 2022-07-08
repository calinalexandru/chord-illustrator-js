import { createElement } from '../fake-react';
/** @jsx createElement */
// import React from 'react';

export default function Title({
  name
}) {
  return createElement("text", {
    x: "115",
    y: "13",
    fontFamily: "Courier",
    fill: "rgb(0, 0, 0)",
    textAnchor: "middle"
  }, name);
}