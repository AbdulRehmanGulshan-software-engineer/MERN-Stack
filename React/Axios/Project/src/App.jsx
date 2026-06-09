import React, { useEffect, useState } from "react";
import "./index.css";
import axios from "axios";

const App = () => {
  const [users, setUsers] = useState([]);
  const [formDetails, setFormDetails] = useState({
    name: "",
    age: "",
  });

  // Interceptors
  axios.interceptors.request.use((config) => {
    console.log(config.headers);
    return config;
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormDetails((prevDetails) => {
      return {
        ...prevDetails,
        [name]: value,
      };
    });
  };

  const fetchData = async () => {
    const response = await axios({
      url: "https://6a27c6454e1e783349a45d86.mockapi.io/users",
    });
    setUsers(response.data);
  };

  const postData = async () => {
    await axios({
      url: "https://6a27c6454e1e783349a45d86.mockapi.io/users",
      method: "post",
      data: formDetails,
    });
    setFormDetails({
      name: "",
      age: "",
    });
    fetchData();
  };

  const editData = async () => {
    await axios({
      url: `https://6a27c6454e1e783349a45d86.mockapi.io/users/${formDetails.id}`,
      method: "put",
      data: formDetails,
    });
    setFormDetails({
      name: "",
      age: "",
      editMode: false,
    });
    fetchData();
  };

  const handleEditClick = (userDetails) => {
    setFormDetails({
      ...userDetails,
      editMode: true,
    });
  };

  const deleteUser = async (id) => {
    await axios({
      url: `https://6a27c6454e1e783349a45d86.mockapi.io/users/${id}`,
      method: "delete",
    });
    fetchData();
  };

  // Auto Refresh Fetch Data
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="flex flex-row justify-center p-23 gap-12">
        <button
          onClick={fetchData}
          className="rounded bg-gray-700 p-3 text-white hover:bg-gray-500 transition-all"
        >
          Fetch Data
        </button>

        {/* Form For Post Request */}
        <input
          type="text"
          placeholder="Enter Name"
          name="name"
          onChange={handleOnChange}
          value={formDetails.name}
        />
        <input
          type="number"
          placeholder="Enter Age"
          name="age"
          onChange={handleOnChange}
          value={formDetails.age}
        />

        {/* Edit/Post Data Button */}
        {formDetails.editMode ? (
          <button
            onClick={editData}
            className="rounded bg-gray-700 p-3 text-white  hover:bg-gray-500 transition-all"
          >
            Edit Data
          </button>
        ) : (
          <button
            onClick={postData}
            className="rounded bg-gray-700 p-3 text-white  hover:bg-gray-500 transition-all"
          >
            Post Data
          </button>
        )}
      </div>

      {users.map((userDetails) => (
        <div key={userDetails.id} className="bg-gray-200 my-3">
          <p>Name: {userDetails.name}</p>
          <p>Age: {userDetails.age}</p>
          <div className="flex flex-col">
            <button onClick={() => handleEditClick(userDetails)}>Edit</button>
            <button onClick={() => deleteUser(userDetails.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
