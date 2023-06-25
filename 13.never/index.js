"use strict";
{
    //함수의 실행이 끝나지 않거나 , return 이 없어야 never 타입을 사용할수 있다.
    function 함수() {
        while (true) {
            console.log('while 무한 반복');
        }
    }
    function 에러함수() {
        throw new Error('에러');
    }
    //배열의 타입을 정해주지 않으면 자동으로 never 타입으로 지정됨.
    let array = [];
}
