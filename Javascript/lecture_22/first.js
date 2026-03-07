// this,call,apply,bind
//this:
// //strict mode vs non strict mode 👇

// 'use strict'
// var a = 10;
// b = 20;     //source of bug
// console.log(a, b);

// function greet(name, name) {
//     console.log(name, name);
// }

// greet("Abdul", "Rehman");
// // use strict mode of javascript,see first code line


// // console.log(window);    // will work only in v8 engine(browser) 👇
// //node js environment global object is 👇
// console.log(global);
// //instead there is globalThis , to whom everyone can understand
// console.log(globalThis);

// // this keyword 👇
// console.log(this);

// // Function inside object, and i have to make same function in 100 object 👇
// const user = {
//     name: "Rohit",
//     age: 30,
//     greet: function () {
//         console.log(`Hi ${this.name}`);
//     }
// }
// // this == user
// user.greet();

// const user2 = {
//     name: "Abdul Rehman Gulshan"
// }
// user2.greet = user.greet;
// user2.greet();
// // these are not good for memory

// // instead we will do this 👇
// // 'use strict'        //with strict mode this will point to undefined,while without strict mode it will point to global object
// function greet() {
//     console.log(`hi ${this.name}`);
//     // console.log(this);
// }

// const user1 = {
//     name: "Rohit",
//     age: 30,
// }

// const user2 = {
//     name: "Abdul Rehman Gulshan",
//     age: 19,
// }

// //use case
// greet.call(user1);
// greet.call(user2);

// function incrementAge(value, name) {
//     this.age += value;
//     this.name = name;
//     console.log(this.age);
//     console.log(this.name);
// }

// incrementAge.call(user1, 200, "Gulshan");
// console.log(user1);

// //what does apply do here 👇 we just pass in the form of array
// incrementAge.apply(user2, [300, "Ahmed Faizan"]);

// const incr = incrementAge.bind(user2, 10, "Mohan");
// // console.log(incr);   //it has bound incr with user2 just
// incr();


// //class 👇
// class person {
//     constructor(name = "unknown", age = 0) {
//         if (typeof name === "number") {
//             age = name;
//             name = "unknown";
//         }
//         if (typeof age !== "number") {
//             age = 0;
//         }
//         this.name = name;
//         this.age = age;
//     }
// }
// const p1 = new person();
// console.log(p1);
// const p2 = new person(34);
// console.log(p2);
// const p3 = new person("Abdul Rehman Gulshan", "hjh");
// console.log(p3)


// //Arrow function 👇
// // this does not exist for arrow function, lexical environment scope
// const green = () => {
//     console.log(this);
// }
// function meet() {
//     console.log(this);      //will point to global object
// }
// green();
// meet();


// // real world example 👇
// // 'use strict'
// const user = {
//     name: "Rohit",
//     // console.log(this);
//     greet: function () {
//         function meet() {
//             console.log(this);
//         }
//         meet();
//     }
// }
// user.greet();


// // see old method for solving this problem 👇
// const stopWatch = {
//     second: 0,
//     start: function () {
//         const that = this;      //old method it was
//         setInterval(function () {
//             that.second++;
//             console.log(that.second);
//         }, 1000)
//     }
// }
// stopWatch.start();

// // this upper 👆 problem was solved by arrow function
// const stopwatch = {
//     second: 0,
//     start: function () {
//         // console.log(this)    // arrow function will take this from here
//         setInterval(() => {
//             this.second++;
//             console.log(this.second);
//         }, 1000)
//     }
// }
// stopwatch.start();

// //see differnce between context vs scope 👇
// console.log(this);
// const user = {
//     name: "Rohit",
//     greet: () => {
//         console.log(this);
//     }
// }
// user.greet();

// 👇
// const button = document.getElementById("first");
// // here function will point out inner scope this
// button.addEventListener('click', function () {
//     console.log(this);
// })

// 👇
// const button = document.getElementById("first");
// // here arrow function will point out outer scope this
// button.addEventListener('click', () => {
//     console.log(this);
// })