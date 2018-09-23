const assert = require('assert');
const ChordIllustrator = require('../index.js');
const DOMParser = require('xmldom').DOMParser;

describe('chordIllustrator', () => {

  it('is not null', () => {
    assert(true, typeof ChordIllustrator === 'function')
  });

  it('has chord method', () => {
    assert(true, typeof ChordIllustrator.chord === 'function')
  });

  it('can generate svg', () => {
      const document = new DOMParser().parseFromString('<html></html>');
      const elem = document.createElement('div');

      const chordBmOptions = {
          'title': 'Bm',
          'statusString': ['open', 'open', 'open', 'open', 'open', 'closed'],
          'chord': [{
              'fret': 1,
              'barre': {
                  'from': 1,
                  'to': 6
              }
          }, {
              'fret': 2,
              'string': 2
          }, {
              'fret': 3,
              'string': 3
          }, {
              'fret': 3,
              'string': 4
          }]
      };

      const chordSVG = ChordIllustrator.chord(elem, chordBmOptions);
      // Bminor's XML length should be "2021"

      assert(true, chordSVG.toString().length === 2021);
  });
});
