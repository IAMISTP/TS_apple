{
  //     (숙제1) 여러분이 최근에 사먹은 음식의 1. 이름 2. 가격 3. 맛있는지여부를 array 자료에 담아보고 타입지정까지 해보십시오.
  // 오늘 배운 tuple 타입으로 타입지정합시다.
  // 쉬워서 답은 생략합니다.
  // (예시) [ '동서녹차', 4000, true ] 이런 자료 만들고 타입지정하라는 소리입니다.

  function arrayType(x: [string, number, boolean]): void {
    console.log(x);
  }
  arrayType(["동서녹차", 4000, true]);
}
