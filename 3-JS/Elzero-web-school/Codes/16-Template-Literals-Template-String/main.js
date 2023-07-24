// Template Literals (Template Strings)

let a = "We love";
let b = "Javascript";
let c = "and";
let d = "programming";

console.log(a + ' ' + b + ' ' + c + ' ' + d);
console.log(a + ' ' + b + '\n' + c + ' ' + d);
console.log(`${a} ${b} ${c} ${d}`);
console.log(`${a} ${b}
${c} ${d}`);
console.log(`${a} ${b} '' ${c} ${d}`);
console.log(`${a} ${b} ${c} ${d} ${100 * 50}`);

let title = 'Elzero';
let desc = 'Elzero web school';

let markUp= `
    <div class="card">
        <div class="child">
            <h2>${title}</h2>
            <p>${desc}</p>
        </div>
    </div>
`;

document.write(markUp);