/*
Topic : JavaScript Strings & Dates Explained In-Depth | Javascript Full Course #06
Link : https://youtu.be/8dgsUGEgPXo?si=SsiIrgBw6D7prtTU
*/

//string
// const str1 = "Abdul Rehman GUlshan";
// const str2 = 'Abdul Rehman Gulshan';
// const day = 18;
// const str3 = `Gulshan is learning
// development on ${day}`; //modern method
// console.log(str1);
// console.log(str2);
// console.log(str3);

// const str = "Hello Coder Army";
// console.log(str.length); //length
// console.log(str[1]);    //index accessing
// str[2] = "e"; //string is immutable,JS will ignore this
// console.log(str);

// //upper case
// console.log(str.toUpperCase());     //parenthesis because it's function
// console.log(str.toUpperCase());
// str.toUpperCase();  //it will make copy, not change orignal

// console.log(str.indexOf('Cod'));

//solving case sensitivity issue
// const str1 = "hello Coder ARmy";
// const input = "CoD";
// const index = str.toUpperCase().indexOf(input.toUpperCase());
// console.log(index);
// console.log(str1)// will remain same

// //if we want answer in true/false
// console.log(str1.includes('Cod'));

//extracting substring
//slice
// console.log(str.slice(0, 6));    //(start_index,end_index(not included))
// console.log(str.slice(3));
// console.log(str1.slice(-4));    //(-4,-3,-2,-1)
// console.log(str1.slice(-4, -2));        //last index not included

// const str1 = "hello Coder ARmy";
//sub string
// only difference is we cannot markdown -ve index,treat them as 0
/*
substring(7, -7)
Negative index -7 becomes 0: substring(7, 0)
Swaps parameters if start > end
Example: substring(7, -7) becomes substring(0, 7)
*/
// console.log(str1.substring(2, 5));
// console.log(str1.substring(-2, 7));

// const a = "Rohit";
// const b = "Negi";
// const c = a + " " + b;
// console.log(c);

// console.log(24 + "Rohit" + 10); //first convert number to string
// console.log(24 + 20 + "Rohot");     //first added,then converted to string

//Replacing Substring
// const str = `Hello Coder Army Coder`;
// console.log(str.replace('ode', 'iam'));
// console.log(str);   //still remain same
// console.log(str.replaceAll('ode', 'iam'));

//Cleaning Up
// const user = "   Army  Negi   ";
// console.log(user.trim());       //will trim starting and end space only

// //splitting
// const name = "Rohit,Mohit,Rohan,Anjali";
// console.log(name.split(","));

// //Date
// const now = new Date(); //new is used to create object
// console.log(now);   //will show universal time

// console.log(now.toString());    //pakistan standard time
// console.log(now.toISOString());
// console.log(now.toLocaleString());
// console.log(now.toLocaleDateString());

// console.log(now.getDay());
// console.log(now.getDate());
// console.log(now.getFullYear());
// console.log(now.getMonth());    //month start from 0 , follows 0 based indexing 

//another method for creating date
// const now = new Date(2025, 8, 20, 8, 25, 16, 125);
// console.log(now);
// console.log(now.toString());

//another method to create
//time stamp
const now = Date.now();
console.log(now);   //will print all in millisecond
const date = new Date(Date.now());
console.log(date);
console.log(now)


