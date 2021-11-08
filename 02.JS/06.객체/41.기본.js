// 배열(array)
let array = ['사과','바나나','망고','딸기'];
console.log(array[0], array[array.length-1]);

// 객체(object)
let product = {
    name: '7D 건조 망고',
    from: '필리핀'
}
console.log(product.name, product.from);
console.log(product['name'], product['from']);

let 가 = {가:'가', 나:'나'}
console.log(가);

let object = {name: 'banana', price: 1000};
console.log(object);

let name = 'apple', price = 2000;
let fruit = {name, price};          // let fruit = {name:name, price:price}
console.log(fruit);