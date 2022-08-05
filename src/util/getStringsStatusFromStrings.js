import { GUITAR_STRINGS_STATUS } from '../constants';

export default function getStringsStatusFromStrings(strings = []) {
  return GUITAR_STRINGS_STATUS.map((stringStatus, key) =>
    strings.indexOf(key + 1) !== -1 ? 'closed' : 'open'
  ).reverse();
}
