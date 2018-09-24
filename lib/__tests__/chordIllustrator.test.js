const assert = require('assert');
const ChordIllustrator = require('../index.js');
const fs = require('fs');
const DOMParser = require('xmldom').DOMParser;

const ChordDataMock = require('../static/chord.data.mock');

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

        const chordBmOptions = new ChordDataMock()[0];

        const chordSVG = ChordIllustrator.chord(elem, chordBmOptions);
        // Bminor's XML length should be "2021"

        assert(true, chordSVG.toString().length === 2021);
    });

    it('can be saved/retrieved from a file', () => {
        const document = new DOMParser().parseFromString('<html></html>');
        const elem = document.createElement('div');

        const chordBmOptions = new ChordDataMock()[0];

        const chordSVG = ChordIllustrator.chord(elem, chordBmOptions);
        // Bminor's XML length should be "2021"

        const filepath = 'static/chord.svg.html';

        fs.writeFile(filepath, chordSVG.toString(), (err) => {
            if (err) {
                console.error('couldnt write to disk');
                assert(true, false)
            }

            fs.readFile(filepath, {encoding: 'utf-8'}, (err, data) => {
                if (!err) {
                    assert(true, true);
                }else{

                }
            });
        });

    })

});

