"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = saveMock;

var _fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function saveMock(data) {
  _fs.default.writeFileSync('mock.svg', data);
}