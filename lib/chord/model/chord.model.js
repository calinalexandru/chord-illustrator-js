class Chord {
    // { name: string, mutedStrings: array, fingering: array, height: number}
    constructor(name, mutedStrings, fingering) {
        this.name = name || Chord.mock()['name'];
        this.mutedStrings = mutedStrings || [];
        this.fingering = fingering || Chord.mock()['fingering'];
    }

    /**
     * Mock A minor
     * @returns {{name: string, fingering: *[]}}
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
                name: 'E',
                fingering: [
                    {fret: 2, string: 4},
                    {fret: 2, string: 5},
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
        ]
    }
}

module.exports = Chord;
