{
  function 함수(a: string): number {
    return 1;
  }

  type 함수타입 = (a: string) => number;
  let 함수2: 함수타입 = (a: string) => 2;

  let 회원정보 = {
    name: 'kim',
    plus(a: number, b: number): number {
      return a + b;
    },
    printName: (name: string) => {
      console.log(name);
    },
  };

  const addNum = 회원정보.plus(1, 2);
  const printName = 회원정보.printName('hyemin');
}
