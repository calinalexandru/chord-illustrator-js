# chord-illustrator [![NPM version][npm-image]][npm-url]

> SVG-based library, which illustrates finger positions of a guitar chord on a fretboard.

- Blazingly fast and blazingly small 🚀
- No dependencies
- Works on browser &amp; Node.js
- Minified: _2.3 kB_
- Minified + gzipped: _970 B_

## Installation

```sh
$ npm install --save chord-illustrator
```

## Usage in browser

> _illustrates B minor_

```js
import ChordIllustrator from 'chord-illustrator';

// insert it into any html element
ChordIllustrator.setContainer(document.body);

// or get output directly
const svg = ChordIllustrator.make({
  name: 'Bm',
  mutedStrings: ['yes'],
  fingering: [
    { fret: 2, barre: { from: 1, to: 5 } },
    { fret: 3, string: 2, finger: 2 },
    { fret: 4, string: 3, finger: 4 },
    { fret: 4, string: 4, finger: 3 },
  ],
});
console.log('HTML output', svg);
```

> looks like this

![sometext](https://i.ibb.co/pzGZ1Db/Screen-Shot-2019-01-29-at-15-00-58.png)

> _the fretboard will expand automatically based on chord length_

## Usage in Node.js

The library is tightly coupled with `window.document`. To use it on Node.js, you may want to import something like [jsdom](https://github.com/jsdom/jsdom).

```js
import { JSDOM } from 'jsdom';
import ChordIllustrator from 'chord-illustrator';

// create some html
const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);

// set missing dom
ChordIllustrator.setDocument(dom.window.document);

const svg = ChordIllustrator.make({
  name: 'C',
  mutedStrings: ['yes'],
  fingering: [
    { fret: 1, string: 2, finger: 1 },
    { fret: 2, string: 4, finger: 2 },
    { fret: 3, string: 5, finger: 3 },
  ],
});
console.log('HTML output', svg);
```

## API docs

#### .setContainer(container: HTMLElement)

- set the container where the output renders.

#### .setDocument(document: DOM)

- override the default `window.document` with your own.

#### .setHeight(height: number)

- specify the SVG height. The width will adjust automatically.

#### .make({ name: string, fingering: array, mutedStrings: array, fretboardRange: object, labels: object })

- specify the chord options by passing an object. Only `fingering` property is mandatory, and others are optional.

##### @param(name: string)

Title displayed at the top. Omit the property to hide.

```js
name: 'Am';
```

##### @param(fingering: array)

Mandatory property detailing the chord fingering:

```js
fingering: [
  { fret: 2, barre: { from: 1, to: 5 } },
  { fret: 3, string: 2, finger: 2 },
];
```

##### @param(mutedStrings: array)

Array of 6 items filled with ”yes/no/open”. If not specified, values will default to “no”.

```js
mutedStrings: ['yes', 'no', 'no', 'no', 'no', 'open'];
```

##### @param(fretboardRange: object)

Fretboard will expand automatically based on chord length. You may override the generated fretboard like this:

```js
fretboardRange: { from: 1, to: 12 }
```

##### @param(labels: object)

Fret number label is shown at the bottom left. You can hide this label or customize the prefix: \

```js
labels: {
  title: { style: { show: false, fill: 'blue', opacity: 1 } },
  fretNumber: { style: { show: false, fill: 'red', opacity: 1 } },
}
```

You can customize the whole SVG fretboard using this object.

```js
fretboard: {
  fret: { style: { stroke: 'red', fill: 'red' } },
  string: { style: { stroke: 'green', fill: 'green' } },
  neck: { style: { stroke: 'blue', fill: 'blue' } },
  barre: { style: { stroke: 'gray', fill: 'gray' } },
  finger: { style: { stroke: 'yellow', fill: 'yellow' } },
  fingerText: { style: { stroke: 'orange', fill: 'orange' } },
}
```

##### @param(vertical: boolean)

Display the chord vertically.

```js
vertical: true,
```

## Support

Tested on Chrome &amp; Node.js v17.6.0

## License

MIT © [Alexandru Calin](https://getpericles.com/)

> _inspired by [guitar-js](https://www.npmjs.com/package/guitar-js) (Fomin Sergey)_

[npm-image]: https://badge.fury.io/js/chord-illustrator.svg
[npm-url]: https://npmjs.org/package/chord-illustrator
