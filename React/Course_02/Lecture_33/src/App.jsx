import React, { useState } from "react";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm.jsx";
import ExpenseTable from "./components/ExpenseTable.jsx";
import expenseData from "./expenseData.js";

export default function App() {
  const [expense, setExpense] = useState({
    title: "",
    category: "",
    amount: "",
  });
  const [expenses, setExpenses] = useState(expenseData);
  const [editingRowID, setEditingRowID] = useState("");

  return (
    <>
      <main>
        <h1>Track Your Expense</h1>
        <ExpenseForm
          setExpenses={setExpenses}
          expense={expense}
          setExpense={setExpense}
          editingRowID={editingRowID}
          setEditingRowID={setEditingRowID}
        />
        <ExpenseTable
          expenses={expenses}
          setExpense={setExpense}
          setExpenses={setExpenses}
          setEditingRowID={setEditingRowID}
        />
      </main>
    </>
  );
}
