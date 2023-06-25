{
  // (숙제3) 위에서 만든 타입을 extends 해봅시다.

  // 갑자기 서비스가 업데이트되어서 일부 상품은 card 속성이 들어가야합니다.
  interface Card {
    card?: boolean;
  }
  interface Type extends Card {
    product: string;
    price: number;
  }

  let 장바구니: Type[] = [
    { product: '청소기', price: 7000 },
    { product: '삼다수', price: 800 },
  ];

  // { product : '청소기', price : 7000, card : false }
  // 위에서 만든 interface를 extends 해서 이 object의 타입을 만들어보십시오.
}
