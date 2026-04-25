import React, { useState } from "react";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm.jsx";
import ExpenseTable from "./components/ExpenseTable.jsx";
import expenseData from "./expenseData.js";

export default function App() {
  const [expenses, setExpenses] = useState(expenseData);

  return (
    <>
      <main>
        <h1>Track Your Expense</h1>
        <ExpenseForm setExpenses={setExpenses} />
        <ExpenseTable expenses={expenses} />
      </main>
    </>
  );
}
