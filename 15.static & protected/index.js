"use strict";
{
    class User {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        printName() {
            console.log(this.name);
        }
    }
    class Person extends User {
        constructor(name, age, score) {
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
