import React from "react";
import "./index.css";
import axios from "axios";

const fetchData = async () => {
  // const response = await fetch("https://jsonplaceholder.typicode.com/users");
  // const data = await response.json();
  // console.log(data);

  // fetch("https://jsonplaceholder.typicode.com/users")
  // .then((response)=>response.json())
  // .then(data => console.log(data))


  // Using Axios
  const data = await axios.get('https://jsonplaceholder.typicode.com/users')
  console.log(data)

};

const App = () => {
  return (
    <>
      <h1 className="bg-red-500">Hello</h1>
      <button onClick={fetchData}>Fetch Data</button>
    </>
  );
};

export default App;
