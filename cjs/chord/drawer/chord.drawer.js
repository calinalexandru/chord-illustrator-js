'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var ChordData = require('../data/chord.data');

var DOMParser = require('xmldom').DOMParser;

var document = new DOMParser().parseFromString('<html></html>');

var SvgObj = /*#__PURE__*/function () {
  function SvgObj() {
    _classCallCheck(this, SvgObj);

    this.url = 'http://www.w3.org/2000/svg';
  }

  _createClass(SvgObj, [{
    key: "getNode",
    value: function getNode(type, attrs) {
      var node = document.createElementNS(this.url, type);

      for (var attr in attrs) {
        node.setAttributeNS(null, attr, attrs[attr]);
      }

      return node;
    }
  }]);

  return SvgObj;
}();

var ChordDrawer = /*#__PURE__*/function () {
  function ChordDrawer(element, options) {
    _classCallCheck(this, ChordDrawer);

    // Element
    this.element = element; //Margin

    this.margin = 5;
    this.svgobj = new SvgObj(); // Svg

    this.svg = null;
    this.svgWidth = 215;
    this.svgHeigth = 112;
    this.htmlHeight = options.height || 350; // Riff

    this.riffStartX = 25;
    this.riffStartY = 6; // this.riffWidth = 180;

    this.riffWidth = 280;
    this.riffHeight = 100;
    this.stringWidth = 1;
    this.stringVerticalMargin = 20;
    this.stringHorizontalMargin = 60; // String status

    this.statusStringStartX = 10;
    this.radiusStatusString = 5; // Clamp string

    this.radiusClampString = 5; // Colors

    this.colors = {
      white: 'rgb(255, 255, 255)',
      black: 'rgb(0, 0, 0)'
    }; //Font

    this.fontFamily = 'Courier';
    this.fontStyle = 'italic';
    this.fontSize = 12; // Guitar data

    var chordDataObj = new ChordData(options);
    this.data = chordDataObj.getData();
    var fretboardRange = this.data.chordLength;

    if (this.data.fretboardEnd) {
      fretboardRange = this.data.fretboardEnd;
    } // fretboardRange = 12


    this.riffWidth = fretboardRange * this.stringHorizontalMargin;
    var svgWidthBuffer = this.riffWidth - this.stringHorizontalMargin / 2;

    if (svgWidthBuffer > this.svgWidth) {
      this.svgWidth = svgWidthBuffer;
    }
  }

  _createClass(ChordDrawer, [{
    key: "_drawSvg",
    value: function _drawSvg() {
      this.svg = this.svgobj.getNode('svg', {
        // disable width, use viewbox instead
        // 'width': this.svgWidth,
        'height': this.htmlHeight,
        'viewbox': '0 0 ' + this.svgWidth + ' ' + this.svgHeigth
      });
    }
  }, {
    key: "_drawRiff",
    value: function _drawRiff() {
      var opa6 = 'opacity: 0.3'; // draw guitar neck rectangle

      this.svg.appendChild(this.svgobj.getNode('rect', {
        'x': this.riffStartX,
        'y': this.riffStartY,
        'height': this.riffHeight,
        'width': this.riffWidth,
        'stroke': this.colors.black,
        'stroke-width': 0,
        'style': opa6,
        'fill': this.colors.white
      })); // draw metal delimiters

      for (var i = this.stringHorizontalMargin + this.riffStartX, length = this.riffStartX + this.riffWidth; i <= length; i += this.stringHorizontalMargin) {
        this.svg.appendChild(this.svgobj.getNode('line', {
          'x1': i,
          'y1': this.riffStartY - 3,
          'x2': i,
          'y2': this.riffHeight + this.riffStartY + 3,
          'stroke-width': 3,
          'stroke': '#472611'
        }));
      }

      var b = 23;
      this.svg.appendChild(this.svgobj.getNode('line', {
        'x1': this.riffStartX,
        'y1': b,
        'x2': this.riffStartX + this.riffWidth,
        'y2': b,
        'stroke': 'black',
        'style': opa6,
        'stroke-width': this.stringWidth
      })); // draw strings

      for (var _i = this.stringVerticalMargin + this.riffStartY, _length = this.riffStartY + this.riffHeight; _i <= _length; _i += this.stringVerticalMargin) {
        this.svg.appendChild(this.svgobj.getNode('line', {
          'x1': this.riffStartX,
          'y1': _i,
          'x2': this.riffStartX + this.riffWidth,
          'y2': _i,
          'stroke': this.colors.black,
          'style': opa6,
          'stroke-width': this.stringWidth
        }));
      }
    }
  }, {
    key: "_drawStringStatus",
    value: function _drawStringStatus() {
      var opa = 'opacity: 0.3';

      for (var i = 0, length = this.data.statusString.length; i < length; i++) {
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
    }
  }, {
    key: "_drawClampString",
    value: function _drawClampString(fret, string) {
      var finger = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      // console.log('_drawCampString', fret, string)
      var cx = this.riffStartX + this.stringHorizontalMargin / 2 + this.stringHorizontalMargin * (fret - 1);
      var cy = this.riffStartY + this.stringVerticalMargin * (string - 1);
      var dot = this.svgobj.getNode('circle', {
        'cx': cx,
        'cy': cy,
        'r': this.radiusClampString,
        'stroke': this.colors.black,
        'stroke-width': this.stringWidth,
        fill: this.colors.black
      });
      this.svg.appendChild(dot);

      if (finger) {
        var fix = 3;
        var whichFinger = this.svgobj.getNode('text', {
          'x': cx - fix,
          'y': cy + fix,
          'font-size': '10',
          'font-family': 'Arial',
          'font-style': this.fontStyle,
          'fill': 'white'
        });
        whichFinger.textContent = '' + finger;
        this.svg.appendChild(whichFinger);
      }
    }
  }, {
    key: "_drawBarre",
    value: function _drawBarre(fret, from, to) {
      var rootFret = 1;

      this._drawClampString(fret, from);

      this._drawClampString(fret, to);

      if (to < from) {
        var temp = to;
        to = from;
        from = temp;
      }

      this.svg.appendChild(this.svgobj.getNode('rect', {
        'x': this.riffStartX + this.stringHorizontalMargin / 2 - this.radiusClampString + this.stringHorizontalMargin * (fret - rootFret),
        'y': this.riffStartY + this.stringVerticalMargin * (from - 1),
        'height': this.stringVerticalMargin * (to - 1),
        'width': this.radiusClampString * 2,
        'stroke': this.colors.black,
        'stroke-width': this.stringWidth,
        'fill': this.colors.black
      }));
    }
  }, {
    key: "_drawFretNumber",
    value: function _drawFretNumber(rootFret) {
      var fretNumStartX = 14;
      var fretNumMarginX = 60;
      var fretNumXFix = 5;

      for (var i = 0; i <= 2; i++) {
        var y = this.riffStartY + this.data.stringNum * this.stringVerticalMargin - fretNumXFix;
        var x = fretNumStartX;
        if (i !== 0) x = fretNumMarginX * i + fretNumStartX; // let opacity = 0.3;

        var textElement = this.svgobj.getNode('text', {
          'x': x,
          'y': y,
          'font-size': this.fontSize,
          'font-family': this.fontFamily,
          'font-style': this.fontStyle,
          'font-weight': 'bold',
          // 'style': 'opacity: ' + (opacity * (i+1) || opacity),
          'fill': this.colors.black
        });
        textElement.textContent = 'fr' + rootFret;
        if (i === 0) this.svg.appendChild(textElement);
      }
    }
  }, {
    key: "_drawTitle",
    value: function _drawTitle() {
      var textElement = this.svgobj.getNode('text', {
        'x': this.riffStartX + this.riffWidth / 2,
        'y': this.riffStartY - this.radiusStatusString - this.margin,
        'font-family': this.fontFamily,
        'fill': this.colors.black,
        'text-anchor': 'middle'
      });
      textElement.textContent = this.data.title;
      this.svg.appendChild(textElement);
    }
  }, {
    key: "drawChord",
    value: function drawChord() {
      this.svgHeigth = this.svgHeigth + this.fontSize;

      if (this.data.title != null) {
        this.svgHeigth = this.svgHeigth + this.fontSize + this.margin;
        this.riffStartY = this.riffStartY + this.fontSize + this.margin;
      }

      this._drawSvg();

      this._drawRiff();

      this._drawStringStatus();

      for (var i = 0, length = this.data.chord.length; i < length; i++) {
        var item = this.data.chord[i]; // TODO: refactor better "default 1 to 6 fretting// full barre"

        if (item.barre && Object.keys(item.barre).length === 0) {
          item.barre = {
            from: 1,
            to: 6
          };
        }

        switch (item.type) {
          case 'clamp':
            this._drawClampString(item.fret, item.string, item.finger || 0);

            break;

          case 'barre':
            this._drawBarre(item.fret, item.barre.from, item.barre.to);

            break;
        }
      } // console.log('drawing: ', this.data);


      this._drawFretNumber(this.data.firstFret || 1);

      this._drawTitle();

      return this.svg;
    }
  }]);

  return ChordDrawer;
}();

module.exports = ChordDrawer;