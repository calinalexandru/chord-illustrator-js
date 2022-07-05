import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";

/* @jsx React.createElement */
import React from './fake-react';
import Chord from './components/chord';

var Illustrator = /*#__PURE__*/function () {
  function Illustrator() {
    _classCallCheck(this, Illustrator);
  }

  _createClass(Illustrator, null, [{
    key: "make",
    value: function make() {
      var elem = /*#__PURE__*/React.createElement(Chord, null);
      return elem;
    }
  }]);

  return Illustrator;
}();

export { Illustrator as default };