export default function getArrayRange({ from, to }) {
  return Array.from({length: to - from + 1}, (_, i) => i + 1);
}
