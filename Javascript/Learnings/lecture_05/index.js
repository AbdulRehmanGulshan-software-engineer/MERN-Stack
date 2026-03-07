/* 
Topic : JavaScript Numbers & Math Object Explained | Random Number Generation | Javascript Full Course #05
Link : https://youtu.be/HTcT-TuraHM?si=pPBQMZpsD9frXcl9
*/

//Number
// let a = 10;
// let b = 345.6821;
// console.log(a);
// console.log(b.toFixed(2));
// console.log(b.toFixed(1));
// console.log(typeof b.toFixed(2))

// console.log(b.toPrecision(5)); //it will also return string
// console.log(b.toString());

//another way to create number
// let a = new Number(20);
// let b = new Number(20);
// console.log(a == b);    //in object comparison reference should be same for equality to true
// console.log(a);
// console.log(typeof (a));        //object

// let object1 = {
//     name: "Abdul Rehman Gulshan"
// }
// let object2 = object1;
// console.log(object1 == object2);        //because of same reference true
// let object3 = {
//     name: "Gulshan"
// }
// console.log(object1 == object3);

// console.log(Boolean({}));   //even empty object is true,lekin refrence to hai na
// console.log(Boolean([]));   //even empty array is true
// console.log(Boolean(null));    //null : mai kisi ko refer nhi kr rha hun

// 💭 : non primitive data compare on the basis of reference
// 💭 : primitive : copy by value


//⚠️ MATH Library
// console.log(Math.abs(-4));
// console.log(Math.PI);
// console.log(Math.LN10);
// console.log(Math.SQRT2);
// console.log(Math.ceil(2.3));
// console.log(Math.floor(2.3));
// console.log(Math.max(20, 45, 90, 12, 34));
// console.log(Math.random()); //generate random value between [0,1)

// console.log(Math.floor(Math.random() * 10));    //between [0,10)
// console.log(Math.floor(Math.random() * 10) + 1) //between [1,10]

//Formula : Math.floor(Math.random()*totalNumberOfOutcome) + shift;

//Practice : generate 15-25
// console.log(Math.floor(Math.random() * 11) + 15);

// Famous Formula : Math.floor(Math.random() * (max - min + 1)) + min;
// console.log(Math.floor(Math.random() * (25 - 15 + 1)) + 15);

//OTP Generate : 4 digit (1000-9999)
console.log(Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000);      //not secure,instaed we use crypto libraries

console.log(Date.now())
let seed = Date.now();  //step 01: seed
function myRandom() {
    seed = (seed * 10078279 + 68768549) % 855843547;
    return seed / 35253625;
}
//Testing my own function
console.log(myRandom() % 1);
