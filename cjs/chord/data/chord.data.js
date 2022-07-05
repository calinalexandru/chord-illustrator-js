'use strict';

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var dt = require('./transformer/chord.data.transformer');

var ChordData = /*#__PURE__*/function () {
  function ChordData(options) {
    _classCallCheck(this, ChordData);

    this.options = options; // console.log('ChordData', this.options.fretboardRange)

    this.chordPatterns = [{
      'type': 'clamp',
      'fret': 'isNumber:isInteger',
      'string': 'isNumber:isInteger:inStringRange'
    }, {
      'type': 'barre',
      'fret': 'isNumber:isInteger',
      // 'barre': {
      //     'from': 'isNumber:isInteger:inStringRange',
      //     'to': 'isNumber:isInteger:inStringRange'
      // }
      barre: {}
    }];
    this.rootFret = 1;
    this.fretboardStart = 0;
    this.fretboardEnd = 0;
    this.fretNum = 22;
    this.chordFirstFret = null;
    this.chord = null;
    this.chordLength = 3;
    this.stringNum = 6;
    this.statusStringList = [null, 'open', 'closed'];
    this.statusString = null;

    this._setData(dt.transform(this.options));
  }

  _createClass(ChordData, [{
    key: "_setData",
    value: function _setData(options) {
      // console.log('_setData(opt)', options);
      if (_typeof(options) !== 'object') {
        throw new Error('Wrong options type');
      }

      if ('title' in options) {
        this.title = String(options.title);
      }

      if ('rootFret' in options) {
        this.rootFret = options.rootFret;
      }

      if ('statusString' in options) {
        this.statusString = this._validateStringStatus(options.statusString);
      }

      if (options['fretboardRange']) {
        this.fretboardStart = options.fretboardRange['start'] || 1;
        --this.fretboardStart;
        this.fretboardEnd = options.fretboardRange['end'] || 12;
        ++this.fretboardEnd; // console.log('fretboardRange', this.fretboardEnd)
      } // console.log('fretboardRange', options.fretboardRange)
      // this.fretboardEnd = 12


      if ('chord' in options) {
        this.chord = this._validateChord(options.chord);
        this.chordFirstFret = 1;
        var margin = 1;

        if (options['fretboardRange'] !== false) {
          this.chordFirstFret = this.fretboardStart + 1;
          margin = this.fretboardStart;
        }

        if (this.getFirstFretOfChord() > 2 || this.getFretsMaxInterval() > 4 || this.fretboardEnd) {
          this.chordFirstFret = this.getFirstFretOfChord();

          if (!this.fretboardEnd) {
            margin = this.chordFirstFret - 1;
          }

          for (var i = 0; i < this.chord.length; i++) {
            this.chord[i].fret = this.chord[i].fret - margin;
          }
        }

        this._filterChord();
      }

      this.chordLength = this.getFretsMaxInterval();
    }
  }, {
    key: "_validateStringStatus",
    value: function _validateStringStatus(statusString) {
      if (!Array.isArray(statusString)) {
        throw new Error('String status must be array');
      }

      if (statusString.length != this.stringNum) {
        throw new Error('Number of string must be equal ' + this.stringNum);
      }

      for (var i = 0; i < statusString.length; i++) {
        if (this.statusStringList.indexOf(statusString[i]) == -1) {
          throw new Error('Wrong string status');
        }
      }

      return statusString;
    }
  }, {
    key: "_validateChord",
    value: function _validateChord(chord) {
      for (var i = 0, chordLength = chord.length; i < chordLength; i++) {
        var isVerify = false;

        for (var j = 0, patternsLength = this.chordPatterns.length; j < patternsLength; j++) {
          if (this._compareWithPattern(chord[i], this.chordPatterns[j])) {
            chord[i].type = this.chordPatterns[j].type;
            isVerify = true;
          }
        }

        if (!isVerify) {
          throw new Error('Wrong chord data');
        }
      }

      return chord;
    }
  }, {
    key: "_filterChord",
    value: function _filterChord() {
      this.chord = this.chord.filter(function (obj) {
        if (obj.fret < this.chordFirstFret + this.fretNum) {
          return obj;
        }
      }, this);
    }
  }, {
    key: "_compareWithPattern",
    value: function _compareWithPattern(chord, pattern) {
      for (var prop in pattern) {
        if (prop == 'type') {
          continue;
        }

        if (_typeof(chord[prop]) === 'object' && _typeof(pattern[prop]) === _typeof(pattern[prop])) {
          return this._compareWithPattern(chord[prop], pattern[prop]);
        }

        if (chord.hasOwnProperty(prop)) {
          var functions = pattern[prop].split(':');

          for (var i = 0, length = functions.length; i < length; i++) {
            if (!this['_' + functions[i]](chord[prop])) {
              return false;
            }
          }
        } else {
          return false;
        }
      }

      return true;
    }
  }, {
    key: "_isNumber",
    value: function _isNumber(num) {
      return !isNaN(parseFloat(num)) && isFinite(num);
    }
  }, {
    key: "_isInteger",
    value: function _isInteger(num) {
      return (num ^ 0) === num;
    }
  }, {
    key: "_inStringRange",
    value: function _inStringRange(string) {
      return string >= 1 && string <= this.stringNum;
    }
  }, {
    key: "getFirstFretOfChord",
    value: //
    function getFirstFretOfChord() {
      var fretsArr = this.chord.map(function (x) {
        return x.fret;
      });
      return Math.min.apply(Math, _toConsumableArray(fretsArr));
    }
  }, {
    key: "getFretsMaxInterval",
    value: function getFretsMaxInterval() {
      var fretsArr = [];

      for (var i = 0, length = this.chord.length; i < length; i++) {
        fretsArr.push(this.chord[i].fret);
      }

      var max = Math.max.apply(Math, fretsArr);
      var min = Math.min.apply(Math, fretsArr);
      return max + 1;
    }
  }, {
    key: "getFretsInterval",
    value: function getFretsInterval() {
      var fretsArr = [];

      for (var i = 0, length = this.chord.length; i < length; i++) {
        fretsArr.push(this.chord[i].fret);
      }

      var max = Math.max.apply(Math, fretsArr) + 1;
      var min = Math.min.apply(Math, fretsArr);
      return max - min;
    }
  }, {
    key: "getData",
    value: function getData() {
      return {
        'title': this.title,
        'statusString': this.statusString,
        'chord': this.chord,
        'firstFret': this.chordFirstFret,
        'stringNum': this.stringNum,
        'rootFret': this.rootFret,
        'chordLength': this.chordLength,
        'fretboardStart': this.fretboardStart,
        'fretboardEnd': this.fretboardEnd
      };
    }
  }]);

  return ChordData;
}();

module.exports = ChordData;