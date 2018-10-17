class Chord {
    // { name: string, mutedStrings: array, fingering: array, height: number}
    constructor(name, mutedStrings, fingering) {
        this.name = name || Chord.mock()['name'];
        this.mutedStrings = mutedStrings || [];
        this.fingering = fingering || Chord.mock()['fingering'];
    }

    /**
     * Mock A minor * @returns {{name: string, fingering: *[]}}
     */
    static mock() {
        return {
            name: 'Am',
            fingering: [
                {fret: 1, string: 2},
                {fret: 2, string: 3},
                {fret: 2, string: 4}
            ]
        }
    }

    static mocks() {
        return [
            {
                name: 'Am',
                fingering: [
                    {fret: 1, string: 2, finger: 1},
                    {fret: 2, string: 3, finger: 3},
                    {fret: 2, string: 4, finger: 2}
                ],
            },

            {
                name: 'A',
                fingering: [
                    {fret: 2, string: 2, finger: 1},
                    {fret: 2, string: 3, finger: 1},
                    {fret: 2, string: 4, finger: 1}
                ]
            },

            {
                name: 'Bm',
                mutedStrings: ['yes'],
                rootFret: 3,
                fingering: [
                    {
                        fret: 1,
                        barre: {from: 1, to: 5}
                    },
                    {fret: 2, string: 2, finger: 2},
                    {fret: 3, string: 3, finger: 4},
                    {fret: 3, string: 4, finger: 3}
                ]
            },

            {
                name: 'B',
                rootFret: 2,
                mutedStrings: ['yes'],
                fingering: [
                    {
                        fret: 1,
                        barre: {from: 1, to: 5}
                    },
                    {fret: 3, string: 2, finger: 1},
                    {fret: 3, string: 3, finger: 1},
                    {fret: 3, string: 4, finger: 1}
                ]
            },

            {
                name: 'Cm',
                mutedStrings: ['yes'],
                rootFret: 3,
                fingering: [
                    {
                        fret: 1,
                        barre: {from: 1, to: 5}
                    },
                    {string: 2, fret: 2, finger: 2},
                    {string: 3, fret: 3, finger: 4},
                    {string: 4, fret: 3, finger: 3}
                ]
            },

            {
                name: 'C',
                mutedStrings: ['yes'],
                fingering: [
                    {fret: 1, string: 2, finger: 1},
                    {fret: 2, string: 4, finger: 2},
                    {fret: 3, string: 5, finger: 3}
                ]
            },

            {
                name: 'Dm',
                mutedStrings: ['yes'],
                fingering: [
                    {string: 1, fret: 1, finger: 1},
                    {string: 2, fret: 3, finger: 3},
                    {string: 3, fret: 2, finger: 2}
                ]
            },

            {
                name: 'D',
                mutedStrings: ['yes'],
                rootFret: 2,
                fingering: [
                    {string: 1, fret: 2, finger: 2},
                    {string: 2, fret: 3, finger: 3},
                    {string: 3, fret: 2, finger: 1}
                ]
            },

            {
                name: 'Em',
                fingering: [
                    {fret: 2, string: 4, finger: 1},
                    {fret: 2, string: 5, finger: 1},
                ]
            },

            {
                name: 'E',
                rootFret: 2,
                fingering: [
                    {fret: 1, string: 3, finger: 1},
                    {fret: 2, string: 4, finger: 3},
                    {fret: 2, string: 5, finger: 2},
                ]
            },

            {
                name: 'Gm',
                fingering: [
                    {
                        fret: 3,
                        barre: {from: 1, to: 6}
                    },
                    {fret: 3, string: 4, finger: 4},
                    {fret: 3, string: 5, finger: 3}
                ]
            },

            {
                name: 'G',
                rootFret: 2,
                fingering: [
                    {fret: 3, string: 1, finger: 3},
                    {fret: 2, string: 5, finger: 1},
                    {fret: 3, string: 6, finger: 2},
                ]
            },

            {
                name: 'Fm',
                fingering: [
                    {
                        fret: 1,
                        barre: {from: 1, to: 6}
                    },
                    {fret: 3, string: 4, finger: 4},
                    {fret: 3, string: 5, finger: 3}
                ]
            },

            {
                name: 'F',
                fingering: [
                    {
                        fret: 1,
                        barre: {}
                    },
                    {fret: 2, string: 3, finger: 1},
                    {fret: 3, string: 4, finger: 3},
                    {fret: 3, string: 5, finger: 2}
                ]
            },
        ]
    }
}

module.exports = Chord;
