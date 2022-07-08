export default function isLinearChord(fingering = []) {
  return fingering.every(({
    fret
  }, i, arr) => fret === arr[0].fret);
}