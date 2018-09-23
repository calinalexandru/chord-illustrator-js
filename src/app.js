const Illustrator = require.main.require('./illustrator/illustrator');
const DOMParser = require('xmldom').DOMParser;

const gcillustrator = new Illustrator();

const document = new DOMParser().parseFromString('<html></html>');

const elem = document.createElement('div');
const fs = require('fs');

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

const chordSVG = Illustrator.chord(elem, chordBmOptions);


console.log(chordSVG.toString());

fs.writeFile('chord.html', chordSVG.toString(), () => {
    console.log('chord arrived')
});
