"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = String;

var _jsx = require("../jsx");

/* eslint-disable-next-line */
function String({
  number,
  x1 = 25,
  y1,
  x2,
  y2
}) {
  return (0, _jsx.createElement)("line", {
    "data-name": `string-${number}`,
    x1: x1,
    y1: y1,
    x2: x2,
    y2: y2,
    stroke: "black",
    style: {
      opacity: 0.3
    },
    strokeWidth: "1"
  });
}