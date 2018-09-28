// import chord-illustrator & xmldom
const ChordIllustrator = require('chord-illustrator');
const DOMParser = require('xmldom').DOMParser;

// prepare html objects
// https://www.w3.org/DOM/
const document = new DOMParser().parseFromString('<html></html>');

//
const ci = new ChordIllustrator(document.createElement('div'));

describe('readme examples', () => {

    test('make a Bm chord', () => {
        const svg = ci.make({
            name: 'Bm',
            mutedStrings: ['yes'],
            fingering: [
                {
                    fret: 1,
                    barre: {from: 1, to: 5}
                },
                {fret: 2, string: 2},
                {fret: 3, string: 3},
                {fret: 3, string: 4}
            ]
        });

        // console.log('HTML output', svg.toString());
    })
});