// Recursive call(재귀 호출)
function factorial(n) {
    if (n == 0) {
        return 1;
    }
    return n * factorial(n-1);
}
console.log(factorial(5));

// Fibonacci 수열
function fibo(n) {
    if (n == 0 || n == 1) {
        return 1;
    }
    return fibo(n-1) + fibo(n-2);
}
for (let i=0; i<=10; i++) {
    console.log(`fibo(${i}): ${fibo(i)}`);
}