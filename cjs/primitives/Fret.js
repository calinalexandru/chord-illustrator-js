"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Fret;

var _jsx = require("../jsx");

/* eslint-disable-next-line */
function Fret({
  number,
  x1,
  x2
}) {
  return (0, _jsx.createElement)("line", {
    "data-name": `fret-${number}`,
    x1: x1,
    y1: "20",
    x2: x2,
    y2: "126",
    strokeWidth: "3",
    stroke: "#472611"
  });
}