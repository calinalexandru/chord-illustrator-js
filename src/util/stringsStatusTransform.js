import { STRINGS_STATUS_MAP } from '../constants';

export default function stringsStatusTransform(feed, status) {
  return feed
    .map((defaultStatus, key) =>
      status[key] ? STRINGS_STATUS_MAP[status[key]] : defaultStatus
    )
    .reverse();
}
