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
        const chordNames = ['B', 'A', 'Em', 'C'];

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


    it('can be resized by height', () => {

        const ci2 = new ChordIllustrator(document.createElement('div'));
        ci2.setHeight(150);
        const localSvg = ci2.make(Chord.mock());

        expect(parseInt(localSvg.getAttribute('height'))).toBe(150);
    });


    // it('can do magic', () => {
    //     // https://www.w3.org/DOM/
    //     const document = new DOMParser().parseFromString('<html></html>');
    //     const container = document.createElement('div');
    //
    //     const fingering = [
    //         { fret: 1,
    //             barre: { from: 1, to: 5 }
    //         },
    //         { fret: 2, string: 2 },
    //         { fret: 3, string: 3 },
    //         { fret: 3, string: 4 }
    //     ];
    //
    //     const options = {
    //         title: 'Bm',
    //         muteString: ['yes'],
    //     };
    //
    //     const ci = new ChordIllustrator(container);
    //     const svg = ci.make(options);
    //     console.log(svg.toString());
    //
    //     ci.setContainer(div);
    //
    //     svg = ci.make(options);
    // });



});

