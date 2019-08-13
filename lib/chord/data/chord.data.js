'use strict';

const dt = require('./transformer/chord.data.transformer');

class ChordData {
    constructor(options) {
        this.options = options;
        // console.log('ChordData', this.options.fretboardRange)

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

		this.data = {
            title: null,
            statusString: null,
            chord: null,
            firstFret: null,
            stringNum: 6,
            rootFret: 1,
            chordLength: null,
			meta: null,
            fretboardStart: 0,
            fretboardEnd: 0
		}

        this.fretNum = 22;
        this.statusStringList = [null, 'open', 'closed'];

        this.setData(dt.transform(this.options));

    }

    setData(options) {
		// console.log('Chord.Data.setData(options)', options);
        if (typeof options !== 'object') {
            throw new Error('Wrong options type');
        }
        if ('title' in options) {
            this.data.title = String(options.title);
        }

        if ('rootFret' in options) {
            this.data.rootFret = options.rootFret;
        }

        if ('statusString' in options) {
            this.data.statusString = this._validateStringStatus(options.statusString);
        }

        if ('meta' in options) {
            this.data.meta = options.meta
        }

        this.data.firstFret = 1;

        if (options['fretboardRange'] && options['fretboardRange'] !== false) {
            this.data.fretboardStart = options.fretboardRange['start'] || 1
            this.data.firstFret = this.data.fretboardStart
            --this.data.fretboardStart

            this.data.fretboardEnd = options.fretboardRange['end'] || 12
            ++this.data.fretboardEnd

            // console.log('fretboardStart', this.data.fretboardStart)
            // console.log('fretboardEnd', this.data.fretboardEnd)
        }

        if ('chord' in options) {
            this.data.chord = this._validateChord(options.chord);

            let margin = 1
            if (options['fretboardRange'] !== false) {
                this.data.firstFret = this.data.fretboardStart+1
                margin = this.data.fretboardStart
            }

            if ((this.getFirstFretOfChord() > 2 || this.getFretsMaxInterval() > 4) && (!this.data.fretboardEnd || !this.data.fretboardStart)) {
                this.data.firstFret = this.getFirstFretOfChord()
                if (!this.data.fretboardEnd) {
                    margin = this.data.firstFret-1
                }
                for (let i =0; i < this.data.chord.length; i++) {
                  this.data.chord[i].fret = this.data.chord[i].fret-margin;
                }
            }

            this._filterChord();
        }

        this.data.chordLength = this.getFretsMaxInterval();

        // console.log('setData->data', this.data)
    };

    _validateStringStatus(statusString) {
        if (!Array.isArray(statusString)) {
            throw new Error('String status must be array');
        }

        if (statusString.length != this.data.stringNum) {
            throw new Error('Number of string must be equal ' + this.data.stringNum);
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
				let errorMsg = 'Wrong chord data'; 
				// console.log(chord)
                throw new Error(errorMsg);
            }
        }

        return chord;
    };


    _filterChord() {
        this.data.chord = this.data.chord.filter(function (obj) {
            if (obj.fret < this.data.firstFret + this.fretNum) {
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
        return string >= 1 && string <= this.data.stringNum;
    };

    //
    getFirstFretOfChord() {
        let fretsArr = this.data.chord.map(x => x.fret)
        return Math.min(...fretsArr)
    }

    getFretsMaxInterval() {
        let fretsArr = []
        for (let i = 0, length = this.data.chord.length; i < length; i++)
            fretsArr.push(this.data.chord[i].fret)

        const max = parseInt(Math.max(...fretsArr)) || 2
        const min = Math.min(...fretsArr)

        // console.log('getFretsMaxInterval->max', max)

        return max + 1;
    }

    getFretsInterval() {
        let fretsArr = []
        for (let i = 0, length = this.data.chord.length; i < length; i++)
            fretsArr.push(this.data.chord[i].fret)

        const max = Math.max(...fretsArr) + 1
        const min = Math.min(...fretsArr)

        return max - min;
    }

    getData() {
		return this.data;
    }
}

module.exports = ChordData;
