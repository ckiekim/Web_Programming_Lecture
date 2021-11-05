let input = 32;

if (input % 2 == 0) {
    console.log('Even number');
}

if (input % 2 == 1) {
    console.log('Odd number');
}

// 현재 시간 구하기
let date = new Date()
console.log(date.getFullYear());
console.log(date.getMonth()+1);
console.log(date.getDay());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());

// 오전/오후 구분
if (date.getHours() < 12) {
    console.log('오전');
}
if (date.getHours() >= 12) {
    console.log('오후');
}