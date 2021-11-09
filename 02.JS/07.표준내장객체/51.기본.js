// 기본(primitive) 자료형
let number = 273;
let string = '안녕하세요';
let boolean = true;

console.log(typeof(number));
console.log(typeof(string));
console.log(typeof(boolean));

// 객체 자료형
number = new Number(273);
string = new String('안녕하세요');
boolean = new Boolean(true);

console.log(typeof(number));
console.log(typeof(string));
console.log(typeof(boolean));

let s = '안녕하세요,선생님';
console.log(s.split(','));