'use strict';

const ChordDrawer = require.main.require('./src/chord/drawer/chord.drawer.js');

class Illustrator {
    static chord(element, options) {
        const chord = new ChordDrawer(element, options);
        return chord.drawChord();
    };
}

module.exports = Illustrator;
