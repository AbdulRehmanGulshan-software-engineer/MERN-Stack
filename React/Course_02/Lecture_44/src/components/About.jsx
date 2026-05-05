import React, { useState } from "react";

export default function About() {
  const [todosList, setTodosList] = useState([]);
  return (
    <>
      <h1 className="text-2xl caret-lime-500">This is about page</h1>
      <button
        onClick={() => {
          import("../data").then((module) => {
            setTodosList(module.todos);
          });
        }}
      >
        Load Data
      </button>
      <ul>
        {todosList.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </>
  );
}
