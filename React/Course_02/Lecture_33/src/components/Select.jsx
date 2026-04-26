import React from "react";
import "../App.css";

export default function Select({
  label,
  id,
  name,
  value,
  onChange,
  error,
  firstOption,
  options,
}) {
  return (
    <div className="input-container">
      <label htmlFor={id}>{label}</label>
      <select
        // ref={categoryRef}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
      >
        <option value="" hidden>
          {firstOption}
        </option>
        {Object.entries(options).map(([key, value]) => (
          <option key={key} value={key}>
            {value}
          </option>
        ))}{" "}
      </select>
      <p className="error">{error}</p>
    </div>
  );
}
