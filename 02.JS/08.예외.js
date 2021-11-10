function callThreeTimes(callback) {
    if (callback) {
        for (let i=0; i<3; i++) {
            callback();
        }
    } else {
        console.log('callback 함수가 지정되지 않았음.')
    }
}

// 정상 실행
callThreeTimes(() => {
    console.log('Hello!');
});

// 예외 발생
callThreeTimes();

function callThreeTimes2(callback) {
    try {
        for (let i=0; i<3; i++) {
            callback();
        }
    } catch (error) {
        //console.log('예외 발생');
        //console.log(error);
        console.log(error.name);
        console.log(error.message);
    } finally {
        console.log('Finally');
    }
}

// 정상 실행
callThreeTimes2(() => {
    console.log('Hello!');
});

// 예외 발생
callThreeTimes2();