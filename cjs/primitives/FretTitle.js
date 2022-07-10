"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FretTitle;

var _jsx = require("../jsx");

/* eslint-disable-next-line */
function FretTitle({
  prefix,
  number
}) {
  return (0, _jsx.createElement)("text", {
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