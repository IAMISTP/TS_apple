"use strict";
{
    let name = ['park', 'hyemin'];
    let age = 29;
    let gender = { gender: 'female' };
    let food = 'apple';
    let name2 = 'parkhyemin';
    let name3 = 'Kim';
    //가능
    function add(x) {
        if (typeof x === 'number') {
            return x + 1;
        }
    }
    let member = ['park', 1000];
    const hyeminInfo = {
        name: 'hyemin',
        age: 29,
    };
    const bobInfo = {
        name: 'bob',
    };
    const myObject = {
        hyemin: 123,
    };
    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
}
