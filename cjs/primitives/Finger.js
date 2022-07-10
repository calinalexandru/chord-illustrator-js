"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Finger;

var _jsx = require("../jsx");

/* eslint-disable-next-line */
function Finger({
  fret,
  string,
  finger,
  x,
  y
}) {
  return (0, _jsx.createElement)("g", {
    "data-name": `finger-${fret}-${string}`
  }, (0, _jsx.createElement)("circle", {
    "data-name": `finger-circle-${fret}-${string}`,
    cx: x,
    cy: y,
    r: "5",
    stroke: "rgb(0, 0, 0)",
    strokeWidth: "1",
    fill: "rgb(0, 0, 0)"
  }), finger && (0, _jsx.createElement)("text", {
    "data-name": `finger-text-${fret}-${string}-${finger}`,
    x: x - 3,
    y: y + 4,
    fontSize: "10",
    fontFamily: "Arial",
    fontStyle: "italic",
    fill: "white"
  }, finger));
}