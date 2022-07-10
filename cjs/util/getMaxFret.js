"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getMaxFret;

function getMaxFret(fingering = []) {
  return Math.max(3, ...fingering.map(finger => finger.fret));
}