export default function getFingeringRangeFromBarre({ from = 0, to = 0 }) {
  return to > from
    ? Array.from(new Array(to - from + 1), (_, i) => i + from)
    : [];
}
