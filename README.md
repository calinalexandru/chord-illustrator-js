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

> #Docs
> _the fretboard will expand automatically based on fret numbers_

#### .setContainer(HTMLElement)

- set the container where output will be generated.

#### .setHeight(height: number)

- specify the SVG height, width will adjust automatically

#### .make({ name: string, fingering: array, mutedStrings: array })

> ##### @param(name: string)
>
> chord name/title
>
> ##### @param(fingering: array)
>
> array of objects\
> eg: \
> `{ fret: 2, barre: { from: 1, to: 5 } }` \
> `{ fret: 3, string: 2, finger: 2 }`
>
> ##### @param(mutedStrings: array)
>
> from E4 to E6\
> array of max 6 items filled with ”yes/no/open”\
> if not specified, value will default to “no”
>
> ##### @param(fretboardRange: object)
>
> override fretboard range with object:\
> `{from: 1, to: 12}`

> ##### @param(labels: object)
>
> customize fret title\
> `{ showFretNumber = true, fretNumberPrefix = 'fr' }`

## License

MIT © [Alexandru Calin](https://getpericles.com/)

> _originally based on [guitar-js](https://www.npmjs.com/package/guitar-js) (Fomin Sergey)_

[npm-image]: https://badge.fury.io/js/chord-illustrator.svg
[npm-url]: https://npmjs.org/package/chord-illustrator
