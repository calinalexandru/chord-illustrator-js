import { GUITAR_STRINGS_STATUS, STRINGS_STATUS_MAP } from '../constants';
export default function stringsStatusTransform(status) {
  return GUITAR_STRINGS_STATUS.map((defaultStatus, key) => status[key] ? STRINGS_STATUS_MAP[status[key]] : defaultStatus).reverse();
}