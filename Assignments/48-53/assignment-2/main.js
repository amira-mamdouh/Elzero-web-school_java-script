let start = 10;
let end = 0;
let stop = 3;

for (let i = start; i > end; i--) {
  if (i < start) {
    console.log(`${end}${i}`);
  } else {
    console.log(i);
  }
  if (i === stop) break;
}

console.log("#".repeat(start));

for (let y = start; y >= stop; y--) {
  if (y < start) {
    console.log(`${end}${y}`);
  } else {
    console.log(y);
  }
}

// Output
// 10
// 09
// 08
// 07
// 06
// 05
// 04
// 03
