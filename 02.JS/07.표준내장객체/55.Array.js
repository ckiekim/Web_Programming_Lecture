// Array 생성
let numbers = [1, 3, 4, 8];
let nums = new Array(1, 3, 4, 8);
console.log(nums);

// Array 객체의 method
let a = numbers.concat(10, 20)
console.log(a, numbers);

console.log(numbers.join(', '));

a = numbers.pop();
console.log(a, numbers);

numbers.push(a);            // append
console.log(numbers);
squares = []
for (let num of numbers) {
    squares.push(num * num);
}
console.log(squares);

console.log(squares.reverse(), squares);

console.log(numbers.slice(1,3), numbers);

let array = ['dog', 'cat', 'lion'];
console.log(array.sort(), array);       // 오름차순(ascending order)
let numArray = [4, 2, 8, 5];
numArray.sort(function(a, b) {
    return b - a;
});
console.log(numArray)