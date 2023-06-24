"use strict";
{
    function FunGame(game) {
        return [game];
    }
    FunGame('가위');
    let 자료 = {
        name: 'kim',
    };
    //   let 자료 = {
    //     name: 'kim',
    //   } as const;
    console.log(자료.name);
    function 내함수(a) {
        console.log(a);
    }
    //   자료.name = '123';
    //   내함수(자료.name);
    내함수(자료.name);
}
