let date = new Date();
let hour = date.getHours();

if (hour < 11) {
    console.log('breakfast');
} else if (hour < 15) {        // 11 <= hour < 15
    console.log('lunch');
} else {
    console.log('dinner');
}

// Fizz-Buzz
// 3의 배수면 Fizz, 5의 배수면 Buzz, 15의 배수면 FizzBuzz, 아니면 숫자
let number = 5;
if (number % 15 == 0) {
    console.log('FizzBuzz')
} else if (number % 3 == 0) {
    console.log('Fizz');
} else if (number % 5 == 0) {
    console.log('Buzz');
} else {
    console.log(number);
}