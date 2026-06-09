import React from "react";
import "./index.css";
import axios from 'axios'

const App = () => {

  const config = {
    url: 'https://jsonplaceholder.typicode.com/users',
    headers: {
      Accept: 'application/json',
      // 'Content-Type' : 'application/json',
      Authority: 'Bearer maryamRaza'
    },
    timeout:'1000',
    params: {
      name: 'abdul9012',
      age: 21
    }
  };

  const fetchData = async () => {
    const response = await axios(config)
    console.log(response)
  };

  return (
    <div>
      <button onClick={fetchData}>Fetch Data</button>
    </div>
  );
};

export default App;
