let i = 0;
let array = [52, 273, 32, 65, 10];

/* while (i < array.length) {
    console.log(`${i+1}번째 출력: ${array[i]}`);
    i++;
} */

// cumulative sum을 해서 345를 넘기는 순간 loop을 탈출
let sum = 0;
i = 0;

/* while (sum <= 345) {
    console.log(array[i]);
    sum += array[i++];
    //i++;
}
console.log(sum); */

while (true) {
    console.log(array[i]);
    sum += array[i++];
    if (sum > 345) {
        break;
    }
}
console.log(sum);