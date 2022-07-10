"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Title;

var _jsx = require("../jsx");

/* eslint-disable-next-line */
function Title({
  name
}) {
  return (0, _jsx.createElement)("text", {
    x: "115",
    y: "13",
    fontFamily: "Courier",
    fill: "rgb(0, 0, 0)",
    textAnchor: "middle"
  }, name);
}