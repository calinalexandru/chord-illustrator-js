"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Neck;

var _jsx = require("../jsx");

var _constants = require("../constants");

var _calculatePosition = _interopRequireDefault(require("../util/calculatePosition"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-nested-ternary */

/* eslint-disable-next-line */
function Neck({
  stringsStatus = []
}) {
  return stringsStatus.map((status, key) => status !== 'closed' ? status === 'open' ? (0, _jsx.createElement)("circle", {
    cx: "15",
    cy: (0, _calculatePosition.default)(_constants.GUITAR_STRING_MARGIN, key, _constants.GUITAR_STRING_START),
    r: "5",
    stroke: "rgb(0, 0, 0)",
    strokeWidth: "1",
    style: {
      opacity: 0.3
    },
    fill: "rgb(255, 255, 255)"
  }) : (0, _jsx.createElement)(_jsx.createFragment, null, (0, _jsx.createElement)("line", {
    x1: "10",
    y1: (0, _calculatePosition.default)(_constants.GUITAR_STRING_MARGIN, key, _constants.GUITAR_NECK_START),
    x2: "20",
    y2: (0, _calculatePosition.default)(_constants.GUITAR_STRING_MARGIN, key, _constants.GUITAR_NECK_START) + 10,
    stroke: "rgb(0, 0, 0)",
    style: {
      opacity: 0.3
    },
    strokeWidth: "1"
  }), (0, _jsx.createElement)("line", {
    x1: "20",
    y1: (0, _calculatePosition.default)(_constants.GUITAR_STRING_MARGIN, key, _constants.GUITAR_NECK_START),
    x2: "10",
    y2: (0, _calculatePosition.default)(_constants.GUITAR_STRING_MARGIN, key, _constants.GUITAR_NECK_START) + 10,
    stroke: "rgb(0, 0, 0)",
    style: {
      opacity: 0.3
    },
    strokeWidth: "1"
  })) : false);
}