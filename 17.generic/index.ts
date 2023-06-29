function 함수<Type>(x: Type[]): Type {
  return x[0];
}
// function 함수(x: unknown[]) {
//   return x[0];
// }

let a = 함수<number>([4, 2]);
console.log(a);
let b = 함수<string>(["kim", "park"]);

function 함수2<MyType extends number>(x: MyType) {
  return x - 1;
}

let c = 함수2<number>(100); //잘됩니다

function 함수3<MyType extends string>(x: MyType) {
  return x.length;
}

interface lengthCheck {
  length: number;
}

function 함수4<MyType extends lengthCheck>(x: MyType) {
  return x.length;
}

let d = 함수3<string>("hello");
