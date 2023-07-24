/*
Challenge 1
*/

/*
hint:
  [++a] [+]
  [++a]
  - Value:
  - Explain:
  [+]
  - Explain:
*/


let a = 10;
let b = "20";
let c = 80;

console.log(++a + +b++ + +c++ - +a++);
/*
solution:
- [++a] 
- pre increment = 10 + 1 = 11
- [+]
- additon operator
- [+b++] 
- give us number value and post increment 20 + 1 = 21
- [+c++] 
- give us number value and post increment 80 + 1 = 81
- [-]
- subtraction operator
- [+a++]
- give us number value and post increment 11 + 1 = 12 

*/


console.log(++a + -b + +c++ - -a++ + +a);
/*
solution:
- [++a] 
- pre increment = 10 + 1 = 11
- [+]
- additon operator
- [-b] 
- unary negation = -20
- [+]
- additon operator
- [+c++] 
- give us number value and post increment 80
- [-]
- subtraction operator
- [-a++]
- give us number value and post increment -10 
- [+]
- additon operator
- [+a]
- give us number value (unary plus)
*/

console.log(--c + +b + --a * +b++ - +b * a + --a - +true);
/*
solution:
- [--c]
- pre decrement
- [+]
- additon operator
- [+b]
- unary plus | give us number value
- [+]
- additon operator
- [--a]
- pre decrement
- [*]
- multiplication operator
- [+b++]
- give us number value and post increment
- [-]
- subtraction operator
- [+b]
- unary plus | give us number value
- [*]
- multiplication operator
- [a]
- a value
-[--a]
- pre decrement
-[+true]
- give plus number its value = +1 
*/


/*
  Challenge 2
*/

let d = "-100";
let e = "20";
let f = 30;
let g = true;

// Only Use Variables Value
// Do Not Use Variable Twice

console.log(-d * +e); // 2000
console.log(-d + ++f + ++e * ++g); // 173
