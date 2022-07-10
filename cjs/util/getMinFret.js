"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getMinFret;

function getMinFret(fingering = []) {
  return Math.min(...fingering.map(finger => finger.fret));
}