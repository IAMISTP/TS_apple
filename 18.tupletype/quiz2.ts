{
  //     (숙제2) 이렇게 생긴 자료는 타입지정 어떻게 해야할까요?
  // let arr = ['동서녹차', 4000, true, false, true, true, false, true]
  // 몇개인지는 모르겠지만 true와 false가 셋째 자료부터 잔뜩 들어올 수 있다고 합니다.
  // tuple 타입과 spread 연산자를 써보도록 합시다.

  type ArrType = [string, number, ...boolean[]];

  let arr: ArrType = ["동서녹차", 4000, true, false, true, true, false, true];
}
