"use strict";
{
    let cutZero = (txt) => {
        let result = txt.replace('0', '');
        return result;
    };
    let removeDash = (txt) => {
        const text = txt.replace(/\-/g, '');
        return parseInt(text);
    };
    let makeFunction = (txt, fn1, fn2) => {
        let zero = fn1(txt);
        let result = fn2(zero);
        return result;
    };
    console.log(makeFunction('010-1111-2222', cutZero, removeDash));
}
