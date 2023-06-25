{
  class User {
    private name: string;
    protected age: number;
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
    printName() {
      console.log(this.name);
    }
  }
  class Person extends User {
    static score: number;
    constructor(name: string, age: number, score: number) {
      super(name, age);
    }
    printAge() {
      this.age;
    }
  }
  const user = new User('hyemin', 29);
  console.log(user);
  console.log(user.printName());
}
