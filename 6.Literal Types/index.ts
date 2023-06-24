{
  type Game = '가위' | '바위' | '보';

  function FunGame(game: Game): Game[] {
    return [game];
  }
  FunGame('가위');

  let 자료 = {
    name: 'kim',
  };
  //   let 자료 = {
  //     name: 'kim',
  //   } as const;
  console.log(자료.name);

  function 내함수(a: 'kim') {
    console.log(a);
  }
  //   자료.name = '123';
  //   내함수(자료.name);
  내함수(자료.name as 'kim');
}
