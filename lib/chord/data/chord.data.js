'use strict';

const dt = require('./transformer/chord.data.transformer');

class ChordData {
    constructor(options) {
        this.options = options;

        this.chordPatterns = [{
            'type': 'clamp',
            'fret': 'isNumber:isInteger',
            'string': 'isNumber:isInteger:inStringRange'
        }, {
            'type': 'barre',
            'fret': 'isNumber:isInteger',
            // 'barre': {
            //     'from': 'isNumber:isInteger:inStringRange',
            //     'to': 'isNumber:isInteger:inStringRange'
            // }
            barre: {}
        }];

        this.rootFret = 1;
        this.fretboardRange = {};
        this.fretboardStart = 0;
        this.fretboardEnd = 0;

        this.fretNum = 22;

        this.chordFirstFret = null;
        this.chord = null;
        this.chordLength = 3;


        this.stringNum = 6;
        this.statusStringList = [null, 'open', 'closed'];
        this.statusString = null;

        this._setData(dt.transform(this.options));

    }


    _setData(options) {
        // console.log('_setData(opt)', options);

        if (typeof options !== 'object') {
            throw new Error('Wrong options type');
        }

        if ('title' in options) {
            this.title = String(options.title);
        }

        if ('rootFret' in options) {
            this.rootFret = options.rootFret;
        }

        if ('statusString' in options) {
            this.statusString = this._validateStringStatus(options.statusString);
        }

        if ('fretboardRange' in options) {
            this.fretboardStart = options.fretboardRange['start'] || 1
            --this.fretboardStart

            this.fretboardEnd = options.fretboardRange['end'] || 12
            ++this.fretboardEnd
        }

        if ('chord' in options) {
            this.chord = this._validateChord(options.chord);

            this.chordFirstFret = 1;
            let margin = 1
            if (options.fretboardRange) {
                this.chordFirstFret = this.fretboardStart+1
                margin = this.fretboardStart
            }else {
                this.chordFirstFret = this.getFirstFretOfChord()
            }

            // if (this.getFretsInterval() >= 3 ) {
                for (let i =0; i < this.chord.length; i++) {
                    this.chord[i].fret = this.chord[i].fret-margin;
                }
            // }

            this._filterChord();
        }

        this.chordLength = this.getFretsMaxInterval();
    };

    _validateStringStatus(statusString) {
        if (!Array.isArray(statusString)) {
            throw new Error('String status must be array');
        }

        if (statusString.length != this.stringNum) {
            throw new Error('Number of string must be equal ' + this.stringNum);
        }

        for (let i = 0; i < statusString.length; i++) {
            if (this.statusStringList.indexOf(statusString[i]) == -1) {
                throw new Error('Wrong string status');
            }
        }

        return statusString;
    };

    _validateChord(chord) {
        for (let i = 0, chordLength = chord.length; i < chordLength; i++) {
            let isVerify = false;

            for (let j = 0, patternsLength = this.chordPatterns.length; j < patternsLength; j++) {
                if (this._compareWithPattern(chord[i], this.chordPatterns[j])) {
                    chord[i].type = this.chordPatterns[j].type;
                    isVerify = true;
                }
            }

            if (!isVerify) {
                throw new Error('Wrong chord data');
            }
        }

        return chord;
    };


    _filterChord() {
        this.chord = this.chord.filter(function (obj) {
            if (obj.fret < this.chordFirstFret + this.fretNum) {
                return obj;
            }
        }, this);
    };

    _compareWithPattern(chord, pattern) {
        for (let prop in pattern) {
            if (prop == 'type') {
                continue;
            }

            if (typeof chord[prop] === 'object' && typeof pattern[prop] === typeof pattern[prop]) {
                return this._compareWithPattern(chord[prop], pattern[prop]);
            }

            if (chord.hasOwnProperty(prop)) {
                var functions = pattern[prop].split(':');

                for (var i = 0, length = functions.length; i < length; i++) {
                    if (!this['_' + functions[i]](chord[prop])) {
                        return false;
                    }
                }
            } else {
                return false;
            }
        }

        return true;
    };

    _isNumber(num) {
        return !isNaN(parseFloat(num)) && isFinite(num);
    };

    _isInteger(num) {
        return (num ^ 0) === num;
    };

    _inStringRange(string) {
        return string >= 1 && string <= this.stringNum;
    };

    //
    getFirstFretOfChord() {
        let fretsArr = this.chord.map(x => x.fret)
        return Math.min(...fretsArr)
    }

    getFretsMaxInterval() {
        let fretsArr = []
        for (let i = 0, length = this.chord.length; i < length; i++)
            fretsArr.push(this.chord[i].fret)

        const max = Math.max(...fretsArr)
        const min = Math.min(...fretsArr)

        return max + 1;
    }

    getFretsInterval() {
        let fretsArr = []
        for (let i = 0, length = this.chord.length; i < length; i++)
            fretsArr.push(this.chord[i].fret)

        const max = Math.max(...fretsArr) + 1
        const min = Math.min(...fretsArr)

        return max - min;
    }

    getData() {
        return {
            'title': this.title,
            'statusString': this.statusString,
            'chord': this.chord,
            'firstFret': this.chordFirstFret,
            'stringNum': this.stringNum,
            'rootFret': this.rootFret,
            'chordLength': this.chordLength,
            'fretboardStart': this.fretboardStart,
            'fretboardEnd': this.fretboardEnd
        };
    }
}

module.exports = ChordData;
