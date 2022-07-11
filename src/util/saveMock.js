import fs from 'fs';

export default function saveMock(name, data) {
  fs.writeFileSync(`./static/${name}.svg`, data);
}
