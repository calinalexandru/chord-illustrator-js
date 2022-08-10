import { STRINGS_STATUS_MAP } from '../constants';

export default function stringsStatusTransform(strings, status) {
  return strings
    .map((defaultStatus, key) =>
      status[key] ? STRINGS_STATUS_MAP[status[key]] : defaultStatus
    )
    .reverse();
}
