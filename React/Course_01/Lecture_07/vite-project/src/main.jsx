import { createRoot } from "react-dom/client";
import App from "./App";

createRoot(document.getElementById("root")).render(
  <>
    <App />
  </>,
);

//Question : what if we pass function as a props,and we are giving this as argument to react.memo function.It will still re render it because passing function as prop changes its reference and react thinks object/argument/function changed.so solution is use useCallback to memorize that function
