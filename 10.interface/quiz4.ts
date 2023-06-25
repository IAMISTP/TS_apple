{
  //     (숙제4) object 안에 함수를 2개 넣고 싶은데요
  // 1. 이 object 자료는 plus() 함수를 내부에 가지고 있으며 plus 함수는 파라미터 2개를 입력하면 더해서 return 해줍니다.
  // 2. 이 object 자료는 minus() 함수를 내부에 가지고 있으며 minus 함수는 파라미터 2개를 입력하면 빼서 return 해줍니다.
  // 이 object 자료를 어떻게 만들면 될까요?
  // interface를 이용해서 object에 타입지정도 해보십시오.
  interface Calculate {
    // plus(a: number, b: number): number;
    // minus(a: number, b: number): number;
    plus: (a: number, b: number) => number;
    minus: (a: number, b: number) => number;
  }
  let calcul: Calculate = {
    plus(a, b) {
      return a + b;
    },
    minus(a, b) {
      return a - b;
    },
  };

  console.log(calcul.plus(1, 2));
  console.log(calcul.minus(1, 2));
}
