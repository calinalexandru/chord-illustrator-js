"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getFretboardRange;

var _getMaxFret = _interopRequireDefault(require("./getMaxFret"));

var _getMinFret = _interopRequireDefault(require("./getMinFret"));

var _getArrayRange = _interopRequireDefault(require("./getArrayRange"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getFretboardRange(fingering) {
  const start = (0, _getMinFret.default)(fingering);
  const end = (0, _getMaxFret.default)(fingering);
  return (0, _getArrayRange.default)({
    from: start,
    to: end
  });
}