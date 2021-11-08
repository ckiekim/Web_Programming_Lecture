function add(x, y) {
    return x+y;
}
let result = add(3, 4);
console.log(result);
console.log(add(30,40));

function sub(x, y) {
    return x-y;
}
console.log(sub(100,50));

function calc(opc, x, y) {
    if (opc === 'add') {
        return x+y;
    } else if (opc === 'sub') {
        return x-y;
    }
}
console.log(calc('add', 3, 4));

function sum(from, to){
    let output = 0;
    for (let i=from; i<=to; i++) {
        output += i;
    }
    return output;
}
console.log(sum(1,100));