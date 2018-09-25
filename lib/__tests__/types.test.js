const ChordIllustrator = require('../index.js');
const ci = new ChordIllustrator();

describe('ChordIllustrator', () => {

    test('is not null', () => {
        expect(typeof ChordIllustrator).toBe('function');
    });

    test('has make', () => {
        expect(typeof ci.make).toBe('function');
    });

    test('has setContainer', () => {
        expect(typeof ci.setContainer).toBe('function');
    });


});

