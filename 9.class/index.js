"use strict";
{
    //이렇게도 할수 있음
    //   class Person {
    //     constructor(private name: string, private age: number) {}
    //   }
    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        print(txt) {
            console.log(txt);
        }
        add(a) {
            return a;
        }
        addRest(...a) {
            console.log(a.reduce((a, b) => a + b, 0));
        }
    }
    const person1 = new Person('Bob', 30);
    const person2 = new Person('hyemin', 30);
    console.log(person1);
    console.log(person2);
    console.log(person2.addRest(1, 2, 3, 4, 5));
}
