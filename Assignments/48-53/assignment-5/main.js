let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
let newFriends = [];
// Output
// ("1 => Sayed");
// ("2 => Eman");
// ("3 => Mahmoud");
// ("4 => Osama");
// ("5 => Sameh");

for (let i = --letter.length; i < friends.length; i++) {
  if (friends[i].startsWith(letter.charAt().toUpperCase())) {
    continue;
  }
  newFriends.push(friends[i]);
}
for (let e = --letter.length; e < newFriends.length; e++) {
  console.log(`${e + 1} => ${newFriends[e]}`);
}
