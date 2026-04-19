import React, { useState } from "react";
import "../App.css";
import SearchBar from "./SearchBar";
import SearchMenu from "./SearchMenu";
import CountriesList from "./CountriesList";
import { useState } from "react";

export default function Home() {
  const [search, setSearch] = useState("");

  return (
    <main>
      <div className="search-filter-container">
        <SearchBar search={search} setSearch={setSearch} />
        <SearchMenu />
      </div>
      {search === "unmount" ? "" : <CountriesList search={search} />}
    </main>
  );
}
