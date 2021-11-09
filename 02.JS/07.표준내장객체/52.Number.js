let numberFromLiteral = 273;
let numberFromConstructor = new Number(273);

let number = 273.5210332;
console.log(number.toExponential());
console.log(number.toFixed(3));

let numA = Number.MAX_VALUE;
let numB = Number.MAX_VALUE + 1;
console.log(numA, numB);