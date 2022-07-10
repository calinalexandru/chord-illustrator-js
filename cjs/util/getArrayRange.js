"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getArrayRange;

function getArrayRange({
  from,
  to
}) {
  const out = [];
  let key = 1;

  for (let i = from; i <= to; i += 1) {
    out.push(key);
    key += 1;
  }

  return out;
}