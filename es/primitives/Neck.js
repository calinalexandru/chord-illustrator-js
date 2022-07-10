/* eslint-disable no-nested-ternary */

/* eslint-disable-next-line */
import { createElement, createFragment } from '../jsx';
import { GUITAR_NECK_START, GUITAR_STRING_MARGIN, GUITAR_STRING_START } from '../constants';
import calculatePosition from '../util/calculatePosition';
export default function Neck({
  stringsStatus = []
}) {
  return stringsStatus.map((status, key) => status !== 'closed' ? status === 'open' ? createElement("circle", {
    cx: "15",
    cy: calculatePosition(GUITAR_STRING_MARGIN, key, GUITAR_STRING_START),
    r: "5",
    stroke: "rgb(0, 0, 0)",
    strokeWidth: "1",
    style: {
      opacity: 0.3
    },
    fill: "rgb(255, 255, 255)"
  }) : createElement(createFragment, null, createElement("line", {
    x1: "10",
    y1: calculatePosition(GUITAR_STRING_MARGIN, key, GUITAR_NECK_START),
    x2: "20",
    y2: calculatePosition(GUITAR_STRING_MARGIN, key, GUITAR_NECK_START) + 10,
    stroke: "rgb(0, 0, 0)",
    style: {
      opacity: 0.3
    },
    strokeWidth: "1"
  }), createElement("line", {
    x1: "20",
    y1: calculatePosition(GUITAR_STRING_MARGIN, key, GUITAR_NECK_START),
    x2: "10",
    y2: calculatePosition(GUITAR_STRING_MARGIN, key, GUITAR_NECK_START) + 10,
    stroke: "rgb(0, 0, 0)",
    style: {
      opacity: 0.3
    },
    strokeWidth: "1"
  })) : false);
}