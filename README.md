# chord-illustrator [![NPM version][npm-image]][npm-url]

> SVG based library which illustrates finger positions of a guitar chord on a fretboard.\
> Blazingly fast and blazingly small\
> Minified: 1.6 kB\
> Minified + gzipped: 734 B

## Installation

```sh
$ npm install --save chord-illustrator
```

## Usage

> _illustrates B minor_

```js
import ChordIllustrator from 'chord-illustrator';

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

// insert it into any html element
ChordIllustrator.setContainer(document.body);
```

> in browser

![sometext](https://i.ibb.co/pzGZ1Db/Screen-Shot-2019-01-29-at-15-00-58.png)

> _the fretboard will expand automatically based on chord length_

## API docs

#### .setContainer(container: HTMLElement)

- set the container where output will be generated.

#### .setHeight(height: number)

- specify the SVG height, width will adjust automatically

#### .make({ name: string, fingering: array, mutedStrings: array, fretboardRange: object, labels: object })

- specify the chord options by passing an object. Only `fingering` property is mandatory, others are optional.

> ##### @param(name: string)
>
> Title displayed at the top. Ommit the property to hide. \
> ` name: 'Am'`
>
> ##### @param(fingering: array)
>
> Mandatory property detailing the chord fingering: \
> `fingering: [{ fret: 2, barre: { from: 1, to: 5 } }, { fret: 3, string: 2, finger: 2 }]`
>
> ##### @param(mutedStrings: array)
>
> Array of 6 items filled with ”yes/no/open”. If not specified, values will default to “no”. \
> ` mutedStrings: ['yes', 'no', 'no', 'no', 'no', 'open'],`
>
> ##### @param(fretboardRange: object)
>
> Fretboard will expand automatically based on chord length, you may override the generated freboard like this: \
> `fretboardRange: {from: 1, to: 12}`
>
> ##### @param(labels: object)
>
> Fret number label is shown at the bottom left. You can hide this label or customize the prefix: \
> `labels: { showFretNumber: true, fretNumberPrefix: 'fr' }`

## Support

Tested on Chrome.

## License

MIT © [Alexandru Calin](https://getpericles.com/)

> _inspired by [guitar-js](https://www.npmjs.com/package/guitar-js) (Fomin Sergey)_

[npm-image]: https://badge.fury.io/js/chord-illustrator.svg
[npm-url]: https://npmjs.org/package/chord-illustrator
