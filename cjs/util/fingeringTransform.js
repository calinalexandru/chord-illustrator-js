"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = fingeringTransform;

function fingeringTransform(fingering = [], margin = 0) {
  return fingering.map(finger => ({ ...finger,
    fret: finger.fret - margin
  }));
}