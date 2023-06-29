{
  //     **(숙제3) class 를 수정해봅시다.**
  // ```
  // class Person {
  //   name;
  //   constructor(a){
  //     this.name = a;
  //   }
  // }
  // let a = new Person('어쩌구');
  // a.name//any 타입이 되었넹
  // ```
  // 지금 만든 class는 new Person('어쩌구') 라고 분명 문자를 집어넣었는데 any 타입이 name 속성에 부여됩니다.
  // 이게 싫어서 파라미터에 string을 집어넣으면 string 타입
  // number를 집어넣으면 number 타입
  // string[]을 집어넣으면 string[] 타입이 되게 하려면 위의 코드를 어떻게 수정해야할까요?
  // 오늘 배운 Generic을 이용해봅시다.

  class Person<T> {
    name;
    constructor(a: T) {
      this.name = a;
    }
  }
  let b = new Person<string>("어쩌구");
}
