let object = {
    name: 'apple',
    price: 1000,
    print: function() {         // 메소드에서 속성값을 이용할 때는 this를 앞에 붙여야 함.
        console.log(`${this.name}의 가격: ${this.price}`);
    }
};
object.print();

object.name = 'banana';
object.price = 2000;
object.print();