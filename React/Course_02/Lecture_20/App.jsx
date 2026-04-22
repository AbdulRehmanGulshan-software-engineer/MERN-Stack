import React, { useState } from "react";
import Header from "./components/Header";
import "./App.css";
import SearchBar from "./components/SearchBar";
import SearchMenu from "./components/SearchMenu";
import CountriesList from "./components/CountriesList";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { ThemeContext, ThemeProvider } from "./Contexts/ThemeContext";

export default function App() {
  const [isDark, setIsDark] = useState(
    JSON.parse(localStorage.getItem("isDarkMode")),
  );
  const [search, setSearch] = useState("");
  return (
    <ThemeProvider>
      <Header theme={[isDark, setIsDark]} />
      <Outlet context={[isDark, setIsDark]} />
    </ThemeProvider>
    /* <Header /> */
    /* <main>
        <div className="search-filter-container">
          <SearchBar search={search} setSearch={setSearch} />
          <SearchMenu />
        </div>
        {search === "unmoun t" ? "" : <CountriesList search={search} />}
      </main> */
  );
}
