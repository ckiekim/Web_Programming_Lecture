const fs = require('fs');

// 파일 읽기
let filename = __dirname + '/data/sample.txt';
fs.readFile(filename, 'utf-8', function(error, data) {
    if (error) 
        console.log(error);
    console.log(data);
});

let hello = '안녕하세요?';
fs.writeFile('data/hello.txt', hello, (error) => {
    if (error) 
        console.log(error);
});
console.log('쓰기를 완료했습니다.');