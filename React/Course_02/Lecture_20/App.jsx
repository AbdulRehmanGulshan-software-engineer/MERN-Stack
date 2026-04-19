import React, { useState } from "react";
import Header from "./components/Header";
import "./App.css";
import SearchBar from "./components/SearchBar";
import SearchMenu from "./components/SearchMenu";
import CountriesList from "./components/CountriesList";
import { useState } from "react";

export default function App() {
  const [search, setSearch] = useState("");
  return (
    <>
      <Header />
      <main>
        <div className="search-filter-container">
          <SearchBar search={search} setSearch={setSearch} />
          <SearchMenu />
        </div>
      </main>
      {search === "unmount" ? "" : <CountriesList search={search} />}
    </>
  );
}
