// // https://youtu.be/UByPRYaMEkI?si=C-5JAHn5ApQc1QXC
// // Topic : Map,Filter,Reduce,Set & Map in Javascript

// //for each loop
// const arr = [10, 20, 40, "rohit", "mohit", 70];
// arr.forEach((number, index) => { console.log(number, index) });
// // arr.forEach((number, index, arr) => { console.log(number, index, arr) });

// let sum = 0;
// arr.forEach((number) => {
//     sum += number;
// })
// console.log(sum);

// filter : used when i want selected elements
const arr = [20, 23, 34, 54, 28];
// const arrNew = arr.filter((number) => number > 25);
// console.log(arrNew);


// //making customized filter method (using arrow function : note one thing arrow function do not have their own THIS,They just “inherit” this from the place where they are created)
// arr.filtering = compare => {
//     const ans = [];
//     for (let num of arr) {
//         if (compare(num)) {
//             ans.push(num);
//         }
//     }
//     return ans;
// }
// //now testing our customized method
// const newArr = arr.filtering((number) => number > 25);
// console.log(newArr);

// //using normal function for the same task
// //making customized filter method
// arr.filtering = function (compare) {
//     const ans = [];
//     for (let num of this) {
//         if (compare(num)) {
//             ans.push(num);
//         }
//     }
//     return ans;
// }
// //now testing our customized method
// const newArr = arr.filtering((number) => number > 25);
// console.log(newArr);

// //map in JavaScript
// console.log(arr);
// const arrNew = arr.map((number) => number * 2);
// console.log(arrNew);

// //real world use case of map,filter
// const products = [
//     //electronics
//     { id: 1, name: "Laptop", category: "Electronics", price: 1200, instock: true },
//     { id: 2, name: "Headphones", category: "Electronics", price: 7000, instock: false },
//     { id: 3, name: "Charging Cable", category: "Electronics", price: 200, instock: true },
//     { id: 4, name: "USB", category: "Electronics", price: 800, instock: true },
//     { id: 5, name: "RAM", category: "Electronics", price: 14000, instock: true }
// ];
// // const newArr = products.filter((product) => product.price > 500);
// // console.log(newArr);

// // if i want sorted
// const newBrr = products.filter((product) => product.price > 500).sort((a, b) => b.price - a.price);
// console.log(newBrr);

// //using map for that example
// const newCrr = products.map((product) => ({
//     name: product.name,
//     price: product.price
// }));
// console.log(newCrr);


// //what map does
// // arr.map((num) => num * 2);
// //building own custom map
// Array.prototype.mapping = function (compare) {
//     const newArray = [];
//     for (num of this) {
//         newArray.push(compare(num));
//     }
//     return newArray;
// }
// const brr = arr.mapping((num) => num * 2);
// console.log(brr);

// //reduce : gives final value
// products.reduce((accumulator, currentValue) => {
//     if (currentValue.instock == true)
//         accumulator += currentValue.price;
//     console.log(accumulator);
//     return accumulator;     //in reduce whatever you return becomes the accumulator for the next iteration
// }, 0)


// //Data Structure : set
// // its like array but have unique value
// const arr2 = [10, 20, 30, 10, 23, 15, 10, 78];
// console.log(arr2);
// const set1 = new Set(arr2); //will store only unique
// console.log(set1);
// //adding element to set
// set1.add(9);
// console.log(set1);
// // checking does particular value present
// console.log(set1.has(10));
// console.log(set1.has(17));
// //deleting particular value
// set1.delete(10);
// console.log(set1);
// //finding size of set
// console.log(set1.size);

// //real world example for set
// const email = ["ro@gmail", "ro@gmail", "mo@gmail"];
// const unique_email_detail = new Set(email);
// console.log(unique_email_detail);
// //as set is not array
// //below is how to comeback this set to array
// const uniqueEmail = [...new Set(email)];
// console.log(uniqueEmail);
// // see spread operator (...) work
// for (let num of uniqueEmail) {
//     console.log(num);
// }


// map;
const obj = { "1": "one", 2: "two" };
console.log(obj["1"]);
console.log(obj[1]);
console.log(Object.keys(obj)); // ["1"] → string, not number
// i want my keys other than string and symbol
const m1 = new Map([
    ["Rohit", 40],
    [2, 20],
    [true, 11],
    [[10, 20, 30], 69]
])
// note : map will help while solving DSA problem
console.log(m1);
//adding new value to map
m1.set(false, 27);  //added false as key
console.log(m1);
m1.set({        //added object as key
    name: "John",
    class: "Love"
}, 23);
console.log(m1);

for (let [keys, values] of m1) {
    console.log(keys, values);
}