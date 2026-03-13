// Notes : https://www.notion.so/Lecture-02-JSX-Babel-props-and-React-Component-2b13a78e0e22804797a1ef605cb2d3fb
// https://youtu.be/JdFUNKGwWLw?si=0K7ipnBa6E3yBn9S

//creating html element
// const element = React.createElement('h1', { id: 'title' }, "Hello Coder Army");
// const element2 = React.createElement('div', null, React.createElement('h1', null, "Hello World"), React.createElement('h2', null, "Big Gamez PUCIT"));

//does JS understand this ?? creating react element 👇
// JSX : javascript xml: Look like html
// but js cannot understand <,> so here came babeljs
const element = <h1 id="title" className="first">Hello Coder Army</h1>;       //will convert and store it as react element
// 👆 this is not pure HTMLAllCollection,we use className here instead of class
// ⚠️ will see how babel converts html to react

const root = ReactDOM.createRoot(document.getElementById('root'));
const element2 = (<div>
    <h1>Hello</h1>
    <h2>Big Gamez PUCIT</h2>
</div>)
// 👆 good habit to add () for start and end indication

// understand full flow 👇
// JSX --> React.createElement() --> React Element(JS Object,Virtual DOM) --> Real DOM(HTML Element)
//    babel                     React                                   ReactDOM

const element3 = (
    //must in one root,i used <div> here
    <div>
        <h1>Hello Coder Army</h1>
        <h2>How are you</h2>
    </div>
)

// //React component : function which returns JSX 👇
// function App(name) {
//     return (
//         <h2>Hello Coder Army {name}</h2>
//     )
// }

//can add JS expression/text inside curly braces 👇
// const element4 = <h1>Hello Coder {{name:"Abdul Rehman Gulshan",age:30}}</h1> //cannot use object
// number ,string ,array can used
//true,false,null,undefined cannot be used,will render but will display nothing on UI

const age = 10;
const isLoggedIn = true;
const element5 = <h1>Hello Coder {isLoggedIn ? <h2>Logged In</h2> : <h2>Kindly Sign In</h2>}</h1>
// const element5 = <h1>Hello Coder {age>10?"Adult":"Kid"}</h1>

const courses = ["HTML", "CSS", "Javascript", "React"];
// [<li>HTML</li>,<li>CSS</li>,<li>Javascript</li>,<li>React</li>]
const element7 = <ul>
    {/* map returns new modified array */}
    {courses.map(course => <li>{course}</li>)}
</ul>

const element6 = <h1>Hello Coder {<h2>Hi Gulshan Big Gamez PUCIT</h2>}</h1>
// root.render(element3);
// root.render(App("Gulshan"));  //first method to call
// root.render(<App/>)     //second method to call

function App(props) {
    return (
        <h1>Hello Coder Army {props.name} {props.age}</h1>
    )
}

//how we will pass argument in <App/> case 👇 as 30 is js we write it in {30},string is allowed without curly braces
const element8 = (<App name="Gulshan" age={30}></App>)
{/* babel will transform this jsx to function call ,,,, const element8 = <App name="Gulshan" age={30}><App/>  */ }
{/* now react createelement will create props object of that arguments */ }

//one edge case:style is given as object 👇
const ab = {
    backgroundColor: "olive",
    color: "white"
}
const element9 = (<h1 id="title" className="first" style={ab}>Hello Coder Army</h1>);

root.render(element9);