// JSON(JavaScript Object Notation)
let obj = [
    {name:'apple', price:1000},
    {name:'cherry', price:2000}
];

let output = JSON.stringify(obj);
console.log(output);

let org = JSON.parse(output);
console.log(org);