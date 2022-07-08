function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

// /** @jsx createElement */
import { createElement } from './fake-react';
import Chord from './components/Chord';
import fingeringTransform from './util/fingeringTransform';
import barreTransform from './util/barreTransform';
import getMinFret from './util/getMinFret';
import getFretboardRange from './util/getFretboardRange';
import getArrayRange from './util/getArrayRange';
import getMaxFret from './util/getMaxFret';
import isLinearChord from './predicates/isLinearChord';

var Illustrator = /*#__PURE__*/function () {
  function Illustrator() {
    _classCallCheck(this, Illustrator);
  }

  _createClass(Illustrator, null, [{
    key: "setContainer",
    value: function setContainer(container) {
      Illustrator.container = container;
    }
  }, {
    key: "setHeight",
    value: function setHeight(height) {
      Illustrator.height = height;
    }
  }, {
    key: "setRenderStrategy",
    value: function setRenderStrategy(strategy) {
      Illustrator.renderStrategy = strategy;
    }
  }, {
    key: "make",
    value: function make() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$name = _ref.name,
          name = _ref$name === void 0 ? 'Am' : _ref$name,
          _ref$fingering = _ref.fingering,
          fingering = _ref$fingering === void 0 ? {} : _ref$fingering,
          _ref$fretboardRange = _ref.fretboardRange,
          fretboardRange = _ref$fretboardRange === void 0 ? {} : _ref$fretboardRange;

      var hasRange = !!Object.keys(fretboardRange).length;
      var minFret = getMinFret(fingering);
      var linearMargin = isLinearChord(fingering) ? 2 : 1;
      var baseMargin = minFret > 1 ? minFret - linearMargin : 0;
      var rangeDiff = hasRange ? fretboardRange.from - 1 : baseMargin;
      var fingersParsed = fingeringTransform(fingering, rangeDiff);
      var barreTransformed = barreTransform(fingersParsed);
      var frets = hasRange ? getArrayRange(fretboardRange) : getFretboardRange(fingersParsed);
      var maxFret = hasRange ? fretboardRange.to - fretboardRange.from : getMaxFret(fingersParsed);
      var chordRendered = createElement(Chord, {
        height: Illustrator.height,
        fretNumberTitle: hasRange ? fretboardRange.from : minFret,
        frets: frets,
        name: name,
        maxFret: maxFret,
        fingering: fingersParsed,
        barre: barreTransformed
      });
      if (Illustrator.container) Illustrator.container.appendChid(chordRendered);
      return Illustrator.renderStrategy(chordRendered);
    }
  }]);

  return Illustrator;
}();

export { Illustrator as default };

Illustrator.renderStrategy = function (jsxNode) {
  var tmp = document.createElement('div');
  tmp.appendChild(jsxNode);
  return tmp.innerHTML;
};

Illustrator.height = 440;
Illustrator.container = null;