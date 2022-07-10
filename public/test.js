import ChordIllustrator from '../src/index';

// ChordIllustrator.setHeight(128);
ChordIllustrator.setContainer(document.body);
ChordIllustrator.make({
  name: 'Bm',
  mutedStrings: ['yes'],
  fingering: [
    { fret: 2, barre: { from: 1, to: 5 } },
    { fret: 3, string: 2, finger: 2 },
    { fret: 4, string: 3, finger: 3 },
    { fret: 4, string: 4, finger: 4 },
  ],
});
