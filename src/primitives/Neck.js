import { createElement, createFragment } from '../fake-react';
// import { createElement, createFragment } from 'react';

export default function Neck() {
  return (
    <>
      <circle
        cx="15"
        cy="23"
        r="5"
        stroke="rgb(0, 0, 0)"
        strokeWidth="1"
        style={{ opacity: 0.3 }}
        fill="rgb(255, 255, 255)"
      />
      <circle
        cx="15"
        cy="43"
        r="5"
        stroke="rgb(0, 0, 0)"
        strokeWidth="1"
        style={{ opacity: 0.3 }}
        fill="rgb(255, 255, 255)"
      />
      <circle
        cx="15"
        cy="63"
        r="5"
        stroke="rgb(0, 0, 0)"
        strokeWidth="1"
        style={{ opacity: 0.3 }}
        fill="rgb(255, 255, 255)"
      />
      <circle
        cx="15"
        cy="83"
        r="5"
        stroke="rgb(0, 0, 0)"
        strokeWidth="1"
        style={{ opacity: 0.3 }}
        fill="rgb(255, 255, 255)"
      />
      <circle
        cx="15"
        cy="103"
        r="5"
        stroke="rgb(0, 0, 0)"
        strokeWidth="1"
        style={{ opacity: 0.3 }}
        fill="rgb(255, 255, 255)"
      />
      <line
        x1="10"
        y1="118"
        x2="20"
        y2="128"
        stroke="rgb(0, 0, 0)"
        style={{ opacity: 0.3 }}
        strokeWidth="1"
      />
      <line
        x1="20"
        y1="118"
        x2="10"
        y2="128"
        stroke="rgb(0, 0, 0)"
        style={{ opacity: 0.3 }}
        strokeWidth="1"
      />
    </>
  );
}
