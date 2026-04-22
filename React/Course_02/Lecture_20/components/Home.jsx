import React, { useContext, useState } from "react";
import "../App.css";
import SearchBar from "./SearchBar";
import SearchMenu from "./SearchMenu";
import CountriesList from "./CountriesList";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { ThemeContext } from "../Contexts/ThemeContext";

export default function Home() {
  const [search, setSearch] = useState("");
  // const [isDark] = useOutletContext();
  // console.log(isDark);

  const [isDark] = useContext(ThemeContext); 
  console.log([isDark]);

  return (
    <main className={`${isDark ? "dark" : ""}`}>
      <div className="search-filter-container">
        <SearchBar search={search} setSearch={setSearch} />
        <SearchMenu />
      </div>
      {search === "unmount" ? "" : <CountriesList search={search} />}
    </main>
  );
}
