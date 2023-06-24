"use strict";
{
    let 회원정보 = {
        name: 'kim',
        plus(a, b) {
            return a + b;
        },
        changeName: () => {
            console.log('안녕');
        },
    };
    const addNum = 회원정보.plus(1, 2);
    const printName = 회원정보.changeName();
    console.log(addNum);
    console.log(printName);
}
