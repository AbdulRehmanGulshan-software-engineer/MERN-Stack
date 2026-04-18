import React from "react";
import Header from "./components/Header";
import "./App.css";
import SearchBar from "./components/SearchBar";
import SearchMenu from "./components/SearchMenu";
import CountriesList from "./components/CountriesList";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <div className="search-filter-container">
          <SearchBar />
          <SearchMenu />
        </div>
      </main>
      <CountriesList/>
    </>
  );
}
