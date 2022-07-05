import getMaxFret from './getMaxFret';
import getMinFret from './getMinFret';

export default function getFretboardRange(fingering) {
  const out = [];
  let key = 1;
  const start = getMinFret(fingering);
  const end = getMaxFret(fingering);
  for (let i = start; i <= end; i += 1) {
    out.push(key);
    key += 1;
  }
  return out;
}
