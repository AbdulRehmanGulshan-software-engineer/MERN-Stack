/* Topic : JavaScript Conditionals, Loops & Operators Explained | Javascript Full Course #04 
Link : https://youtu.be/7dMQr2-T--4?si=lxMYEGcmJZtCdI_J */

//operator
console.log(2 + 5);
console.log(5 - 2);
console.log(7 * 5);
console.log(7 % 5); //remainder
console.log(2 ** 5);  // power

//Assignment Operator
let x = 20, y = 10;
// x = x + y;
// x = x * y;
x += y;
console.log(x);

//comparison operator
let z = 10;
let w = 20;
console.log(w > z);
console.log(w < z);
let b = "20";
console.log(w == b);    //number and string compare (string convert number)
console.log(w === b);   //it says datatype should be same,then compares

let i = "10";
console.log(typeof (i));
let a = Number(i);
console.log(i);
console.log(typeof (a));

let c = "121ac";
let d = Number(c);
console.log(d);     //will give NaN (not a number)
console.log(0 / 0); //Type of NaN is number

// Number => string conversion
let number = 10;
let str = String(number);
console.log(str);
console.log(typeof (str));

console.log(Number(true));
console.log(Number(undefined)); // not necessary for us(undefined->NaN)
console.log(Number(null));      // not necessary for us (null->0)

//Ecma Script make rules for JavaScript

console.log(String(true));
console.log(typeof String(true));
console.log(Boolean(10));

//computer science challenge
let e = 0.1;
let f = 0.2;
let g = e + f;
console.log(g == 0.3)
console.log(g);

//make personal library for taking decimal input and add them

//some rules
//1 : null is loosely equal to undefined only  
console.log(null == undefined);
console.log(null === undefined);
console.log(null == 0);
console.log(null == "");
console.log(null == false);
console.log(null == true);

//2: <,>,>=,<= (null --> number, undefined --> NaN)
console.log(null >= 0);
console.log(null <= 0);
console.log(null == undefined);     //loosely equal
console.log(null >= undefined);
console.log(undefined == NaN);          // False, but why !
// NaN is never equal itself even ,see below
console.log(NaN == NaN);        //False
console.log(NaN === NaN);       //False

//string comparison
console.log("Rohit" > "Rohit");
console.log("gulshan" > "Gulshan");

//for loop
for (let i = 0; i < 10; i++) {
    console.log(i);
}

//while loop
let j = 10;
while (j > 0)
    console.log(j--);

//do while
let k = 0;
do {
    console.log(k++);
} while (k < 10)

// if else condition
let age = 18;
if (age >= 18)
    console.log("Eligible For Vote");
else
    console.log("Not Eligible For Vote");

//kid,young,old
if (age >= 60)
    console.log("old");
else if (age >= 20)
    console.log("young");
else
    console.log("kid");

//Logical Operator
console.log(true && true);
console.log(true && false);
console.log(true || false);
console.log(false || true);

// AND (&&) : First operand falsy ho → wahi return , Otherwise → second operand return
let m = "Rohit";        //short circuit evaluation
let n = "Mohit";
let o = m && n;
console.log(o);

// OR (||): First operand truthy ho → wahi return, Otherwise → second operand return

console.log(5!=5);