export default function barreTransform(fingering = []) {
  const barreFind = fingering.find((finger) => !!finger.barre);
  if (!barreFind) return false;
  return { ...barreFind.barre, fret: barreFind.fret };
}
