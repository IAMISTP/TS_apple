{
  //     (숙제1) 위 코드에서 회원정보라는 변수에 타입지정 알아서 해보십시오.
  // - plusOne이라는 속성은 함수여야하고, 숫자를 넣어서 숫자를 뱉는 함수여야합니다.
  // - changeName이라는 속성은 함수여야하고, 아무것도 return하면 안됩니다.
  // - type 키워드를 쓰든 말든 알아서 합시다.

  type 회원정보Type = {
    name: string;
    plus: (a: number, b: number) => number;
    changeName: () => void;
  };

  let 회원정보: 회원정보Type = {
    name: 'kim',
    plus(a, b) {
      return a + b;
    },
    changeName: () => {
      console.log('안녕');
    },
  };

  const addNum = 회원정보.plus(1, 2);
  const printName = 회원정보.changeName();

  console.log(addNum);
  console.log(printName);
}
