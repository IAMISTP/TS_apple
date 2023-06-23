{
  //(숙제1) object 타입을 정의한 type alias 두개를 & 기호로 합칠 때 중복된 속성이 있으면 어떻게 될까요?
  type PositionX = { x: number };
  type PositionY = { y: number };
  type Position = PositionX & PositionY; //{x:number , y:number}
}
