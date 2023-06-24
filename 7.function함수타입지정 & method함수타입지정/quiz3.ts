{
  //     (숙제3) 함수에 함수를 집어넣고 싶습니다.
  // 숙제2에서 만든 함수들을 파라미터로 넣을 수 있는 함수를 제작하고 싶은 것입니다.
  // 이 함수는 파라미터 3개가 들어가는데 첫째는 문자, 둘째는 함수, 셋째는 함수를 집어넣을 수 있습니다. 이 함수를 실행하면
  // 1. 첫째 파라미터를 둘째 파라미터 (함수)에 파라미터로 집어넣어줍니다.
  // 2. 둘째 파라미터 (함수)에서 return된 결과를 셋째 파라미터(함수)에 집어넣어줍니다.
  // 3. 셋째 파라미터 (함수)에서 return된 결과를 콘솔창에 출력해줍니다.
  // 이 함수는 어떻게 만들면 될까요?
  // 둘째 파라미터엔 cutZero, 셋째 파라미터엔 removeDash 라는 함수들만 입력할 수 있게 파라미터의 타입도 지정해봅시다.
  // (실행예시)
  // 만들함수('010-1111-2222', cutZero, removeDash)
  // 이렇게 사용하면 문자에 1. cutZero를 해주고, 2. removeDash를 해주고 그 결과를 콘솔창에 1011112222 이렇게 출력해줍니다.
  // 이런거 처음이면 어려울 수 있으니 하루 드림

  type TypeCutZero = (txt: string) => string;
  type TypeRemoveDash = (txt: string) => number;

  let cutZero: TypeCutZero = (txt) => {
    let result = txt.replace('0', '');
    return result;
  };

  let removeDash: TypeRemoveDash = (txt: string) => {
    const text = txt.replace(/\-/g, '');
    return parseInt(text);
  };

  type TypeMakeFunction = (
    txt: string,
    fn1: TypeCutZero,
    fn2: TypeRemoveDash
  ) => number;
  let makeFunction: TypeMakeFunction = (txt, fn1, fn2) => {
    let zero = fn1(txt);
    let result = fn2(zero);
    return result;
  };

  console.log(

      makeFunction('010-1111-2222', cutZero, removeDash);
  );
}
