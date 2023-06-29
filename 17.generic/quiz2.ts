{
  //     **(숙제2) Animal 이라는 타입이 있습니다.**
  // ```
  // interface Animal {
  //   name : string;
  //   age : number
  // }
  // let data = '{"name" : "dog", "age" : 1 }'
  // ```
  // 그리고 data라는 변수도 있습니다. object처럼 생겼지만 따옴표 쳐진 JSON 자료입니다.
  // data라는 JSON 자료를 object { } 자료로 변환을 해서 return 해주는 함수를 만들어보십시오.
  // 근데 변환된 object의 타입은 Animal이 되었으면 좋겠는데 어떻게 코드를 짜면 될까요?
  // 오늘 배운 Generic을 이용해서 구현해보도록 합시다.

  interface Animal {
    name: string;
    age: number;
  }
  function changeType<Type>(x: string): Type {
    return JSON.parse(x);
  }
  let data = '{"name" : "dog", "age" : 1 }';
  let result = changeType<Animal>(data);
}
