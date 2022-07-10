"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Chord;

var _jsx = require("../jsx");

var _constants = require("../constants");

var _String = _interopRequireDefault(require("../primitives/String"));

var _Fret = _interopRequireDefault(require("../primitives/Fret"));

var _Barre = _interopRequireDefault(require("../primitives/Barre"));

var _Neck = _interopRequireDefault(require("../primitives/Neck"));

var _Finger = _interopRequireDefault(require("../primitives/Finger"));

var _FretTitle = _interopRequireDefault(require("../primitives/FretTitle"));

var _Title = _interopRequireDefault(require("../primitives/Title"));

var _calculatePosition = _interopRequireDefault(require("../util/calculatePosition"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable-next-line */
function Chord({
  name,
  height,
  fretNumberTitle = 1,
  fretNumberPrefix = 'fr',
  showFretNumber = true,
  fingering = [],
  barre = false,
  frets = [],
  maxFret = 3,
  stringsStatus = _constants.GUITAR_STRINGS_STATUS
}) {
  return (0, _jsx.createElement)("svg", {
    style: {
      height: `${height}px`,
      width: 'auto'
    },
    viewBox: `0 0 ${maxFret * _constants.FRET_MARGIN + 28} 141`
  }, (0, _jsx.createElement)("rect", {
    x: "25",
    y: "23",
    height: "100",
    width: maxFret * _constants.FRET_MARGIN,
    stroke: "rgb(0, 0, 0)",
    strokeWidth: "0",
    style: {
      opacity: 0.3
    },
    fill: "rgb(255, 255, 255)"
  }), (0, _jsx.createElement)("g", {
    "data-name": "frets-container"
  }, frets.map(fretKey => (0, _jsx.createElement)(_Fret.default, {
    key: `fret-${fretKey}`,
    number: fretKey,
    x1: (0, _calculatePosition.default)(_constants.FRET_MARGIN, fretKey - 1, _constants.FRET_START),
    x2: (0, _calculatePosition.default)(_constants.FRET_MARGIN, fretKey - 1, _constants.FRET_START)
  }))), (0, _jsx.createElement)("g", {
    "data-name": "guitar-strings-container"
  }, _constants.GUITAR_STRINGS.map(gstring => (0, _jsx.createElement)(_String.default, {
    key: `string-${gstring}`,
    number: gstring,
    y1: (0, _calculatePosition.default)(_constants.GUITAR_STRING_MARGIN, gstring, _constants.GUITAR_STRING_START),
    x2: (0, _calculatePosition.default)(_constants.FRET_MARGIN, maxFret, _constants.GUITAR_STRING_START) + 2,
    y2: (0, _calculatePosition.default)(_constants.GUITAR_STRING_MARGIN, gstring, _constants.GUITAR_STRING_START)
  }))), (0, _jsx.createElement)("g", {
    "data-name": "guitar-neck-container"
  }, (0, _jsx.createElement)(_Neck.default, {
    stringsStatus: stringsStatus
  })), barre && (0, _jsx.createElement)("g", {
    "data-name": "barre-container"
  }, (0, _jsx.createElement)(_Barre.default, {
    height: (barre.to - barre.from) * _constants.GUITAR_STRING_MARGIN,
    x: (0, _calculatePosition.default)(_constants.BARRE_MARGIN, barre.fret - 1, _constants.BARRE_START),
    y1: _constants.GUITAR_STRING_MARGIN * barre.from + _constants.GUTTER_SMALL,
    y2: _constants.GUITAR_STRING_MARGIN * barre.to + _constants.GUTTER_SMALL
  })), (0, _jsx.createElement)("g", {
    "data-name": "fingers-container"
  }, fingering.map(({
    fret = 1,
    string = 1,
    finger
  }) => (!barre || barre && fret !== barre.fret) && (0, _jsx.createElement)(_Finger.default, {
    key: `finger-${string}-${fret}`,
    string: string,
    fret: fret,
    finger: finger,
    x: (0, _calculatePosition.default)(_constants.FRET_MARGIN, fret - 1, _constants.BARRE_START),
    y: (0, _calculatePosition.default)(_constants.GUITAR_STRING_MARGIN, string - 1, _constants.GUITAR_STRING_START)
  }))), showFretNumber && (0, _jsx.createElement)(_FretTitle.default, {
    number: fretNumberTitle,
    prefix: fretNumberPrefix
  }), name && (0, _jsx.createElement)(_Title.default, {
    name: name
  }));
}