export default function getMaxFret(fingering = []) {
  return Math.max(3, ...fingering.map(finger => finger.fret));
}