/* eslint-disable */
// /** @jsx createElement */
// /** @jsxFrag createFragment */
import { createElement } from '../fake-react'; // import React from 'react';
// import {
//   BARRE_START,
//   BARRE_MARGIN,
//   FRET_MARGIN,
//   FRET_START,
//   GUITAR_STRING_MARGIN,
//   GUITAR_STRING_START,
//   GUITAR_STRINGS,
//   GUTTER_SMALL,
// } from '../constants';
// import String from '../primitives/String';
// import Fret from '../primitives/Fret';
// import Barre from '../primitives/Barre';
// import Neck from '../primitives/Neck';
// import Finger from '../primitives/Finger';
// import FretTitle from '../primitives/FretTitle';
// import Title from '../primitives/Title';
// import calculatePosition from '../util/calculatePosition';

export default function Chord({
  name,
  height,
  fretNumberTitle = 1,
  fingering = [],
  barre = false,
  frets = [],
  maxFret = 3
}) {
  return createElement("p", null, "Ilie");
}