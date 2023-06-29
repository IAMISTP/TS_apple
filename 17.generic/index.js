"use strict";
function 함수(x) {
    return x[0];
}
// function 함수(x: unknown[]) {
//   return x[0];
// }
let a = 함수([4, 2]);
console.log(a);
let b = 함수(["kim", "park"]);
function 함수2(x) {
    return x - 1;
}
let c = 함수2(100); //잘됩니다
function 함수3(x) {
    return x.length;
}
function 함수4(x) {
    return x.length;
}
let d = 함수3("hello");
