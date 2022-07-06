export default function getArrayRange({ from, to }) {
  const out = [];
  let key = 1;
  for (let i = from; i <= to; i += 1) {
    out.push(key);
    key += 1;
  }
  return out;
}
