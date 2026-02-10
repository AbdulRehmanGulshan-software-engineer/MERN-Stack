// JavaScript Objects Explained In-Depth | Javascript Full Course #08

//object, key:Value
const user = {
    name: "Abdul Rehman Gulshan",
    age: 19,
    emailId: "sabdulrehmangulshan@gmail.com",
    amount: 200,
    // home address : "5 Chamderlain Road Lahore";  //error in naming of key
    "home address": "5 Chamberlain Road Lahore"
}

// console.log(user);
// console.log(typeof (user));
// console.log(user.age);

// CRUD: Create Read Update Delete
user.salary = 20000;        //insertion
// console.log(user);

// user.age = 20;  //update
// console.log(user);

//delete
delete user.salary;
delete user.age;
console.log(user)

// console.log(user[name]);     //error

console.log(user["name"]);      //give as a string
console.log(user["home address"]);      //(user.home address) automatically writes like this

const user2 = user;     //copy by reference
user2.age = 19;
console.log(user);

//Just print keys
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

//running loop
for (let keys in user) {
    console.log(keys, user[keys]);
}

// const name = user.name;
// const age = user.age;
// console.log(name, age);

//destructuring in Javascript
const { name, age, amount } = user;
console.log(name, age, amount);

const arr = [10, 20, 90, 54, 78];
const [first, second] = arr;
console.log(first, second);


const { name: userName, age: userAge, amount: userAmount } = user;
console.log(userName, userAge, userAmount);

//For Of Loop not directly in object
console.log(Object.keys(user));
for (let keys of Object.keys(user)) {       //Object.keys(user) , converted to array
    console.log(user[keys]);
}

const tempArray = Object.keys(user);
console.log(tempArray);
for (let temp of tempArray) {
    console.log(user[temp]);
}

for (let [keys, values] of Object.entries(user)) {
    console.log(keys, values);
}

// console.log(Object.entries(user));

//methods/functions in objects
const obj = {
    name: "Abdul Rehman Gulshan",
    age: 19,
    emailID: "sabdulrehmangulshan@gmail.com",
    amount: 3400,
    greeting: function () {
        // console.log(`${user.name} is becoming a developer.`);
        //use this instead
        console.log(`${this.name} is becoming a developer.`);
        return 20;
    }
}
//calling
const va = obj.greeting();
console.log(va);

const user4 = {
    name: "Mohin",
    account: 201,
}
//adding data member/member function
user4.greeting = obj.greeting;
user4.greeting();

//nested object
const obj1 = {
    name: "Abdul Rehman Gulshan",
    city: "Lahore",
    age: 19,
    address: {
        city: "Lahore",
        state: "Punjab",
        Country: "Pakistan",
    }
}
console.log(obj1.address.Country);

//independent copy / shallow copy
const obj2 = { ...obj1 };
// obj2.name = "Ahmed Faizan Gulshan";
console.log(obj1);
obj2.address.city = "Karachi";
console.log(obj1);     //still change in obj2(nested part)

//deep copy
const obj3 = structuredClone(obj1);
// console.log(obj1);
obj3.address.Country = "India";
console.log(obj3);
console.log(obj1);

//interesting part
const obj5 = {
    name: "Sheikh Gulshan Pervaiz",
    occupation: "Businessman",
    0: "Array Element 0",
    1: "Array Element 1",
    2: "Array Element 2",
    "3": "Array Element 3"
}
//accessing
console.log(obj5[0]);
console.log(obj5[3]);

//adding symbol in object as key
const sym = Symbol("id");
const obj6 = {
    0: 10,
    1: 20,
    2: 30,
    [sym]: "Hello Ji"       //add these [] brackets
}
console.log(obj6);