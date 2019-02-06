// vendor
const fs = require('fs');
const DOMParser = require('xmldom').DOMParser;

// local
const ChordIllustrator = require('../index.js');
const Chord = require('../chord/model/chord.model');

// header
const document = new DOMParser().parseFromString('<html></html>');
const ci = new ChordIllustrator();
ci.setContainer(document.createElement('div'));

const dir = './static/';
const byNameDir = 'by_name/';
const bigChordsDir = 'big_chords/';

function checkDirectorySync(directory) {
    try {
        fs.statSync(directory);
    } catch(e) {
        fs.mkdirSync(directory);
    }
}

checkDirectorySync(dir)
checkDirectorySync(dir+byNameDir)
checkDirectorySync(dir+bigChordsDir)

describe('ChordIllustrator can do stuff', () => {

    test('makem me some chords', () => {
        Chord.mocks().forEach(chord => {
            const filepath = `${dir}chord-${chord.name}.svg.html`;
            const svg = ci.make(chord);

            fs.writeFile(filepath, svg.toString(), (err) => {
                if (err)
                    expect(true).toBe(err);

                fs.readFile(filepath, {encoding: 'utf-8'}, (err, data) => {
                    if (err)
                        expect(err).toBe(0);
                });
            });

        });


    });

    test('make me some chord by name', () => {
        const chordNames = ['B', 'Am', 'Em', 'C'];

        chordNames.forEach(name => {
            const filepath = `${dir}${byNameDir}chord-${name}.svg.html`;
            const svg = ci.make(name);

            fs.writeFile(filepath, svg.toString(), (err) => {
                if (err)
                    expect(err).toBe(0);

                fs.readFile(filepath, {encoding: 'utf-8'}, (err, data) => {
                    if (err)
                        expect(err).toBe(0);
                });
            });

        });

    });


    test('can be resized by height', () => {

        const ci2 = new ChordIllustrator(document.createElement('div'));
        ci2.setHeight(150);
        const localSvg = ci2.make(Chord.mock());

        expect(parseInt(localSvg.getAttribute('height'))).toBe(150);
    });

    test('can support more than 3 frets', () => {
        const name = 'Am-2'
        const filepath = `${dir}${bigChordsDir}chord-${name}.svg.html`

        const svg = ci.make({
            name: name,
            fingering: [
                {fret: 2, string: 4, finger: 1},
                {fret: 3, string: 5, finger: 2},
                {fret: 5, string: 3, finger: 4},
                {fret: 5, string: 6, finger: 3}
            ]
        })

        fs.writeFile(filepath, svg.toString(), (err) => {
            if (err)
                expect(err).toBe(0);

            fs.readFile(filepath, {encoding: 'utf-8'}, (err, data) => {
                if (err)
                    expect(err).toBe(0);
            });
        });


    });

});

