// prototype and classes

const obj = {
    name: "Rohit",
    age: 38,
    greet: function () {
        console.log("Hello Coder Army.");
    }
}

console.log(obj);
console.log(obj.name);
console.log(obj.age);
// obj.greet();

//built in method 👇
// console.log(obj.hasOwnProperty("name"));

const arr = [10, 20, 30];
console.log(arr.length);
// from where these methods,functions like length,etc come

const obj2 = {
    account: 30
}
console.log(obj2.account);
console.log(obj2.name);     //undefined,but see magic below 👇
obj2.__proto__ = obj;
console.log(obj2.name);

console.log(Array.prototype);
console.log(obj.__proto__);
console.log(arr.__proto__);
console.log(arr.__proto__.__proto__);
//DRY Principle : Do not repeat yourself
console.log(Function.prototype);
console.log(Function.prototype.__proto__);

//Class In JavaScript 👇
const object3 = {
    name: "Rohit",
    age: 30,
    greet: function () {
        console.log(`Hello ${this.name}`);
    }
}
const object4 = {
    name: "Mohit",
    age: 34,
    greet: function () {
        console.log(`Hello ${this.name}`);
    }
}
//instead of repetition we will make class like we done in C++ 👇
class human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    //created method/function
    greet() {
        console.log(`Hello ${this.name}`);
    }
    // no need of destructor, JS manages memory automatically
}
const h1 = new human("Abdul Rehman Gulshan", 19);
console.log(h1);
h1.greet();
// console.log(human.prototype);    //this prototype will have methods in it

// inheritance
class customer extends human {
    constructor(name, age, account, balance) {
        super(name, age) //will call parent constructor
        this.account = account;
        this.balance = balance;
    }
    checckBalance() {
        return this.balance;
    }
}
const c1 = new customer("sheikh Gulshan Pervaiz", 70, 1194077341003681, 10000000);
console.log(c1);
c1.greet();
console.log("Current Balance is : ",c1.checckBalance());