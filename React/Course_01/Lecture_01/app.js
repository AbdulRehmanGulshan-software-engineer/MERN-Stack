//Lecture Notes : https://www.notion.so/Lecture-01-Introduction-To-React-2b03a78e0e2280c6b345f2ee06dc25de?source=copy_link


// // problem statement : create h1 element with the help of javascript 👇
// const element1 = document.createElement('h1');
// element1.textContent = "Hello Coder Army";
// element1.className = 'element';
// element1.id = 'first';
// element1.style.fontSize = "30px";
// element1.style.backgroundColor = "orange";
// element1.style.color = "white";

// //i have to create new element h2 👇
// const element2 = document.createElement('h2');
// element2.textContent = "Big Gamez PUCIT";
// element2.className = 'element';
// element2.id = 'second';
// // element2.style.fontSize = "20px";
// // element2.style.backgroundColor = "pink";
// // element2.style.color = "green";

//magic of react 👇 making custom react
// const React = {
//     // create function (reusable) 👇
//     createElement: function (tag, attributes, children) {
//         const element = document.createElement(tag);
//         element.textContent = children;
//         for (const key in attributes) {
//             if (key === 'style') {
//                 Object.assign(element.style, attributes.style);
//             }
//             else {
//                 element[key] = attributes[key];  // same as element.className = "element"   // same as element.id = "first"
//             }
//         }
//         return element;
//     }
// }

// const ReactDOM = {
//     render: function (child, parent) {
//         parent.append(child);
//     }
// }

// //original react 👇
// const React = {
//     createElement: function (type, props, children) {
//         return {
//             type: type,
//             props: {
//                 ...props,
//                 children: children
//             }
//         }

//     }
// }

// //it will create object for us like 👇 just for concepts
// const reactElement = {
//     type:'h1',
//     props:{
//         className:"element",
//         id:"first",
//         style:{fontSize:"30px",backgroundColor:"orange",color:"white"},
//         children: "Hello Coder Army"
//     }
// }

// //creating rendering engine 👇
// const ReactDOM = {
//     render: function (reactElement, rootElement) {
//         //first clear previous element content
//         rootElement.innerHTML = '';
//         const element = document.createElement(reactElement.type);
//         // element.textContent = reactElement.props.children;
//         // instead of manually do iteration
//         const { props } = reactElement;   //taken props from react element ,,, const props = reactElement.props;
//         for (const key in props) {
//             if (key === 'style') {
//                 Object.assign(element.style, props.style);
//             }
//             else if (key === 'children') {
//                 element.textContent = props[key];
//             }
//             else {
//                 element[key] = props[key];
//             }
//         }
//         rootElement.append(element);
//     }
// }

const element1 = React.createElement("h1", { className: "element", id: "first", style: { fontSize: "20px", backgroundColor: "olive", color: "black" } }, "Hello Coder Army");
const element2 = React.createElement("h2", { className: "element", id: "second", style: { fontSize: "20px", backgroundColor: "pink", color: "green" } }, "Big Gamezz PUCIT");

// console.log(element1);

// const root = document.getElementById('root');

// console.log(element1);

// root.append(element1);
// ReactDOM.render(element1, root);        //it will first remove previous present
// root.append(element2);
// ReactDOM.render(element2, root);

//what if i want both element in one ? 👇
const div = React.createElement('div',null,element1,element2);
//render was old method,no longer supported 👇
// ReactDOM.render(div,root);
// latest method 👇
//main container to render react elements
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(div);