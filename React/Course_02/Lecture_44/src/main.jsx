import { lazy, StrictMode } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Home from "./components/Home.jsx";
// import About from "./components/About.jsx";
// import Contact from "./components/Contact.jsx";

// const About = lazy(() => import("./components/About.jsx"));
const About = lazy(() =>
  wait(1000).then(() => import("./components/About.jsx")),
);

const Contact = lazy(() =>
  import("./components/Contact.jsx").then((module) => {
    return { default: module.Contact };
  }),
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: "true", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

const wait = (time) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
