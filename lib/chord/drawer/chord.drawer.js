'use strict';

const ChordData = require('../data/chord.data');
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
        this.htmlHeight = options.height ||  350;

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
        this.fontFamily = 'Courier';
        this.fontStyle = 'italic';
        this.fontSize = 12;

        // Guitar data
        const chordDataObj = new ChordData(options);
        this.data = chordDataObj.getData();
    }



    _drawSvg() {
        this.svg = this.svgobj.getNode('svg', {
            // disable width, use viewbox instead
            // 'width': this.svgWidth,
            'height': this.htmlHeight,
            'viewbox': '0 0 '+ this.svgWidth + ' ' + this.svgHeigth
        });
    };

    _drawRiff() {

        let opa6 = 'opacity: 0.3';

        // draw guitar neck rectangle
        this.svg.appendChild(this.svgobj.getNode('rect', {
            'x': this.riffStartX,
            'y': this.riffStartY,
            'height': this.riffHeight,
            'width': this.riffWidth,
            'stroke': this.colors.black,
            'stroke-width': 0,
            'style' : opa6,
            'fill': this.colors.white
        }));

        // draw metal delimiters
        for (let i = this.stringHorizontalMargin + this.riffStartX, length = this.riffStartX + this.riffWidth; i <= length; i += this.stringHorizontalMargin) {
            this.svg.appendChild(this.svgobj.getNode('line', {
                'x1': i,
                'y1': this.riffStartY - 3,
                'x2': i,
                'y2': this.riffHeight + this.riffStartY + 3,
                'stroke-width': 3,
                'stroke': '#472611',
            }));
        }

        let b = 23;

        this.svg.appendChild(this.svgobj.getNode('line', {
            'x1': this.riffStartX,
            'y1': b,
            'x2': this.riffStartX + this.riffWidth,
            'y2': b,
            'stroke': 'black',
            'style': opa6,
            'stroke-width': this.stringWidth,
        }));

        // draw strings
        for (let i = this.stringVerticalMargin + this.riffStartY, length = this.riffStartY + this.riffHeight; i <= length; i += this.stringVerticalMargin) {
            this.svg.appendChild(this.svgobj.getNode('line', {
                'x1': this.riffStartX,
                'y1': i,
                'x2': this.riffStartX + this.riffWidth,
                'y2': i,
                'stroke': this.colors.black,
                'style': opa6,
                'stroke-width': this.stringWidth,
            }));
        }
    };

    _drawStringStatus() {

        let opa = 'opacity: 0.3';

        for (let i = 0, length = this.data.statusString.length; i < length; i++) {
            switch (this.data.statusString[i]) {
                case 'open':
                    this.svg.appendChild(this.svgobj.getNode('circle', {
                        'cx': this.statusStringStartX + this.radiusStatusString,
                        'cy': this.riffStartY + this.stringVerticalMargin * i,
                        'r': this.radiusStatusString,
                        'stroke': this.colors.black,
                        'stroke-width': this.stringWidth,
                        'style': opa,
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
                        'style': opa,
                        'stroke-width': this.stringWidth
                    }));

                    this.svg.appendChild(this.svgobj.getNode('line', {
                        'x1': this.statusStringStartX + this.radiusStatusString * 2,
                        'y1': this.riffStartY - this.radiusStatusString + this.stringVerticalMargin * i,
                        'x2': this.statusStringStartX,
                        'y2': this.riffStartY + this.radiusStatusString + this.stringVerticalMargin * i,
                        'stroke': this.colors.black,
                        'style': opa,
                        'stroke-width': this.stringWidth
                    }));

                    break;
            }
        }
    };

    _drawClampString(fret, string, finger = 0) {
        let cx = this.riffStartX + this.stringHorizontalMargin / 2 + this.stringHorizontalMargin * (fret - 1);
        let cy = this.riffStartY + this.stringVerticalMargin * (string - 1);


        let dot = this.svgobj.getNode('circle', {
            'cx': cx,
            'cy': cy,
            'r': this.radiusClampString,
            'stroke': this.colors.black,
            'stroke-width': this.stringWidth,
            fill: this.colors.black,
        });
        this.svg.appendChild(dot);


        if (finger) {
            let fix = 3;
            const whichFinger = this.svgobj.getNode('text', {
                'x': cx - fix,
                'y': cy + fix,
                'font-size': '10',
                'font-family': 'Arial',
                'font-style': this.fontStyle,
                'fill': 'white'
            });

            whichFinger.textContent = ''+ finger;

            this.svg.appendChild(whichFinger);
        }
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

    _drawFretNumber(rootFret) {

        let fretNumStartX = 14;
        let fretNumMarginX = 60;
        let fretNumXFix = 5;

        for (let i = 0; i <= 2; i++) {
            let y = (this.riffStartY + this.data.stringNum * this.stringVerticalMargin) - fretNumXFix;

            let x = fretNumStartX;
            if (i !== 0)
                x = (fretNumMarginX * i) + fretNumStartX ;

            let opacity = 0.3;

            const textElement = this.svgobj.getNode('text', {
                'x': x,
                'y': y,
                'font-size': this.fontSize,
                'font-family': this.fontFamily,
                'font-style': this.fontStyle,
                'style': 'opacity: ' + (opacity * (i+1) || opacity),
                'fill': this.colors.black
            });

            textElement.textContent = 'fr' + rootFret;

            if (i === 0)
                this.svg.appendChild(textElement);
        }
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
        this.svgHeigth = this.svgHeigth + this.fontSize;

        if (this.data.title != null) {
            this.svgHeigth = this.svgHeigth + this.fontSize + this.margin;
            this.riffStartY = this.riffStartY + this.fontSize + this.margin;
        }

        this._drawSvg();
        this._drawRiff();
        this._drawStringStatus();

        for (let i = 0, length = this.data.chord.length; i < length; i++) {
            let item = this.data.chord[i];

            // TODO: refactor better "default 1 to 6 fretting// full barre"
            if (item.barre && Object.keys(item.barre).length === 0) {
                item.barre = {from: 1, to: 6};
            }

            switch (item.type) {
                case 'clamp':
                    this._drawClampString(item.fret, item.string, item.finger || 0);
                    break;
                case 'barre':
                    this._drawBarre(item.fret, item.barre.from, item.barre.to);
                    break;
            }
        }

        console.log('drawing: ', this.data);
        this._drawFretNumber(this.data.firstFret || 1);

        return this.svg;
    }
    
    
}
module.exports = ChordDrawer;
