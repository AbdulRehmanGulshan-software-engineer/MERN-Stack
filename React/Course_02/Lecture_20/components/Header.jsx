import React, { useState } from "react";
// import { ThemeContext } from "../Contexts/ThemeContext";
import { useTheme } from "../hooks/useTheme";

export default function Header({ theme }) {
  const [isDark, setIsDark] = useTheme();
  // const [isDark, setIsDark] = theme;

  // console.log(JSON.parse(localStorage.getItem('isDarkMode')))

  // if (isDark) {
  //   document.body.classList.add("dark");
  // } else {
  //   document.body.classList.remove("dark");
  // }

  return (
    <>
      <header className={`header-container ${isDark ? "dark" : ""}`}>
        <div className="header-content">
          <h2 className="title">
            <a href="/">Where in the world?</a>
          </h2>
          <p
            className="theme-changer"
            onClick={() => {
              setIsDark(!isDark);
              localStorage.setItem("isDarkMode", !isDark);
            }}
          >
            <i className={`fa-solid fa-${isDark ? "sun" : "moon"}`}></i>
            &nbsp;&nbsp;{isDark ? "Dark" : "Light"} Mode
          </p>
        </div>
      </header>
    </>
  );
}
