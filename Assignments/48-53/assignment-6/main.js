let start = 0;
let swappedName = "elZerO";
let str = "";
// Output
("ELzERo");

for (let i = start; i < swappedName.length; i++) {
  if (swappedName[i] === swappedName[i].toUpperCase()) {
    str += swappedName[i].toLowerCase();
  } else {
    str += swappedName[i].toUpperCase();
  }
}

console.log(str);
