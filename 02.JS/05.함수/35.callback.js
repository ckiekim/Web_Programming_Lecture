function callTenTimes(callback) {
    for (let i=0; i<10; i++) {
        callback();
    }
}

let func = function() {
    console.log('함수 호출')
}
//callTenTimes(func);

/* callTenTimes(function() {
    console.log('함수 호출')
}); */

callTenTimes(() => {
    console.log('함수 호출')
});