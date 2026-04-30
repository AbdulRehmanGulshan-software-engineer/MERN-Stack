import React from "react";

export default function ContextMenu({
  menuPosition,
  setMenuPosition,
  setExpenses,
  rowID,
}) {
  if (!menuPosition.left) return;
  return (
    <div className="context-menu" style={menuPosition}>
      <div
        onClick={() => {
        //   console.log("Editing");
          setMenuPosition({});
        }}
      >
        Edit
      </div>
      <div
        onClick={() => {
            setExpenses((prevstate)=> prevstate.filter(expense => expense.id !== rowID))
          setMenuPosition({});
        }}
      >
        Delete
      </div>
    </div>
  );
}
