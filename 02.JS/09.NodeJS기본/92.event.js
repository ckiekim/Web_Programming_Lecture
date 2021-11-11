// exit 이벤트
process.on('exit', () => {
    console.log('프로세스가 종료되었음.');
});

// uncaughtException 이벤트 연결
process.on('uncaughtException', () => {
    console.log('예외가 발생하였음.');
});

// 예외를 강제적으로 발생시킴
error.error.error();

console.log('프로그램의 마지막 라인입니다.');