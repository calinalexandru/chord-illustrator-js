"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isLinearChord;

function isLinearChord(fingering = []) {
  return fingering.every(({
    fret
  }, i, arr) => fret === arr[0].fret);
}