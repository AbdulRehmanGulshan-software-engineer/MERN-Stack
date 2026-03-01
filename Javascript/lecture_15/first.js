// // events in Javascript
// // event means mouse move,click,double click
// // event listener : Listening the event (Click) 👇

// function handleClick() {
//     const element = document.getElementById("first");
//     element.textContent = "Strike is Coming";
// }

// const element = document.getElementById("first");
// element.onclick = (message) => {
//     element.textContent = message;
// };

// const handleClick = (text) => {
//     element.textContent = text;
// }

// element.addEventListener("click", () => {
//     handleClick("Strike is Coming Soon.")
// });

// const element1 = document.getElementById("second");
// element1.addEventListener("click", () => {
//     handleClick("Hello Gulshan Is Becoming A Developer.")
// })


// //will make one function for all 👇
// /* just for understanding concepts
// event = {
//   type: "click",
//   target: <the element that was clicked>,
//   currentTarget: <the element that has the listener>,
//   timeStamp: 123456
// }
// */
// const handleonclick = (event) => {
//     event.target.textContent = event.target.dataset.text;
// }
// //we will give this function to browser, browser will automatically ctreate event and pass it to handleonclick function
// document.getElementById("first").addEventListener("click", handleonclick);
// document.getElementById("second").addEventListener("click", handleonclick);
// document.getElementById("third").addEventListener("click", handleonclick);


// // //coming back to previous concepts 👇
// const element = document.getElementById("first");
// element.onclick = function handleClick() {
//     element.textContent = "Strike is Coming";
// }
// //overriding
// element.onclick = function handleClick() {
//     element.style.backgroundColor = "pink";

// }
// //i want to run both,ok so for this i will use eventListener


// //eventListener 👇
// const element = document.getElementById("first");
// element.addEventListener("click", () => {
//     element.textContent = "Strike is coming.";
// })
// element.addEventListener("click", () => {
//     element.style.backgroundColor = "pink";
// })

// // again making function for all 👇
// const clickme = (event) => {
//     // event.target.textContent = event.target;
//     event.target.textContent = event.target.dataset.text;
// }
// document.getElementById("child1").addEventListener("click", clickme);
// document.getElementById("child2").addEventListener("click", clickme);
// document.getElementById("child3").addEventListener("click", clickme);
// document.getElementById("child4").addEventListener("click", clickme);
// document.getElementById("child5").addEventListener("click", clickme);

// //doing donkey work again 👇
// const child1 = document.getElementById("child1");
// child1.addEventListener("click", () => {
//     child1.textContent = "I am Clicked";
// })
// const child2 = document.getElementById("child2");
// child2.addEventListener("click", () => {
//     child2.textContent = "I am Cooked";
// })

// const parent = document.getElementById("parent");
// console.log(parent.children);
// for (let child of parent.children) {
//     child.addEventListener("click", () => {
//         child.textContent = "I am Totally Cooked.";
//     })
// }

// //these all are not optimized approaches 👆
// //Bubbling 👇
// const grandparent = document.getElementById("grandparent");
// grandparent.addEventListener("click", () => {
//     // grandparent.textContent = "GrandParent is clicked";
//     console.log("GrandParent is clicked");
// }, true)
// const parentt = document.getElementById("parentt");
// parentt.addEventListener("click", () => {
//     // parentt.textContent = "Parent is Clicked.";
//     console.log("Parent is clicked");
// }, true)
// const child = document.getElementById("child");
// child.addEventListener("click", () => {
//     // child.textContent = "Child is Clicked";
//     console.log("Child is clicked");

// }, true)

/*
capture phase  : even trigger on true case
target phase
bubbling phase : even trigger on false case
*/

// //instead use single event listener
// const grandparent = document.getElementById("grandparent");
// grandparent.addEventListener("click", (e) => {
//     console.log(e.target);
// })
// //instead of single single,we just apply event listener to grandparent,as event listener returns us object,that is useful for us

// //doing same work for previous one
// parent.addEventListener("click", (e) => {
//     // console.log(e.target);
//     e.target.textContent = event.target.dataset.text;
// })
// ⚠️ removing in such a way is not better,function references are not same
// parent.removeEventListener("click", (e) => {
//     // console.log(e.target);
//     e.target.textContent = event.target.dataset.text;
// })


// instead use this approach 👇
function handleCheck(e) {
    e.target.textContent = e.target.dataset.text;
    parent.removeEventListener("click", handleCheck)
}
parent.addEventListener("click", handleCheck);
// parent.removeEventListener("click",handleCheck)