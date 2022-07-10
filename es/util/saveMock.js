import fs from 'fs';
export default function saveMock(data) {
  fs.writeFileSync('mock.svg', data);
}