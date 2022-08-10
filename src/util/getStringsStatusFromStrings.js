export default function getStringsStatusFromStrings(status = [], strings = []) {
  return status
    .map((_, key) => (strings.indexOf(key + 1) !== -1 ? 'closed' : 'open'))
    .reverse();
}
