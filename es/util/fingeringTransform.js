export default function fingeringTransform(fingering = [], margin = 0) {
  return fingering.map(finger => ({ ...finger,
    fret: finger.fret - margin
  }));
}