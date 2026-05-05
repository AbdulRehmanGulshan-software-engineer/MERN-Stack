import React from "react";
import NewCounter from "./NewCounter";
import OldCounter from "./OldCounter";

export default function Home() {
  return (
    <>
      <div className="text-2xl caret-lime-50">This is home page</div>
      <NewCounter name="New Counter"></NewCounter>
      <OldCounter name="Old Counter"/>
    </>
  );
}
