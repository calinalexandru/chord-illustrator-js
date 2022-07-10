"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = stringsStatusTransform;

var _constants = require("../constants");

function stringsStatusTransform(status) {
  return _constants.GUITAR_STRINGS_STATUS.map((defaultStatus, key) => status[key] ? _constants.STRINGS_STATUS_MAP[status[key]] : defaultStatus).reverse();
}