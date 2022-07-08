export default function getMinFret(fingering = []) {
  return Math.min(...fingering.map(finger => finger.fret));
}