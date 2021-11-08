function myPrint(name, count) {
    console.log(`${name}이/가 ${count}개 있습니다.`);
}
myPrint('사과', 10);
myPrint('귤');      // 매개변수 입력값을 지정하지 않으면 undefined

function myPrint2(name, count) {
    if (!count) {
        count = 0;
    }
    console.log(`${name}이/가 ${count}개 있습니다.`);
}
myPrint2('귤');

function myPrint3(name, count) {
    count = count ? count : 0;
    console.log(`${name}이/가 ${count}개 있습니다.`);
}
myPrint3('사과', 10);
myPrint3('귤');