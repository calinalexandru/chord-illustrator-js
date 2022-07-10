"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Barre;

var _jsx = require("../jsx");

/* eslint-disable-next-line */
function Barre({
  x,
  y1,
  y2,
  height
}) {
  return (0, _jsx.createElement)(_jsx.createFragment, null, (0, _jsx.createElement)("circle", {
    cx: x,
    cy: y1,
    r: "5",
    stroke: "rgb(0, 0, 0)",
    strokeWidth: "1",
    fill: "rgb(0, 0, 0)"
  }), (0, _jsx.createElement)("circle", {
    cx: x,
    cy: y2,
    r: "5",
    stroke: "rgb(0, 0, 0)",
    strokeWidth: "1",
    fill: "rgb(0, 0, 0)"
  }), (0, _jsx.createElement)("rect", {
    x: x - 5,
    y: y1,
    height: height,
    width: "10",
    stroke: "rgb(0, 0, 0)",
    strokeWidth: "1",
    fill: "rgb(0, 0, 0)"
  }));
}