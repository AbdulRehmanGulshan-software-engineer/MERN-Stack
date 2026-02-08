//Array
// let marks1 = 100;
// let marks2 = 46;
// let marks3 = 58;
// let marks4 = 89;

// let marks = [100, 46, 58, 89];
// console.log(marks);
// console.log(marks.length);

// let array = [20, true, "hello", 100];
// console.log(array);
// console.log(array.length);

// //accessing element
// console.log(array[0]);      //0 indexing
// // Is array mutable ? Can i change array element...Yes
// console.log(typeof (array));
// array[2] = 90;
// console.log(array);

// //push operation
// array.push(10);
// array.push("gulshan");
// console.log(array);
// //pop operation
// array.pop();
// console.log(array);
// //add in starting
// array.unshift(30);
// array.unshift(50);
// console.log(array);
// //delete strting
// array.shift();
// console.log(array);

//print array
// let arr = [10, 20, 30, 40, 50];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }


// //for of loop
// for (let num of arr) {
//     console.log(num);
// }

// let arr2 = [1, 2, 3, 4, 5];
// let arr3 = arr2;        //copy by reference
// arr3.push(6);
// console.log(arr2);

// const arr = [10, 20, 50, 90, 11];
// const arr2 = arr.slice(2, 4);
// console.log(arr2);

// if i want change in original array
// console.log(arr.splice(1, 3));      //[1,3]     // This part removed
// console.log(arr);
// console.log(arr.splice(1, 3));
// console.log(arr);

// trimming and replacing
// console.log(arr);
// console.log(arr.splice(1, 3, "Gulshan", 89));
// console.log(arr);

//spread operator
// const arr = [10, 30, 50, 90, 11];
// const arr2 = ["Gulshan", 11, true];
// const arr4 = [3, 6, "UET", "PUCIT"]
// arr.push(arr2); //will go as an array
// console.log(arr);
// arr.concat(arr2);       //it will return new array so see below
// arr3 = arr.concat(arr2, arr4);
// console.log(arr3);

// const arr3 = [arr, arr2, arr4];
// console.log(arr3);
// use spread operator,By Value Copy
// const arr3 = [...arr, ...arr2, ...arr4];
// console.log(arr3);


// const names = ["Alice", "Bob", "Charlie", "Bob"];
// console.log(typeof (names));
// console.log(names.toString());
// console.log(typeof (names.toString()));

// //Join Operator,will convert to string too
// console.log(names.join("_"));
// console.log(names.join("#"));

// //Searching Index
// console.log(names.indexOf("Bob"));
// console.log(names.lastIndexOf("Bob"));
// console.log(names.includes("Gulshan"));

//Sorting
// const names = ["alice", "Rohit", "Bob", "Mohit", "Charlie"];
// names.sort();
// console.log(names);

//Reversing
// names.reverse();
// console.log(names);

//Descending Order
// names.sort();
// names.reverse();
// console.log(names);

// const a = [101, 90, 80, 32, 91];
// a.sort();
// console.log(a);

// const arr = [true, 5, "Gulshan", "Abdul", "Rehman"];
// arr.sort();
// console.log(arr);

//Syntax For Sorting,ascending order
const arr = [7, 2, 9, 56, 2, 87, 35];
arr.sort((arr, b) => arr - b);
console.log(arr);

const arr1 = [7, 2, 9, 56, 2, 87, 35];
arr1.sort((arr1, b) => b - arr1);
console.log(arr1);

//Flattening an Array
const arr2 = [10, 30, 50, [34, 65, [67, 89, 93, 67, [43, 61, 23, 6, 8]]], 80];
console.log(arr2);
console.log(arr2[3][2][4][2]);
// arr2.flat(); //need to save copy in new array
const arr3 = arr2.flat();       //one level flag
console.log(arr3);
const arr4 = arr3.flat(Infinity);
console.log(arr4);