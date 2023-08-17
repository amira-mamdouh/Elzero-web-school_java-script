let index = 10;
let jump = 2;
let i = index;
for (;;) {
  console.log(i);
  i -= jump;
  if (i === jump) break;
}

// for (i = index; i > jump; i -= jump) {
//   console.log(i);
// }

// Output
// 10;
// 8;
// 6;
// 4;
