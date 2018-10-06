'use strict';

const ChordDrawer = require('./chord/drawer/chord.drawer.js');
const ChordModel = require('./chord/model/chord.model')

class Illustrator {
    constructor(elem) {
        if (elem)
            this.setContainer(elem);

        this.name = '';
        this.height = 440;
    }

    make(options) {
        if (typeof options === 'string') {
            options = ChordModel.mocks().filter(chord => { return chord.name === options })[0];

            if (!options) {
                // throw new Error(`Chord with name ${options} not found in local repo!`)
                options = ChordModel.mocks()[0];
            }
        }

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
