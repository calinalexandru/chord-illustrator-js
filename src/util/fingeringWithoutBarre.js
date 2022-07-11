export default function fingeringWithoutBarre(fingering = []) {
  return fingering.filter((finger) => !finger.barre);
}
