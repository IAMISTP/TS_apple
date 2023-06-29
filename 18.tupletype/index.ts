{
  let 멍멍이: [string, boolean];
  멍멍이 = ["dog", true];

  function 함수(...x: string[]) {
    console.log(x);
  }
  function 함수2(...x: [string, number]) {
    console.log(x);
  }
  함수2("kim", 123); //가능
  //   함수2("kim", 123, 456); //에러
  //   함수2("kim", "park"); //에러

  type Num = [number, number?, number?];
  let 변수1: Num = [10];
  let 변수2: Num = [10, 20];
  let 변수3: Num = [10, 20, 10];

  let arr = [1, 2, 3];

  let arr2: [number, number, ...number[]] = [4, 5, ...arr];
}
