import React, { useEffect, useRef, useState } from "react";
import "../App.css";

export default function ({ setExpenses }) {
  //single state controlling all three
  const [expense, setExpense] = useState({
    title: "",
    category: "",
    amount: "",
  });

  const titleRef = useRef(null);
  const categoryRef = useRef(null);
  const amountRef = useRef(null);

  useEffect(() => {
    console.log(titleRef);
  });

  //submit handler function
  const handleSubmit = (e) => {
    e.preventDefault();

    setExpenses((prevState) => [
      ...prevState,
      {
        title: titleRef.current.value,
        category: categoryRef.current.value,
        amount: amountRef.current.value,
      },
    ]);
    // setExpense({
    //   title: "",
    //   category: "",
    //   amount: "",
    // });
  };

  return (
    <>
      <form className="expense-form" onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="title">Title</label>
          <input
            ref={titleRef}
            id="title"
            name="title"
            // value={expense.title}
            // onChange={(e) =>
            //   setExpense((prevState) => ({
            //     ...prevState,
            //     title: e.target.value,
            //   }))
            // }
          />
        </div>
        <div className="input-container">
          <label htmlFor="category">Category</label>
          <select
            ref={categoryRef}
            id="category"
            name="category"
            // value={expense.category}
            // onChange={(e) =>
            //   setExpense((prevState) => ({
            //     ...prevState,
            //     category: e.target.value,
            //   }))
            // }
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
        </div>
        <div className="input-container">
          <label htmlFor="amount">Amount</label>
          <input
            ref={amountRef}
            id="amount"
            name="amount"
            // value={expense.amount}
            // onChange={(e) =>
            //   setExpense((prevState) => ({
            //     ...prevState,
            //     amount: e.target.value,
            //   }))
            // }
          />
        </div>
        <button className="add-btn">Add</button>
      </form>
    </>
  );
}
