"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.STRINGS_STATUS_MAP = exports.GUTTER_SMALL = exports.GUITAR_STRING_START = exports.GUITAR_STRING_MARGIN = exports.GUITAR_STRINGS_STATUS = exports.GUITAR_STRINGS = exports.GUITAR_NECK_START = exports.FRET_START = exports.FRET_MARGIN = exports.BARRE_START = exports.BARRE_MARGIN = void 0;
const GUTTER_SMALL = 3;
exports.GUTTER_SMALL = GUTTER_SMALL;
const GUITAR_STRING_START = 23;
exports.GUITAR_STRING_START = GUITAR_STRING_START;
const GUITAR_STRING_MARGIN = 20;
exports.GUITAR_STRING_MARGIN = GUITAR_STRING_MARGIN;
const GUITAR_NECK_START = 18;
exports.GUITAR_NECK_START = GUITAR_NECK_START;
const FRET_START = 85;
exports.FRET_START = FRET_START;
const FRET_MARGIN = 60;
exports.FRET_MARGIN = FRET_MARGIN;
const BARRE_START = 55;
exports.BARRE_START = BARRE_START;
const BARRE_MARGIN = 60;
exports.BARRE_MARGIN = BARRE_MARGIN;
const GUITAR_STRINGS = [0, 1, 2, 3, 4, 5];
exports.GUITAR_STRINGS = GUITAR_STRINGS;
const GUITAR_STRINGS_STATUS = ['closed', 'closed', 'closed', 'closed', 'closed', 'closed'];
exports.GUITAR_STRINGS_STATUS = GUITAR_STRINGS_STATUS;
const STRINGS_STATUS_MAP = {
  yes: 'muted',
  no: 'closed',
  open: 'open'
};
exports.STRINGS_STATUS_MAP = STRINGS_STATUS_MAP;