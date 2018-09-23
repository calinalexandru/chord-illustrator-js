>
###  chord illustrator / generator JS
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

> XML generated
```xhtml
<svg width="215" height="133" xmlns="http://www.w3.org/2000/svg">
    <rect x="25" y="27" height="100" width="180" stroke="rgb(0, 0, 0)" stroke-width="1" fill="rgb(255, 255, 255)"/>
    <line x1="85" y1="27" x2="85" y2="127" stroke="rgb(0, 0, 0)" stroke-width="1"/>
    <line x1="145" y1="27" x2="145" y2="127" stroke="rgb(0, 0, 0)" stroke-width="1"/>
    <line x1="205" y1="27" x2="205" y2="127" stroke="rgb(0, 0, 0)" stroke-width="1"/>
    <line x1="25" y1="47" x2="205" y2="47" stroke="rgb(0, 0, 0)" stroke-width="1"/>
    <line x1="25" y1="67" x2="205" y2="67" stroke="rgb(0, 0, 0)" stroke-width="1"/>
    <line x1="25" y1="87" x2="205" y2="87" stroke="rgb(0, 0, 0)" stroke-width="1"/>
    <line x1="25" y1="107" x2="205" y2="107" stroke="rgb(0, 0, 0)" stroke-width="1"/>
    <line x1="25" y1="127" x2="205" y2="127" stroke="rgb(0, 0, 0)" stroke-width="1"/>
    <circle cx="15" cy="27" r="5" stroke="rgb(0, 0, 0)" stroke-width="1" fill="rgb(255, 255, 255)"/>
    <circle cx="15" cy="47" r="5" stroke="rgb(0, 0, 0)" stroke-width="1" fill="rgb(255, 255, 255)"/>
    <circle cx="15" cy="67" r="5" stroke="rgb(0, 0, 0)" stroke-width="1" fill="rgb(255, 255, 255)"/>
    <circle cx="15" cy="87" r="5" stroke="rgb(0, 0, 0)" stroke-width="1" fill="rgb(255, 255, 255)"/>
    <circle cx="15" cy="107" r="5" stroke="rgb(0, 0, 0)" stroke-width="1" fill="rgb(255, 255, 255)"/>
    <line x1="10" y1="122" x2="20" y2="132" stroke="rgb(0, 0, 0)" stroke-width="1"/>
    <line x1="20" y1="122" x2="10" y2="132" stroke="rgb(0, 0, 0)" stroke-width="1"/>
    <circle cx="55" cy="27" r="5" stroke="rgb(0, 0, 0)" stroke-width="1" fill="rgb(0, 0, 0)"/>
    <circle cx="55" cy="127" r="5" stroke="rgb(0, 0, 0)" stroke-width="1" fill="rgb(0, 0, 0)"/>
    <rect x="50" y="27" height="100" width="10" stroke="rgb(0, 0, 0)" stroke-width="1" fill="rgb(0, 0, 0)"/>
    <circle cx="115" cy="47" r="5" stroke="rgb(0, 0, 0)" stroke-width="1" fill="rgb(0, 0, 0)"/>
    <circle cx="175" cy="67" r="5" stroke="rgb(0, 0, 0)" stroke-width="1" fill="rgb(0, 0, 0)"/>
    <circle cx="175" cy="87" r="5" stroke="rgb(0, 0, 0)" stroke-width="1" fill="rgb(0, 0, 0)"/>
</svg>
```
> in browser

![sometext](https://image.ibb.co/k9XznU/Screen_Shot_2018_09_23_at_18_33_23.png)