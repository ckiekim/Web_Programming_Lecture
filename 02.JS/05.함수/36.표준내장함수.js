// 숫자 변환 함수
console.log(Number('123'));
console.log(parseInt('123'));
console.log(parseFloat('123.1'));

// 타이머 함수
// 1초 후에
setTimeout(function() {
    console.log('1초가 지났습니다.');
}, 1000);

let id = setInterval(() => {
    console.log('1초 경과');
}, 1000);

setTimeout(() => {
    clearInterval(id);
}, 3100);