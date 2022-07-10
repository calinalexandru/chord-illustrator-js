"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = calculatePosition;

function calculatePosition(margin, key, start) {
  return margin * key + start;
}