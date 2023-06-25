// (숙제3) 타입 중복이 너무 많이 발생합니다.

// type Dog = string;
// interface Dog { name : string };

// 위 코드에서 에러를 없애야합니다. 어떻게 코드를 짜면 될까요?

// (조건) type Dog, interface Dog의 타입이름 변경 금지, 파일 분할 금지
namespace GoodDog {
  export type Dog = string;
}

namespace BadDog {
  export interface Dog {
    name: string;
  }
}

let dog1: GoodDog.Dog = 'bark';
let dog2: BadDog.Dog = { name: 'paw' };
