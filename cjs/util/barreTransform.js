"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = barreTransform;

function barreTransform(fingering = []) {
  const barreFind = fingering.find(finger => !!finger.barre);
  if (!barreFind) return false;
  return { ...barreFind.barre,
    fret: barreFind.fret
  };
}