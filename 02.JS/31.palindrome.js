/*
 * 세자리수 두개를 곱한 결과가 대칭수가 될 때
 * 가장 큰 값을 찾고 그때의 세자리수를 찾으시오.
 */
let x, y;
let maxNum = 0;

for (let i=100; i<=999; i++) {
    for (let k=i; k<=999; k++) {
        let num = i * k;
        if (isPalindrome(num)) {
            if (num > maxNum) {
                maxNum = num;
                x = i;
                y = k;
            }
        }
    }
}
console.log(maxNum, x, y);