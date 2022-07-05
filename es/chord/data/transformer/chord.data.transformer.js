function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var dt = /*#__PURE__*/function () {
  function dt() {
    _classCallCheck(this, dt);
  }

  _createClass(dt, null, [{
    key: "transform",
    value: function transform(data) {
      return {
        'title': data.name,
        'statusString': dt.reverseFillStringStatus(data.mutedStrings),
        'chord': data.fingering.map(function (finger) {
          var obj = {};
          obj['fret'] = Number(finger.fret);
          if (finger.barre) obj['barre'] = {
            from: Number(finger.barre.from),
            to: Number(finger.barre.to)
          };
          if (finger.string) obj['string'] = Number(finger.string);
          return obj;
        }),
        'firstFret': data.chordFirstFret || 1,
        'stringNum': data.stringNum || 6,
        'fretboardRange': data.fretboardRange || false
      };
    }
  }, {
    key: "reverseFillStringStatus",
    value: function reverseFillStringStatus(opt) {
      // make “x” nuggets
      if (opt) opt = opt.length < 6 ? opt.concat(dt.initStrings(6 - opt.length)) : opt;else opt = dt.initStrings();
      return opt.map(function (status) {
        if (status === 'yes') return 'closed';else return 'open';
      }).reverse();
    }
  }, {
    key: "initStrings",
    value: function initStrings(length) {
      var buffer = [];

      for (var i = 0; i < (length || 6); i++) {
        buffer[i] = 'no';
      }

      return buffer;
    }
  }]);

  return dt;
}();

module.exports = dt;