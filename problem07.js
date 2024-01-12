// * * * *
// *     *
// *     *
// *     *
// * * * *

// Make ths hollow rectangle pattern

const rows = 5;
const cols = 4;
let start = '';

for (let i = 1; i <= rows; i++) {
  for (let j = 1; j <= cols; j++) {
    if (j == 1 || j == cols) {
      start += '*';
    } else if (i == 1 || i == rows) {
      start += '*';
    } else {
      start += ' ';
    }
  }
  start += '\n';
}
console.log(start);
