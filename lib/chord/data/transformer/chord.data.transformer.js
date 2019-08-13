class dt {
    static transform(data) {
        return {
            'title': data.name,
            'statusString': dt.reverseFillStringStatus(data.mutedStrings),
            'chord': data.fingering.map(finger => {
                let obj = {}
                obj['fret'] = Number(finger.fret)
                if (finger.barre)
                    obj['barre'] = {
                        from: Number(finger.barre.from),
                        to: Number(finger.barre.to)
                    }

                if (finger.string)
                    obj['string'] = Number(finger.string)

                return obj
            }),
            'firstFret': data.chordFirstFret || 1,
            'stringNum': data.stringNum || 6,
            'fretboardRange': data.fretboardRange || false
        };
    }

    static reverseFillStringStatus(opt) {

        // make “x” nuggets
        if (opt)
            opt = opt.concat(dt.initStrings(6 - opt.length));
        else
            opt = dt.initStrings();

        return opt.map(status => {
            if (status === 'yes')
                return 'closed';
            else
                return 'open';
        }).reverse();
    }

    static initStrings(length) {
        let buffer = [];
        for (let i = 0; i < (length || 6); i++) {
            buffer[i] = 'no';
        }

        return buffer;
    }
}

module.exports = dt;
