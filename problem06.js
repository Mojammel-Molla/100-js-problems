// * * * *
// * * * *
// * * * *
// * * * *
// * * * *
//  Solve this rectangle pattern

const rows = 5;
const cols = 4;
let start = '';

for (let i = 1; i <= rows; i++) {
  for (let j = 1; j <= cols; j++) {
    start += '*';
  }
  start += '\n';
}
console.log(start);
