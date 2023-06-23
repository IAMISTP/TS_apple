{
  let name: string[] = ['park', 'hyemin'];
  let age: number = 29;
  let gender: { gender: 'male' | 'female' } = { gender: 'female' };
  let food: 'apple' | 'rice' = 'apple';

  type Name = string | number;
  let name2: Name = 'parkhyemin';

  type NameType = 'Kim' | 'Park';
  let name3: NameType = 'Kim';

  //가능
  function add(x: number | string) {
    if (typeof x === 'number') {
      return x + 1;
    }
  }

  type Member = [string, number];
  let member: Member = ['park', 1000];

  type MyInfo = {
    name?: string;
    age?: number;
  };

  const hyeminInfo: MyInfo = {
    name: 'hyemin',
    age: 29,
  };
  const bobInfo: MyInfo = {
    name: 'bob',
  };

  type MyObject = {
    [key: string]: number;
  };
  const myObject: MyObject = {
    hyemin: 123,
  };

  class Person {
    age;
    constructor(private name: string, age: number) {
      this.age = age;
    }
  }
}
