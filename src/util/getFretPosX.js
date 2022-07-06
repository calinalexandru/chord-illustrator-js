export default function getFretPosX(margin, key, start) {
  return margin * (key - 1) + start;
}
