'use strict';

const ChordDrawer = require('./chord/drawer/chord.drawer.js');

class Illustrator {
    constructor(elem) {
        if (elem)
            this.setContainer(elem)

        this.name = '';
        this.height = 440;
    }

    make(options) {
        options = options || {};

        this.name = options.name || 'oops';

        options['height'] = this.height;

        const chord = new ChordDrawer(this.container, options);
        return chord.drawChord();
    };

    setContainer(elem) {
        this.container = elem;
    }

    setHeight(height) {
        this.height = height;
    }
}

module.exports = Illustrator;
