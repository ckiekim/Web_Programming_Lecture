let fruits = ['apple', 'banana', 'cherry'];

for (let i=0; i<fruits.length; i++) {
    console.log(fruits[i]);
}
console.log('==============');

// Enhanced for-loop
for (let i in fruits) {
    console.log(fruits[i]);
}
console.log('==============');

// 아래의 방법을 익혀서 사용하세요.
for (let fruit of fruits) {
    console.log(fruit);
}
