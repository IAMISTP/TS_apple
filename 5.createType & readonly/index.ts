{
  type Animal = string | number | undefined;
  let animal: Animal = 'kim';

  type Teacher = {
    name: string;
    age: number;
  };
  let teacher: Teacher = { name: 'john', age: 40 };

  const girl = {
    name: '엠버',
  };
  girl.name = '유라';

  type GirlType = {
    readonly name: string;
  };
  const girl2: GirlType = {
    name: '엠버',
  };
  girl2.name = '유라'; //readonly 는 속성을 변경할수 없다 읽기만 가능

  type Square = {
    color?: string;
    width: number;
  };

  let circle: Square = {
    width: 20,
  };

  type Name = string;
  type Age = number;
  type Person = Name | Age;

  type PositionX = { x: number };
  type PositionY = { y: number };
  type Position = PositionX & PositionY;
  const position: Position = { x: 1, y: 2 };
}
