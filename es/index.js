'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var ChordDrawer = require('./chord/drawer/chord.drawer.js');

var ChordModel = require('./chord/model/chord.model');

var Illustrator = /*#__PURE__*/function () {
  function Illustrator(elem) {
    _classCallCheck(this, Illustrator);

    if (elem) this.setContainer(elem);
    this.name = '';
    this.height = 440;
    this.fretboardRange = {
      start: 1,
      end: 12
    };
  }

  _createClass(Illustrator, [{
    key: "make",
    value: function make(options) {
      // console.log('ChordIllustrator::make(opt)', options)
      if (typeof options === 'string') {
        options = ChordModel.mocks().filter(function (chord) {
          return chord.name === options;
        })[0];

        if (!options) {
          // throw new Error(`Chord with name ${options} not found in local repo!`)
          options = ChordModel.mocks()[0];
        }
      }

      options = options || {};
      this.name = options.name || 'oops';
      options['height'] = this.height;

      if (!'height' in options) {
        options['height'] = this.height;
      } // options['fretboardRange'] = this.fretboardRange
      // console.log('make(options)', options)


      var chord = new ChordDrawer(this.container, options);
      return chord.drawChord();
    }
  }, {
    key: "setContainer",
    value: function setContainer(elem) {
      this.container = elem;
    }
  }, {
    key: "setHeight",
    value: function setHeight(height) {
      this.height = height;
    }
  }]);

  return Illustrator;
}();

module.exports = Illustrator;