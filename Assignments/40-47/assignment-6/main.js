let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];


let x = arr1.reverse().shift() 
arr2.splice(allArrs.length, arr1.length);
allArrs = allArrs.concat(x, arr2).sort();
console.log(allArrs.join("").toLowerCase()); // fxy
