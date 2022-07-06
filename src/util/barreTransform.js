export default function barreTransform(fingering = []) {
  return fingering.find((finger) => !!finger.barre)?.[0];
}
