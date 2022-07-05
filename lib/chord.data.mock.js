class self {
    constructor() {
        return [
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
                ],
                height: 100
            }
        ];
    }
}

module.exports = self;