let array = [1, 2, 3, '아침', '점심', true, 3.4];
let person = ['홍길동', 25, 174.2, '남'];
let person2 = {'name':'홍길동', 'age':25, 'height':174.2, 'gender':'남'};

array[0] = 10;

for (let i=0; i<array.length; i++) {
    console.log(array[i]);
}