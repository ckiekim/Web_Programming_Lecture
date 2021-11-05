// i 변수는 loop 안에서 선언을 하지 않았으므로, 동일한 값이다.
let i;
for (i=0; i<10; i++) {

}
console.log(i);

// loop 밖의 k와 loop 안의 k는 변수 이름은 갖지만 내용은 다르다.
let k=5;
for (let k=0; k<10; k++) {

}
console.log(k);