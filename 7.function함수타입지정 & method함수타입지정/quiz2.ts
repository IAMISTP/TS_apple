{
  //     (숙제2) 다음 함수2개를 만들어보고 타입까지 정의해보십시오.
  // - cutZero()라는 함수를 만듭시다. 이 함수는 문자를 하나 입력하면 맨 앞에 '0' 문자가 있으면 제거하고 문자 type으로 return 해줍니다.
  // - removeDash()라는 함수를 만듭시다. 이 함수는 문자를 하나 입력하면 대시기호 '-' 가 있으면 전부 제거해주고 그걸 숫자 type으로 return 해줍니다.
  // - 함수에 타입지정시 type alias를 꼭 써보도록 합시다.
  // 물론 문자제거 하는 방법을 모른다면 구글검색이 필요합니다.

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
