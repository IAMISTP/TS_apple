"use strict";
{
    function 함수(a) {
        return 1;
    }
    let 함수2 = (a) => 2;
    let 회원정보 = {
        name: 'kim',
        plus(a, b) {
            return a + b;
        },
        printName: (name) => {
            console.log(name);
        },
    };
    const addNum = 회원정보.plus(1, 2);
    const printName = 회원정보.printName('hyemin');
}
