# chord-illustrator [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
> SVG based library which illustrates finger positions of a guitar chord on a fretboard.


## Installation
```sh
$ npm install --save chord-illustrator
```

## Usage

>*illustrates B minor*
```js
// import chord-illustrator & xmldom
const ChordIllustrator = require('chord-illustrator');
const DOMParser = require('xmldom').DOMParser;

// prepare html objects
// https://www.w3.org/DOM/
const document = new DOMParser().parseFromString('<html></html>');

// 
const ci = new ChordIllustrator(document.createElement('div'))

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

console.log('HTML output', svg.toString());
```

> XML generated
```xhtml
<svg height="440" viewbox="0 0 215 141" xmlns="http://www.w3.org/2000/svg">
    <rect x="25" y="23" height="100" width="180" stroke="rgb(0, 0, 0)" stroke-width="0" style="opacity: 0.3"
          fill="rgb(255, 255, 255)"/>
    <line x1="85" y1="20" x2="85" y2="126" stroke-width="3" stroke="#472611"/>
    <line x1="145" y1="20" x2="145" y2="126" stroke-width="3" stroke="#472611"/>
    <line x1="205" y1="20" x2="205" y2="126" stroke-width="3" stroke="#472611"/>
    <line x1="25" y1="23" x2="205" y2="23" stroke="black" style="opacity: 0.3" stroke-width="1"/>
    <line x1="25" y1="43" x2="205" y2="43" stroke="rgb(0, 0, 0)" style="opacity: 0.3" stroke-width="1"/>
    <line x1="25" y1="63" x2="205" y2="63" stroke="rgb(0, 0, 0)" style="opacity: 0.3" stroke-width="1"/>
    <line x1="25" y1="83" x2="205" y2="83" stroke="rgb(0, 0, 0)" style="opacity: 0.3" stroke-width="1"/>
    <line x1="25" y1="103" x2="205" y2="103" stroke="rgb(0, 0, 0)" style="opacity: 0.3" stroke-width="1"/>
    <line x1="25" y1="123" x2="205" y2="123" stroke="rgb(0, 0, 0)" style="opacity: 0.3" stroke-width="1"/>
    <circle cx="15" cy="23" r="5" stroke="rgb(0, 0, 0)" stroke-width="1" style="opacity: 0.3"
            fill="rgb(255, 255, 255)"/>
    <circle cx="15" cy="43" r="5" stroke="rgb(0, 0, 0)" stroke-width="1" style="opacity: 0.3"
            fill="rgb(255, 255, 255)"/>
    <circle cx="15" cy="63" r="5" stroke="rgb(0, 0, 0)" stroke-width="1" style="opacity: 0.3"
            fill="rgb(255, 255, 255)"/>
    <circle cx="15" cy="83" r="5" stroke="rgb(0, 0, 0)" stroke-width="1" style="opacity: 0.3"
            fill="rgb(255, 255, 255)"/>
    <circle cx="15" cy="103" r="5" stroke="rgb(0, 0, 0)" stroke-width="1" style="opacity: 0.3"
            fill="rgb(255, 255, 255)"/>
    <line x1="10" y1="118" x2="20" y2="128" stroke="rgb(0, 0, 0)" style="opacity: 0.3" stroke-width="1"/>
    <line x1="20" y1="118" x2="10" y2="128" stroke="rgb(0, 0, 0)" style="opacity: 0.3" stroke-width="1"/>
    <circle cx="55" cy="23" r="5" stroke="rgb(0, 0, 0)" stroke-width="1" fill="rgb(0, 0, 0)"/>
    <circle cx="55" cy="103" r="5" stroke="rgb(0, 0, 0)" stroke-width="1" fill="rgb(0, 0, 0)"/>
    <rect x="50" y="23" height="80" width="10" stroke="rgb(0, 0, 0)" stroke-width="1" fill="rgb(0, 0, 0)"/>
    <circle cx="115" cy="43" r="5" stroke="rgb(0, 0, 0)" stroke-width="1" fill="rgb(0, 0, 0)"/>
    <text x="112" y="46" font-size="10" font-family="Arial" font-style="italic" fill="white">2</text>
    <circle cx="175" cy="63" r="5" stroke="rgb(0, 0, 0)" stroke-width="1" fill="rgb(0, 0, 0)"/>
    <text x="172" y="66" font-size="10" font-family="Arial" font-style="italic" fill="white">4</text>
    <circle cx="175" cy="83" r="5" stroke="rgb(0, 0, 0)" stroke-width="1" fill="rgb(0, 0, 0)"/>
    <text x="172" y="86" font-size="10" font-family="Arial" font-style="italic" fill="white">3</text>
    <text x="14" y="138" font-size="12" font-family="Courier" font-style="italic" font-weight="bold"
          style="opacity: 0.3" fill="rgb(0, 0, 0)">fr2
    </text>
</svg>
```
> in browser

![sometext](https://i.ibb.co/pzGZ1Db/Screen-Shot-2019-01-29-at-15-00-58.png)


> #Docs
> *the fretboard will expand automatically based on fret numbers*

#### .setContainer(HTMLElement)
- set the container where output will be generated.

#### .setHeight(height: number)
- specify the SVG height

#### .make(name: string, fingering: array, mutedStrings: array)

>##### @param(name: string)
> chord name/title

>##### @param(fingering: string)
>

>##### @param(mutedStrings: string)
>from E4 to E6\
array of max 6 items filled with ”yes/no”\
if not specified, value will default to “open”
#### release notes
> 1.2.4
- making fretboard dynamic length based on chord data


## License

Apache-2.0 © [Alexandru Calin](https://alexandrucalin.me/)
> _originally based on [guitar-js](https://www.npmjs.com/package/guitar-js) (Fomin Sergey)_


[npm-image]: https://badge.fury.io/js/chord-illustrator.svg
[npm-url]: https://npmjs.org/package/chord-illustrator
[travis-image]: https://travis-ci.org/calinalexandru/chord-illustrator.svg?branch=master
[travis-url]: https://travis-ci.org/calinalexandru/chord-illustrator
[daviddm-image]: https://david-dm.org/calinalexandru/chord-illustrator.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/calinalexandru/chord-illustrator
