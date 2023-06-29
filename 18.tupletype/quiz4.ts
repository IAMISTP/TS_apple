{
  //     (숙제4) 다음과 같은 문자/숫자 분류기 함수를 만들어보십시오.
  // 파라미터 중 문자만 모아서 [] 에 담아주고, 숫자만 모아서 [] 에 담아주는 함수가 필요합니다.
  // 문자 숫자 외의 자료는 입력불가능하고 파라미터 갯수 제한은 일단 없습니다.
  // 함수 만들어보시고 함수의 파라미터/return 타입지정도 확실하게 해봅시다.
  // (동작예시)
  // 함수('b', 5, 6, 8, 'a') 이렇게 사용할 경우 이 자리에 [ ['b', 'a'], [5, 6, 8] ] 이 return 되어야합니다.

  function 함수(...arr: (string | number)[]) {
    let newArr: [string[], number[]] = [[], []];
    arr.forEach((a) => {
      if (typeof a === "string") {
        newArr[0].push(a);
      } else {
        newArr[1].push(a);
      }
    });
    console.log(newArr);
  }

  함수("b", 5, 6, 8, "a");
}
