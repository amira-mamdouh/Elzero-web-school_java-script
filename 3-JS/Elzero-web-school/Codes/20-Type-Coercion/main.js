/*
type coercion (type casting)
  +
  -
  "" - 2
  false - true
*/

let a = "10";
let b = 20;
let c = true;

console.log(a + b); // 1020
console.log(+a + b);  // 30
console.log(Number(a) + b);  // 30
console.log(a - b);  //-10
console.log("" - 2);  // 0 - 2  = -2
console.log(false - true);  // -1
// false = 0
// true = 1
console.log(b + c);  // 21
console.log(a + b + c);  // 1020true
console.log(+a + b + c);  // 31

