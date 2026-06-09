import React from "react";
import axios from "axios";

const bestPractice = () => {
  const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    auth: "12345678",
  });

  const fetchUsers = async () => {
    const { data } = await api.get("/users");
    setUsers(data);
  };

  return <div>bestPractice</div>;
};

export default bestPractice;
