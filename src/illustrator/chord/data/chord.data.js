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
            'barre': {
                'from': 'isNumber:isInteger:inStringRange',
                'to': 'isNumber:isInteger:inStringRange'
            }
        }];

        this.fretNum = 3;

        this.chordFirstFret = null;
        this.chord = null;

        this.stringNum = 6;
        this.statusStringList = [null, 'open', 'closed'];
        this.statusString = null;

        this._setData(this.options);

    }

    _setData(options) {
        if (typeof options !== 'object') {
            throw new Error('Wrong options type');
        }

        if ('title' in options) {
            this.title = String(options.title);
        }

        if ('statusString' in options) {
            this.statusString = this._validateStringStatus(options.statusString);
        }

        if ('chord' in options) {
            this.chord = this._validateChord(options.chord);

            this.chordFirstFret = this.getFirstFretOfChord();

            this._filterChord();
        }
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

    getFirstFretOfChord() {
        let firstFret = null;

        for (var i = 0, length = this.chord.length; i < length; i++) {
            if (this.chord[i].fret < firstFret || firstFret == null) {
                firstFret = this.chord[i].fret;
            }
        }

        return firstFret;
    };

    getData() {
        return {
            'title': this.title,
            'statusString': this.statusString,
            'chord': this.chord,
            'firstFret': this.chordFirstFret,
            "stringNum": this.stringNum
        };
    };

}
module.exports = ChordData;
