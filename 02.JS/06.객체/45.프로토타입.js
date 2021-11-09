function Fruit(name, price) {
    this.name = name;
    this.price = price;
    this.print = function() {
        console.log(`${this.name}의 가격: ${this.price}원`);
    }
}
let apple = new Fruit('사과', 1000);

Fruit.prototype.from = '예천';
Fruit.prototype.원산지 = function() {
    console.log('원산지는 예천입니다.')
}
console.log(apple.from);
apple.원산지();