// 선언적 함수
function add() {
    let x=10;
    let y=20;
    console.log(x+y);
}

add();
console.log(add);

// 익명 함수
let sub = function() {
    let x=10;
    let y=20;
    console.log(x-y);
}
sub();
console.log(sub);

// 화살표 함수(ES6)
let mul = () => {
    let x=10;
    let y=20;
    console.log(x*y);
}
mul();
console.log(mul);