// // scope,closure, and high order function

// // console.log(a); //will give not initialized error
// // let a = 10;

// console.log(b);
// var b = 10; //will print undefined

// //arrow function
// create = () => {
//     console.log("hello coder army.");
// }

// create();



// let user = {
//     balance: 500,
//     //method
//     deposit: function (amount) {
//         if (typeof amount === "number" && amount > 0) {
//             this.balance += amount;
//             return this.balance;
//         }
//     },
//     withdraw: function (amount) {
//         if (typeof amount === "number" && amount > 0) {
//             this.balance -= amount;
//             return this.balance;
//         }
//     },
//     getBalance: function () {
//         return this.balance;
//     }
// }

// console.log(user.deposit(300));
// user.balance = "Rohit";     //still developer can do mistake
// console.log(user.balance);

//we have to make this balance private, for developer safety
// function createBankAccount() {
//     let balance = 0;
//     const user = {
//         //methods
//         deposit: function (amount) {
//             if (typeof amount === "number" && amount > 0) {
//                 balance += amount;
//                 return balance;
//             }
//         },
//         withdraw: function (amount) {
//             if (typeof amount === "number" && amount > 0) {
//                 balance -= amount;
//                 return balance;
//             }
//         },
//         getBalance: function () {
//             return balance;
//         }
//     }
//     return user;
// }

// const customer = createBankAccount();


// //High Order Function
// function double() {
//     function execute() {
//         console.log("Hello");
//     }
//     return execute;
// }

// function double(value) {
//     return function execute(num) {
//         return num * value;
//     }
// }
// const n = double(20);
// console.log(n(10));  //first method
// const m = double(20)(10);   //second method
// console.log(m);


// //another example
// const numbers = [1, 2, 3];
// const doubled = numbers.map(
//     function (num) {
//         return num * 2;
//     }
// )
// console.log(doubled);

// //doing above same by arrow function
// const number = [1, 2, 3];
// const double = number.map(num => num * 2);
// console.log(double);
