{
  //     (숙제2) array 안에 object 여러개가 필요합니다.
  // 쇼핑몰 장바구니를 구현하려고 하는데

  interface Type {
    product: string;
    price: number;
  }

  let 장바구니: Type[] = [
    { product: '청소기', price: 7000 },
    { product: '삼다수', price: 800 },
  ];
  // 이렇게 생긴 object들이 잔뜩 들어갈 수 있는 array는 어떻게 타입을 지정해야할까요?
  // 오늘 배운 interface 문법을 써봅시다.
}
