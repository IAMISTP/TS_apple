"use strict";
{
    function 전부더하기(...a) {
        console.log(a);
    }
    전부더하기(1, 2, 3, 4, 5);
    //   let 사람 = { student: true, age: 20 };
    //   let student = 사람.student;
    //   let age = 사람.age;
    let { student, age } = { student: true, age: 20 };
    console.log(student);
    console.log(age);
    let [a, b] = ['안녕', 100];
    console.log(a);
    console.log(b);
    function 함수({ student, age }) {
        console.log(student, age);
    }
    함수({ student: true, age: 20 });
}
