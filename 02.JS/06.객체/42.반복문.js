let fruit = { name: 'apple', price: 1000, from: 'Korea' };
for (let key in fruit) {
    console.log(`${key}: ${fruit[key]}`);
}

let array = [100, 200, 300];
for (let key in array) {
    console.log(`${key}: ${array[key]}`);
}

let fruits = [
    { name: 'apple', price: 1000, from: 'Korea' },
    { name: 'banana', price: 2000, from: 'Philipine' }
];
for (let fruit of fruits) {
    console.log(fruit.name, fruit.price, fruit.from);
}