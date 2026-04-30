import React from "react";

export default function ContextMenu({
  menuPosition,
  setExpense,
  setMenuPosition,
  setExpenses,
  rowID,
  expenses,
  setEditingRowID,
}) {
  if (!menuPosition.left) return;
  return (
    <div className="context-menu" style={menuPosition}>
      <div
        onClick={() => {
          const foundExpense = expenses.find((e) => e.id === rowID);
          console.log(foundExpense);
          if (foundExpense) {
            setExpense({
              ...foundExpense,
              category: foundExpense.category.toLowerCase(),
            });
            setEditingRowID(rowID);
          }
          setMenuPosition({});
        }}
      >
        Edit
      </div>
      <div
        onClick={() => {
          setExpenses((prevstate) =>
            prevstate.filter((expense) => expense.id !== rowID),
          );
          setMenuPosition({});
        }}
      >
        Delete
      </div>
    </div>
  );
}
