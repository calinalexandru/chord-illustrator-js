'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Chord = /*#__PURE__*/function () {
  // { name: string, mutedStrings: array, fingering: array, height: number}
  function Chord(name, mutedStrings, fingering) {
    _classCallCheck(this, Chord);

    this.name = name || Chord.mock()['name'];
    this.mutedStrings = mutedStrings || [];
    this.fingering = fingering || Chord.mock()['fingering'];
  }
  /**
   * Mock A minor * @returns {{name: string, fingering: *[]}}
   */


  _createClass(Chord, null, [{
    key: "mock",
    value: function mock() {
      return {
        name: 'Am',
        fingering: [{
          fret: 1,
          string: 2
        }, {
          fret: 2,
          string: 3
        }, {
          fret: 2,
          string: 4
        }]
      };
    }
  }, {
    key: "mocks",
    value: function mocks() {
      return [{
        name: 'Am',
        fingering: [{
          fret: 1,
          string: 2,
          finger: 1
        }, {
          fret: 2,
          string: 3,
          finger: 3
        }, {
          fret: 2,
          string: 4,
          finger: 2
        }]
      }, {
        name: 'A',
        fingering: [{
          fret: 2,
          string: 2,
          finger: 3
        }, {
          fret: 2,
          string: 3,
          finger: 2
        }, {
          fret: 2,
          string: 4,
          finger: 1
        }]
      }, {
        name: 'Bm',
        mutedStrings: ['yes'],
        fingering: [{
          fret: 2,
          barre: {
            from: 1,
            to: 5
          }
        }, {
          fret: 3,
          string: 2,
          finger: 2
        }, {
          fret: 4,
          string: 3,
          finger: 4
        }, {
          fret: 4,
          string: 4,
          finger: 3
        }]
      }, {
        name: 'B',
        mutedStrings: ['yes'],
        fingering: [{
          fret: 2,
          barre: {
            from: 1,
            to: 5
          }
        }, {
          fret: 4,
          string: 2,
          finger: 2
        }, {
          fret: 4,
          string: 3,
          finger: 3
        }, {
          fret: 4,
          string: 4,
          finger: 4
        }]
      }, {
        name: 'Cm',
        mutedStrings: ['yes'],
        fingering: [{
          fret: 3,
          barre: {
            from: 1,
            to: 5
          }
        }, {
          string: 2,
          fret: 4,
          finger: 2
        }, {
          string: 3,
          fret: 5,
          finger: 4
        }, {
          string: 4,
          fret: 5,
          finger: 3
        }]
      }, {
        name: 'C',
        mutedStrings: ['yes'],
        fingering: [{
          fret: 1,
          string: 2,
          finger: 1
        }, {
          fret: 2,
          string: 4,
          finger: 2
        }, {
          fret: 3,
          string: 5,
          finger: 3
        }]
      }, {
        name: 'Dm',
        mutedStrings: ['yes'],
        fingering: [{
          string: 1,
          fret: 1,
          finger: 1
        }, {
          string: 2,
          fret: 3,
          finger: 3
        }, {
          string: 3,
          fret: 2,
          finger: 2
        }]
      }, {
        name: 'D',
        mutedStrings: ['yes'],
        fingering: [{
          string: 1,
          fret: 2,
          finger: 2
        }, {
          string: 2,
          fret: 3,
          finger: 3
        }, {
          string: 3,
          fret: 2,
          finger: 1
        }]
      }, {
        name: 'Em',
        fingering: [{
          fret: 2,
          string: 4,
          finger: 1
        }, {
          fret: 2,
          string: 5,
          finger: 1
        }]
      }, {
        name: 'E',
        fingering: [{
          fret: 1,
          string: 3,
          finger: 1
        }, {
          fret: 2,
          string: 4,
          finger: 3
        }, {
          fret: 2,
          string: 5,
          finger: 2
        }]
      }, {
        name: 'Gm',
        fingering: [{
          fret: 3,
          // barre: {from: 1, to: 6}
          barre: {}
        }, {
          fret: 5,
          string: 4,
          finger: 4
        }, {
          fret: 5,
          string: 5,
          finger: 3
        }]
      }, {
        name: 'G',
        fingering: [{
          fret: 3,
          string: 1,
          finger: 3
        }, {
          fret: 2,
          string: 5,
          finger: 1
        }, {
          fret: 3,
          string: 6,
          finger: 2
        }]
      }, {
        name: 'Fm',
        fingering: [{
          fret: 1,
          // barre: {from: 1, to: 6}
          barre: {}
        }, {
          fret: 3,
          string: 4,
          finger: 4
        }, {
          fret: 3,
          string: 5,
          finger: 3
        }]
      }, {
        name: 'F',
        fingering: [{
          fret: 1,
          barre: {}
        }, {
          fret: 2,
          string: 3,
          finger: 1
        }, {
          fret: 3,
          string: 4,
          finger: 3
        }, {
          fret: 3,
          string: 5,
          finger: 2
        }]
      }];
    }
  }]);

  return Chord;
}();

module.exports = Chord;