// 생성자(Constructor) 함수
// class는 대문자로 시작하는 이름을 가진다.
function Fruit() {
    this.name = 'apple';
    this.price = 1000;
    this.print = function() {
        console.log(`${this.name}의 가격: ${this.price}`);
    }
}
let fruit = new Fruit();
fruit.print();

function Fruit2(name, price) {
    this.name = name;
    this.price = price;
    this.print = function() {
        console.log(`${this.name}의 가격: ${this.price}원`);
    }
}
let apple = new Fruit2('apple', 1000);
let orange = new Fruit2('orange', 2000);
apple.print();
orange.print();

let fruits = [
    apple, orange,
    new Fruit2('cherry', 3000),
    new Fruit2('grape', 5000)
]
console.log(fruits);
fruits[3].print();
new Fruit2('banana', 4000).print();