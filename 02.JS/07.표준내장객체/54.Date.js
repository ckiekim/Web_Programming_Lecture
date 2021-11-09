// Date 객체 생성
let today = new Date();
console.log(today);

let unixDate = new Date(1492281800000);
console.log(unixDate);

let strDate = new Date('November 9, 2021, 21:44:00');
console.log(strDate);

let timeDate = new Date(2021, 10, 9, 21, 45, 0, 0);
console.log(timeDate);

console.log(new Date('2021-11-09 21:46:00'));
console.log(new Date('2021-11-09'));

// Getter method
console.log(today.getFullYear(), today.getHours());

// Setter method
// 현재 시간으로부터 1개월 5일 후 시간
console.log(today);
today.setMonth(today.getMonth()+1);
today.setDate(today.getDate()+5);
console.log(today);