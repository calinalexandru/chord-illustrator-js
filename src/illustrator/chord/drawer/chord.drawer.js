const ChordData = require.main.require('./illustrator/chord/data/chord.data');
const DOMParser = require('xmldom').DOMParser;

const document = new DOMParser().parseFromString('<html></html>');

class SvgObj {
    constructor() {
        this.url = 'http://www.w3.org/2000/svg';
    }

    getNode (type, attrs) {
        const node = document.createElementNS(this.url, type);

        for (let attr in attrs)
            node.setAttributeNS(null, attr, attrs[attr]);

        return node;
    }
}

class ChordDrawer {
    constructor(element, options) {
        // Element
        this.element = element;

        //Margin
        this.margin = 5;

        this.svgobj = new SvgObj();
        
        // Svg
        this.svg = null;
        this.svgWidth = 215;
        this.svgHeigth = 112;

        // Riff
        this.riffStartX = 25;
        this.riffStartY = 6;
        this.riffWidth = 180;
        this.riffHeight = 100;
        this.stringWidth = 1;
        this.stringVerticalMargin = 20;
        this.stringHorizontalMargin = 60;

        // String status
        this.statusStringStartX = 10;
        this.radiusStatusString = 5;

        // Clamp string
        this.radiusClampString = 5;

        // Colors
        this.colors = {
            white: 'rgb(255, 255, 255)',
            black: 'rgb(0, 0, 0)'
        };

        //Font
        this.fontFamily = 'Tahoma';
        this.fontSize = 16;

        // Guitar data
        const chordDataObj = new ChordData(options);
        this.data = chordDataObj.getData();
    }



    _drawSvg(){
        this.svg = this.svgobj.getNode('svg', {
            'width': this.svgWidth,
            'height': this.svgHeigth
        });
    };

    _drawRiff() {
        this.svg.appendChild(this.svgobj.getNode('rect', {
            'x': this.riffStartX,
            'y': this.riffStartY,
            'height': this.riffHeight,
            'width': this.riffWidth,
            'stroke': this.colors.black,
            'stroke-width': this.stringWidth,
            'fill': this.colors.white
        }));

        for (let i = this.stringHorizontalMargin + this.riffStartX, length = this.riffStartX + this.riffWidth; i <= length; i += this.stringHorizontalMargin) {
            this.svg.appendChild(this.svgobj.getNode('line', {
                'x1': i,
                'y1': this.riffStartY,
                'x2': i,
                'y2': this.riffHeight + this.riffStartY,
                'stroke': this.colors.black,
                'stroke-width': this.stringWidth
            }));
        }

        for (let i = this.stringVerticalMargin + this.riffStartY, length = this.riffStartY + this.riffHeight; i <= length; i += this.stringVerticalMargin) {
            this.svg.appendChild(this.svgobj.getNode('line', {
                'x1': this.riffStartX,
                'y1': i,
                'x2': this.riffStartX + this.riffWidth,
                'y2': i,
                'stroke': this.colors.black,
                'stroke-width': this.stringWidth
            }));
        }
    };

    _drawStringStatus() {
        for (let i = 0, length = this.data.statusString.length; i < length; i++) {
            switch (this.data.statusString[i]) {
                case 'open':
                    this.svg.appendChild(this.svgobj.getNode('circle', {
                        'cx': this.statusStringStartX + this.radiusStatusString,
                        'cy': this.riffStartY + this.stringVerticalMargin * i,
                        'r': this.radiusStatusString,
                        'stroke': this.colors.black,
                        'stroke-width': this.stringWidth,
                        fill: this.colors.white
                    }));

                    break;
                case 'closed':
                    this.svg.appendChild(this.svgobj.getNode('line', {
                        'x1': this.statusStringStartX,
                        'y1': this.riffStartY - this.radiusStatusString + this.stringVerticalMargin * i,
                        'x2': this.statusStringStartX + this.radiusStatusString * 2,
                        'y2': this.riffStartY + this.radiusStatusString + this.stringVerticalMargin * i,
                        'stroke': this.colors.black,
                        'stroke-width': this.stringWidth
                    }));

                    this.svg.appendChild(this.svgobj.getNode('line', {
                        'x1': this.statusStringStartX + this.radiusStatusString * 2,
                        'y1': this.riffStartY - this.radiusStatusString + this.stringVerticalMargin * i,
                        'x2': this.statusStringStartX,
                        'y2': this.riffStartY + this.radiusStatusString + this.stringVerticalMargin * i,
                        'stroke': this.colors.black,
                        'stroke-width': this.stringWidth
                    }));

                    break;
            }
        }
    };

    _drawClampString(fret, string) {
        this.svg.appendChild(this.svgobj.getNode('circle', {
            'cx': this.riffStartX + this.stringHorizontalMargin / 2 + this.stringHorizontalMargin * (fret - this.data.firstFret),
            'cy': this.riffStartY + this.stringVerticalMargin * (string - 1),
            'r': this.radiusClampString,
            'stroke': this.colors.black,
            'stroke-width': this.stringWidth,
            fill: this.colors.black
        }));
    };

    _drawBarre(fret, from, to) {
        this._drawClampString(fret, from);
        this._drawClampString(fret, to);

        if (to < from) {
            const temp = to;
            to = from;
            from = temp;
        }

        this.svg.appendChild(this.svgobj.getNode('rect', {
            'x': this.riffStartX + this.stringHorizontalMargin / 2 - this.radiusClampString + this.stringHorizontalMargin * (fret - this.data.firstFret),
            'y': this.riffStartY + this.stringVerticalMargin * (from - 1),
            'height': this.stringVerticalMargin * (to - 1),
            'width': this.radiusClampString * 2,
            'stroke': this.colors.black,
            'stroke-width': this.stringWidth,
            'fill': this.colors.black
        }));
    };

    _drawFretNumber(text) {
        const textElement = this.svgobj.getNode('text', {
            'x': this.riffStartX,
            'y': this.riffStartY + this.data.stringNum * this.stringVerticalMargin,
            'font-family': this.fontFamily,
            'fill': this.colors.black
        });

        textElement.textContent = text;

        this.svg.appendChild(textElement);
    };

    _drawTitle() {
        const textElement = this.svgobj.getNode('text', {
            'x': this.riffStartX + this.riffWidth / 2,
            'y': this.riffStartY - this.radiusStatusString - this.margin,
            'font-family': this.fontFamily,
            'fill': this.colors.black,
            'text-anchor': 'middle'
        });

        textElement.textContent = this.data.title;

        this.svg.appendChild(textElement);
    };

    drawChord() {
        if (this.data.firstFret > 1) {
            this.svgHeigth = this.svgHeigth + this.fontSize;
        }

        if (this.data.title != null) {
            this.svgHeigth = this.svgHeigth + this.fontSize + this.margin;
            this.riffStartY = this.riffStartY + this.fontSize + this.margin;
        }

        this._drawSvg();
        this._drawRiff();
        this._drawStringStatus();

        for (let i = 0, length = this.data.chord.length; i < length; i++) {
            switch (this.data.chord[i].type) {
                case 'clamp':
                    this._drawClampString(this.data.chord[i].fret, this.data.chord[i].string);
                    break;
                case 'barre':
                    this._drawBarre(this.data.chord[i].fret, this.data.chord[i].barre.from, this.data.chord[i].barre.to);
                    break;
            }
        }

        return this.svg;
    }
    
    
}
module.exports = ChordDrawer;
