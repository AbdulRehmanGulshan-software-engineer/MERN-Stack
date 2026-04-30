import React, { useEffect, useRef, useState } from "react";
import "../App.css";
import Input from "./input";
import Select from "./Select";

export default function ({
  setExpenses,
  expense,
  setExpense,
  editingRowID,
  setEditingRowID,
}) {
  // const titleRef = useRef(null);
  // const categoryRef = useRef(null);
  // const amountRef = useRef(null);

  // useEffect(() => {
  //   console.log(titleRef);
  // });

  const [errors, setErrors] = useState({});
  const errorsData = {};

  const validationConfig = {
    title: [
      { required: true, message: "Please enter title" },
      { minLength: 5, message: "Title should be at least 5 characters long" },
    ],
    category: [{ required: true, message: "Please select category" }],
    amount: [
      {
        required: true,
        message: "Please enter an amount",
      },
      {
        pattern: /^[1-9]\d*$/,
        message: "Please enter a valid number",
      },
    ],
  };
  //loop on formData
  Object.entries(expense || {}).forEach(([key, value]) => {
    validationConfig[key]?.forEach((rule) => {
      if (rule.required && !value) {
        errorsData[key] = rule.message;
      }
      if (rule.minLength && value.length > 0 && value.length < 5) {
        errorsData[key] = rule.message;
      }
      if (rule.pattern && value) {
        if (!rule.pattern.test(value)) {
          errorsData[key] = rule.message;
        }
      }
    });
  });

  //validation function
  const validate = (FormData) => {
    setErrors(errorsData);
    return errorsData;
  };

  //submit handler function
  const handleSubmit = (e) => {
    e.preventDefault();

    // setExpenses((prevState) => [
    //   ...prevState,
    //   {
    //     title: titleRef.current.value,
    //     category: categoryRef.current.value,
    //     amount: Number(amountRef.current.value),
    //   },
    // ]);

    const validateResult = validate(expense);
    if (Object.keys(validateResult).length) return;

    if (editingRowID) {
      setExpenses((prevState) =>
        prevState.map((prevExpense) => {
          if (prevExpense.id === editingRowID) {
            return { ...expense, id: editingRowID };
          }
          return prevExpense;
        }),
      );
      setEditingRowID("");
      return;
    }

    setExpenses((prevState) => [
      ...prevState,
      { ...expense, amount: Number(expense.amount), id: crypto.randomUUID() },
    ]);
    setExpense({
      title: "",
      category: "",
      amount: "",
    });
  };

  // console.log(expense);

  const handleChange = (e) => {
    // console.log(e.target);
    const { name, value } = e.target;
    if (name == "amount") {
      setExpense((prevState) => ({
        ...prevState,
        [name]: value,
      }));
      return;
    }
    setExpense((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setErrors({});
  };
  return (
    <>
      <form className="expense-form" onSubmit={handleSubmit}>
        <Input
          label="Title"
          id="title"
          name="title"
          value={expense.title}
          onChange={handleChange}
          error={errors.title}
        ></Input>
        <Select
          id="category"
          name="category"
          value={expense.category}
          onChange={handleChange}
          error={errors.category}
          firstOption="Select Category"
          options={{
            grocery: "Grocery",
            clothes: "Clothes",
            bills: "Bills",
            education: "Education",
            medicine: "Medicine",
          }}
        ></Select>
        <Input
          label="Amount"
          id="amount"
          name="amount"
          value={expense.amount}
          onChange={handleChange}
          error={errors.amount}
        ></Input>
        <button className="add-btn">{editingRowID ? "Save" : "Add"}</button>
      </form>
    </>
  );
}
