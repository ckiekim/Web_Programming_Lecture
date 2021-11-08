// 1부터 100까지 더하기
let sum = 0;
for (let i=1; i<=100; i++) {
    sum += i;
}
console.log(sum);

// 1부터 10까지 곱
let product = 1;
for (let i=1; i<=10; i++) {
    product *= i;
}
console.log(product);

product = 1;
for (let i=10; i>=1; i--) {
    product *= i;
}
console.log(product);

// 1에서 100까지 홀수의 합
sum = 0;
for (let i=1; i<=100; i++) {
    if (i % 2 == 1) {
        sum += i;
    }
}
console.log(sum);

sum = 0;
for (let i=1; i<=100; i+=2) {
    sum += i;
}
console.log(sum);