/* eslint-disable no-nested-ternary */
/* eslint-disable-next-line */
import { createElement, createFragment } from '../jsx';
import {
  GUITAR_NECK_START,
  GUITAR_STRING_MARGIN,
  GUITAR_STRING_START,
} from '../constants';
import calculatePosition from '../util/calculatePosition';

export default function Neck({ style = {}, vertical, stringsStatus = [] }) {
  const xNeck = 15;
  const x1 = 10;
  const x2 = 20;
  let y1;
  let y2;
  let yNeck;
  return stringsStatus.map((status, key) => {
    yNeck = calculatePosition(GUITAR_STRING_MARGIN, key, GUITAR_STRING_START);
    y1 = calculatePosition(GUITAR_STRING_MARGIN, key, GUITAR_NECK_START);
    y2 = calculatePosition(GUITAR_STRING_MARGIN, key, GUITAR_NECK_START) + 10;
    return status !== 'closed' ? (
      status === 'open' ? (
        <circle
          data-name="neck-item-open-string"
          cx={vertical ? yNeck : xNeck}
          cy={vertical ? xNeck : yNeck}
          r="5"
          stroke="rgb(0, 0, 0)"
          strokeWidth="1"
          style={{ opacity: 0.3, ...style }}
          fill="rgb(255, 255, 255)"
        />
      ) : (
        <g data-name="neck-item-muted-string">
          <line
            data-name="neck-item-muted-string-line-1"
            x1={vertical ? y1 : x1}
            y1={vertical ? x1 : y1}
            x2={vertical ? y2 : x2}
            y2={vertical ? x2 : y2}
            stroke="rgb(0, 0, 0)"
            style={{ opacity: 0.3, ...style }}
            strokeWidth="1"
          />
          <line
            data-name="neck-item-muted-string-line-2"
            x1={vertical ? y1 : x2}
            y1={vertical ? x2 : y1}
            x2={vertical ? y2 : x1}
            y2={vertical ? x1 : y2}
            stroke="rgb(0, 0, 0)"
            style={{ opacity: 0.3, ...style }}
            strokeWidth="1"
          />
        </g>
      )
    ) : (
      false
    );
  });
}
