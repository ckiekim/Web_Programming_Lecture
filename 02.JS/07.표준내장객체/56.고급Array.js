// Array copy
let a = [1, 2, 3];
let b = a;                  // copy? or assign? --> assign
b[0] = 100;
console.log(b, a);

let c = [1, 2, 3];
let d = [...c];             // Array copy
d[0] = 100;
console.log(c, d);

let m = {name:'apple', price:1000};
let n = m;
n.name = 'cherry';
console.log(m, n);

let o = {name:'apple', price:1000};
let p = {...o};
p.name = 'egg';
console.log(o, p);

let x = 10;
let y = x;
y = 20;
console.log(x, y);

// forEach() - item과 index를 동시에 리턴
for (let item of ['a', 'b', 'c']) {
    console.log(item)
}
['a', 'b', 'c'].forEach(function(item, index) {
    console.log(`${index}: ${item}`);
});
let arr = ['a', 'b', 'c'];
for (let index in arr) {
    console.log(`${index}: ${arr[index]}`)
}

let array = [52, 273, 32, 64, 72];
let sqArray = [];
for (let item of array) {
    sqArray.push(item * item);
}
console.log(sqArray);
let result = array.map((item, index) => {
    return item * item;
});
console.log(result);

result = array.filter(function(item, index) {
    return item % 2 == 0;
});
console.log(result);
