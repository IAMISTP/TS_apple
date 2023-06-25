"use strict";
{
    function 함수(animal) {
        if ('swim' in animal) {
            return animal.swim;
        }
    }
    const result = 함수({ swim: '바다' });
    console.log(result);
    function 타다(x) {
        if (x.wheel === '4개') {
            console.log('type 이 Car 이다.');
        }
    }
}
