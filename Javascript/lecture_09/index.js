// function declaration
function greeting() {
    console.log("Gulshan is becoming a developer.");
}
// calling function
greeting();
//passing parameters
function addNumber(num1, num2) {
    const sum = num1 + num2;
    console.log(sum);
}
//calling sum function
addNumber(12, 13);
console.log(greeting());
//
function addNumber(num1, num2, num3 = 0) {
    const sum = num1 + num2 + num3;
    console.log(sum);
}
addNumber(2, 3, 4);

//flexible function, rest operator
function addNumber(...num) {
    let sum = 0;
    for (let n of num)
        sum += n;
    console.log(sum);
}

//destructuring
const arr = [1, 2, 3, 4, 5];
// const [first, second] = arr;
// console.log(first, second);

// i also want to catch remaining
const [first, second, ...num] = arr;
console.log(first, second, num);

const arr2 = [23, 54, 67, 34, 12];
const ans = [...arr, ...arr2];
console.log(ans);

//second method function creation : expression
const add = function (num1, num2) {
    return num1 + num2;
}
console.log(add(3, 4));

//other method for function : arrow function
const addTwoNumbers = (num1, num2) => {
    console.log("Hello i am arrow function.");
    return num1 + num2;
}
console.log(addTwoNumbers(2, 4));

//interesting if we have to return something , don't use {} even and return word
const numbersAddition = (num1, num2) => num1 + num2;
console.log(numbersAddition(8, 1));

//remember array sorting,there we was using arrow function actually
let brr = [9, 8, 7, 6, 5, 4, 3, 2, 1];
console.log(brr);
brr.sort((a, b) => a - b);
console.log(brr);

//squareNumber
const squareNumber = (num) => num * num;
console.log(squareNumber(5));

//if we have one parameter don't even need ()
// const square = num => num * num;
const square = num => (num * num); //can also add () braces
console.log(square(6));

// const greeting = () => {
//     return {
//         name: "Gulshan",
//         rollNumber: "bcsf24m",
//         age: 20
//     }
// }


// const greeting = () => { name: "Gulshan", rollNumber: "bcsf24m", age: 20 }  //error ,compiler sees curly braces and expects return from user

const greet = () => ({ name: "Gulshan", rollNumber: "bcsf24m", age: 20 })
console.log(greet());

//IIFE (immediate invoke function expression)
(() => {
    console.log("Hey Abdul Rehman Gulshan PUCIT");
})();       //will automatically call

//call back function
function great() {
    console.log("Hello Maryam");
}
meet = (callback) => {
    console.log("i am going to meet someone.");
    callback();
}

great();
meet(great);

//practice
met = (callback1, callback2) => {
    console.log("Hello I have two callbacks.");
    callback1();
    console.log("Hello I also have two.");
    callback2();
}
met(great, great);

//real world example
function darazOrderPlaced() {
    console.log("Thanks for ordering at daraz.our order is preparing.")
}
function zomatoOrderPlaced() {
    console.log("we have started preparing your food.");
}
function payment(amount, callback) {
    console.log(`${amount} payment has initialized`)
    console.log("payment is received");
    callback();
}

payment(500, darazOrderPlaced);
payment(200, zomatoOrderPlaced);