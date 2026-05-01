import React, { useState } from "react";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm.jsx";
import ExpenseTable from "./components/ExpenseTable.jsx";
import expenseData from "./expenseData.js";
import { useLOcalStorage } from "../hooks/useLocalStorage.js";

export default function App() {
  const [expense, setExpense] = useLOcalStorage('expense',{
    title: "",
    category: "",
    amount: "",
  });
  const [expenses, setExpenses] = useLOcalStorage("expenses", expenseData);
  const [editingRowID, setEditingRowID] = useLOcalStorage("editingRowID", "");

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
