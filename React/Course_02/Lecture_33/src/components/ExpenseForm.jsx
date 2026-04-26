import React, { useEffect, useRef, useState } from "react";
import "../App.css";

export default function ({ setExpenses }) {
  //single state controlling all three
  const [expense, setExpense] = useState({
    title: "",
    category: "",
    amount: "",
  });

  // const titleRef = useRef(null);
  // const categoryRef = useRef(null);
  // const amountRef = useRef(null);

  // useEffect(() => {
  //   console.log(titleRef);
  // });

  const [errors, setErrors] = useState({});

  //validation function
  const validate = (FormData) => {
    const errorsData = {};
    if (!FormData.title) {
      errorsData.title = "*Title is required";
    }
    if (!FormData.category) {
      errorsData.category = "*Category is required";
    }
    if (!FormData.amount) {
      errorsData.amount = "*Amount is required";
    }
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

    setExpenses((prevState) => [
      ...prevState,
      { ...expense, id: crypto.randomUUID() },
    ]);
    setExpense({
      title: "",
      category: "",
      amount: "",
    });
  };

  console.log(expense);

  const handleChange = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    setExpense((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setErrors({});
  };
  return (
    <>
      <form className="expense-form" onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="title">Title</label>
          <input
            // ref={titleRef}
            id="title"
            name="title"
            value={expense.title}
            onChange={handleChange}
          />
          <p className="error">{errors.title}</p>
        </div>
        <div className="input-container">
          <label htmlFor="category">Category</label>
          <select
            // ref={categoryRef}
            id="category"
            name="category"
            value={expense.category}
            onChange={(e) =>
              setExpense((prevState) => ({
                ...prevState,
                category: e.target.value,
              }))
            }
          >
            <option value="" hidden>
              Select Category
            </option>
            <option value="grocery">Grocery</option>
            <option value="clothes">Clothes</option>
            <option value="bills">Bills</option>
            <option value="education">Education</option>
            <option value="medicine">Medicine</option>
          </select>
          <p className="error">{errors.category}</p>
        </div>
        <div className="input-container">
          <label htmlFor="amount">Amount</label>
          <input
            // ref={amountRef}
            id="amount"
            name="amount"
            value={expense.amount}
            onChange={(e) =>
              setExpense((prevState) => ({
                ...prevState,
                amount: Number(e.target.value),
              }))
            }
          />
          <p className="error">{errors.amount}</p>
        </div>
        <button className="add-btn">Add</button>
      </form>
    </>
  );
}
