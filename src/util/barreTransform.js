export default function barreTransform(fingering = []) {
  const barreFind = fingering.find((finger) => !!finger.barre);
  return { ...barreFind.barre, fret: barreFind.fret };
}
