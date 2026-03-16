import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Counter from "./Counter.jsx";
import List from "./List.jsx";
import Clock from "./Clock.jsx";

createRoot(document.getElementById("root")).render(
  <>
    {/* <App></App> */}
    {/* <Counter></Counter> */}
    {/* <List></List> */}
    <Clock></Clock>
  </>,
);
