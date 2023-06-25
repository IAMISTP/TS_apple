"use strict";
{
    class Person {
        constructor(firstName, lastName, age) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
        }
        static print(firstName, lastName) {
            return new Person(firstName, lastName);
        }
        changeAge(a) {
            this.age = a;
        }
    }
    Person.score = 100;
    const person = new Person('Bob', 'Kim', 30);
    console.log(person);
    console.log(person.firstName);
    console.log(person.changeAge(20));
    console.log(Person.print('hyemin', 'park'));
    console.log(person);
}
