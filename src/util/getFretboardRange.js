import getMaxFret from './getMaxFret';
import getMinFret from './getMinFret';
import getArrayRange from './getArrayRange';

export default function getFretboardRange(fingering) {
  const start = getMinFret(fingering);
  const end = getMaxFret(fingering);
  return getArrayRange({ from: start, to: end });
}
