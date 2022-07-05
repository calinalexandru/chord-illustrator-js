import getMinFret from './getMinFret';

export default function fingeringTransform(fingering = []) {
  const min = getMinFret(fingering);
  const margin = min > 1 ? min - 1 : 0;
  return fingering.map((finger) => ({ ...finger, fret: finger.fret - margin }));
}
