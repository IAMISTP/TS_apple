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
    //   type CutType = (x: string) => string;
    //   let cutZero: CutType = function (x) {
    //     let result = x.replace(/^0+/, '');
    //     return result;
    //   };
    //   function removeDash(x: string): number {
    //     let result = x.replace(/-/g, '');
    //     return parseFloat(result);
    //   }
    console.log(cutZero('0안녕'));
    console.log(removeDash('12-345-6789'));
}
