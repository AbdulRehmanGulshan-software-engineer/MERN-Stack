// creating variables 👇
//1st Method
let name = "Abdul Rehman Gulshan";
console.log(name);
let age = 20;
console.log(name, age);
age = 30;
//2nd method
const account = 1234;
console.log(account);
// account = 23;        // cannot be changed

// 3rd Method (old method)
var a = 10;
var a = 20;     //can again be declared if using var
console.log(a);

if (true) {
    var a = 260;
}
console.log(a);     // var does,t respect scope

function fun() {
    var c = 19;
}
// console.log(c); // var only respect functional scope and global scope

// "let" solve all these problems
// so we only use let from now

//Data Types 👇
//primitive data type:
//number,string,boolean,undefined,null,bigint,symbol
//number
let d = 10;
console.log(d);
let e = 3.16;       //JS auto decides
console.log(e);
//string
let f = 'Gulshan is becoming a developer';  //double quotes are alo eligible
console.log(f);
//boolean
let login = true;
let login1 = false;
console.log(login, login1);
//undefined datatype
let user;   //no value assigned
console.log(user);
//bigint
let num = 58537523582352356n;
console.log(num);
//null
let weather = null;
console.log(weather);
//symbol
const id1 = Symbol("id");
const id2 = Symbol("id");
console.log(id1, id2);
console.log(id1 == id2);    //wow 😂

//non primitive data type
//array,object,function
//array
let arr = [10, 20, 11, "Abdul Rehman Gulshan", true];
console.log(arr);
console.log(typeof arr);    //😂will prove later it is Object
//object
let obj = {
    name: "Abdul Rehman Gulshan",
    account: 11940,
    age: 18,
    category: 'general'
}
console.log(obj);
// function
function add() {
    console.log("Hello World!");
};
add();  //calling function
//In JS we can store function in a variable ⚠️
let s = function display() {
    console.log("Welcome To AI Chowk");
};
console.log(s());

// later we will prove array is not array in JS

//typeof
let g = 123;
console.log(typeof g);
// bug : JS shows null typeof as object ⚠️

//primitive data type is immutable
let h = 10;
h = 20;     //this is new memory location
console.log(h);

let string = "Abdul Rehman Gulshan";
string[0] = "G";
console.log(string);

//non primitive datatypes are mutable
let brr = [10, 20, 30, 40];
brr.push(50);
console.log(brr);

let object = {
    name: "Baaba Saikhu",
    age: 20,
    gender: "Male"
}
object.age = 19;
object.name = "Rafay Saikhu";
console.log(object.name, object.gender);
console.log(object);
let object2 = object;
console.log(object2.name);
object2.name = "Rafay Younas";
console.log(object);        //changing in object 2 also changes original object, By Reference Concept

let i = 10;
let j = i;
j = 20;     //also immutable,will take extra space for 20, it follows copy/pass by value
console.log(i, j);

