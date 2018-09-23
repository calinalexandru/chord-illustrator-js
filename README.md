>
###  Chord Illustrator / Generator JS
> based on: [guitar-js]('https://www.npmjs.com/package/guitar-js')

This is a JavaScript library which illustrates finger positions of a guitar chord on a fretboard.

### install
```
npm install chord-illustrator-js
```

### code snippet for nodeJS
>*B minor*
```javascript
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
```