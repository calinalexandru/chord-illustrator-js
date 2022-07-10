"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx = require("./jsx");

var _Chord = _interopRequireDefault(require("./components/Chord"));

var _fingeringTransform = _interopRequireDefault(require("./util/fingeringTransform"));

var _barreTransform = _interopRequireDefault(require("./util/barreTransform"));

var _getMinFret = _interopRequireDefault(require("./util/getMinFret"));

var _getFretboardRange = _interopRequireDefault(require("./util/getFretboardRange"));

var _getArrayRange = _interopRequireDefault(require("./util/getArrayRange"));

var _getMaxFret = _interopRequireDefault(require("./util/getMaxFret"));

var _stringsStatusTransform = _interopRequireDefault(require("./util/stringsStatusTransform"));

var _isLinearChord = _interopRequireDefault(require("./predicates/isLinearChord"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable-next-line */
class Illustrator {
  static setContainer(container) {
    Illustrator.container = container;
  }

  static setHeight(height) {
    Illustrator.height = height;
  }

  static setRenderStrategy(strategy) {
    Illustrator.renderStrategy = strategy;
  }

  static make({
    name = 'Am',
    fingering = {},
    fretboardRange = {},
    mutedStrings = [],
    labels = {}
  } = {}) {
    const {
      showFretNumber = true,
      fretNumberPrefix = 'fr'
    } = labels;
    const hasRange = !!Object.keys(fretboardRange).length;
    const minFret = (0, _getMinFret.default)(fingering);
    const linearMargin = (0, _isLinearChord.default)(fingering) ? 2 : 1;
    const baseMargin = minFret > 1 ? minFret - linearMargin : 0;
    const rangeDiff = hasRange ? fretboardRange.from - 1 : baseMargin;
    const fingersParsed = (0, _fingeringTransform.default)(fingering, rangeDiff);
    const barreTransformed = (0, _barreTransform.default)(fingersParsed);
    const frets = hasRange ? (0, _getArrayRange.default)(fretboardRange) : (0, _getFretboardRange.default)(fingersParsed);
    const maxFret = hasRange ? fretboardRange.to - fretboardRange.from : (0, _getMaxFret.default)(fingersParsed);
    const stringsStatus = (0, _stringsStatusTransform.default)(mutedStrings);
    const chordRendered = (0, _jsx.createElement)(_Chord.default, {
      height: Illustrator.height,
      fretNumberTitle: hasRange ? fretboardRange.from : minFret,
      fretNumberPrefix: fretNumberPrefix,
      showFretNumber: showFretNumber,
      frets: frets,
      name: name,
      maxFret: maxFret,
      fingering: fingersParsed,
      barre: barreTransformed,
      stringsStatus: stringsStatus
    });
    if (Illustrator.container) Illustrator.container.appendChild(chordRendered);
    return Illustrator.renderStrategy(chordRendered);
  }

}

exports.default = Illustrator;
Illustrator.height = 440;
Illustrator.container = null;

Illustrator.renderStrategy = node => node.outerHTML;