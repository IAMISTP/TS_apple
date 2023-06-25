{
  class Person {
    static score: number = 100;
    private age?: number;
    public firstName: string;
    public lastName: string;
    constructor(firstName: string, lastName: string, age?: number) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }

    static print(firstName: string, lastName: string) {
      return new Person(firstName, lastName);
    }

    changeAge(a: number): void {
      this.age = a;
    }
  }

  const person = new Person('Bob', 'Kim', 30);
  console.log(person);

  console.log(person.firstName);
  console.log(person.changeAge(20));
  console.log(Person.print('hyemin', 'park'));
  console.log(person);
}
