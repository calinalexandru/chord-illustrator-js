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
                    {fret: 1, string: 2},
                    {fret: 2, string: 3},
                    {fret: 2, string: 4}
                ]
            },

            {
                name: 'A',
                fingering: [
                    {fret: 2, string: 2},
                    {fret: 2, string: 3},
                    {fret: 2, string: 4}
                ]
            },

            {
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
            },

            {
                name: 'B',
                mutedStrings: ['yes'],
                fingering: [
                    {
                        fret: 1,
                        barre: {from: 1, to: 5}
                    },
                    {fret: 3, string: 2},
                    {fret: 3, string: 3},
                    {fret: 3, string: 4}
                ]
            },

            {
                name: 'Cm',
                mutedStrings: ['yes'],
                fingering: [
                    {
                        fret: 3,
                        barre: {from: 1, to: 5}
                    },
                    {fret: 4, string: 2},
                    {fret: 5, string: 3},
                    {fret: 5, string: 4}
                ]
            },

            {
                name: 'C',
                mutedStrings: ['yes'],
                fingering: [
                    {fret: 1, string: 2},
                    {fret: 2, string: 4},
                    {fret: 3, string: 5}
                ]
            },

            {
                name: 'Dm',
                mutedStrings: ['yes'],
                fingering: [
                    {fret: 3, string: 2},
                    {fret: 3, string: 3},
                    {fret: 3, string: 4}
                ]
            },

            {
                name: 'D',
                mutedStrings: ['yes'],
                fingering: [
                    {fret: 3, string: 2},
                    {fret: 3, string: 3},
                    {fret: 3, string: 4}
                ]
            },

            {
                name: 'Em',
                fingering: [
                    {fret: 2, string: 4},
                    {fret: 2, string: 5},
                ]
            },

            {
                name: 'E',
                fingering: [
                    {fret: 1, string: 3},
                    {fret: 2, string: 4},
                    {fret: 2, string: 5},
                ]
            },

            {
                name: 'Gm',
                mutedStrings: ['yes'],
                fingering: [
                    {
                        fret: 3,
                        barre: {from: 1, to: 5}
                    },
                    {fret: 4, string: 2},
                    {fret: 5, string: 3},
                    {fret: 5, string: 4}
                ]
            },

            {
                name: 'G',
                fingering: [
                    {fret: 2, string: 5},
                    {fret: 3, string: 6},
                    {fret: 3, string: 1},
                ]
            },

            {
                name: 'Fm',
                mutedStrings: ['yes'],
                fingering: [
                    {
                        fret: 1,
                        barre: {from: 1, to: 5}
                    },
                    {fret: 3, string: 5},
                    {fret: 3, string: 6}
                ]
            },

            {
                name: 'F',
                mutedStrings: ['yes'],
                fingering: [
                    {
                        fret: 1,
                        barre: {from: 1, to: 5}
                    },
                    {fret: 2, string: 3},
                    {fret: 3, string: 4},
                    {fret: 3, string: 5}
                ]
            },
        ]
    }
}

module.exports = Chord;
