"use strict";
{
    function cleanNumber(x) {
        let arr = [];
        x.forEach((e) => {
            if (typeof e === 'string') {
                arr.push(parseInt(e));
            }
            else {
                arr.push(e);
            }
        });
        console.log(arr);
    }
    console.log(cleanNumber([123, '1']));
}
