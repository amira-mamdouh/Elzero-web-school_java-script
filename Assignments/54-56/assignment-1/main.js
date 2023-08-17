let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;
let newFriends = [];

// Output
("1 => Sayed");
("2 => Mahmoud");

// for (let i = 0; i < friends.length; i++) {
//   if (typeof friends[i] === "number" || friends[i][0] === "A") {
//     continue;
//   }
//   console.log(friends[i]);
// }

while (index < friends.length) {
  if (typeof friends[index] === "number" || friends[index][counter] === "A") {
    index++;
    continue;
  } else {
    console.log(`${index} => ${friends[index]}`);
    index++;
  }
}

// console.log(newFriends.lengths);
