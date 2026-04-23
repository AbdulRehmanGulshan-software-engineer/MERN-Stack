import React, { useEffect, useState } from "react";
// import countriesData from "../countriesData";
import CountryCard from "./CountryCard";
import CountriesListShimmer from "./CountriesListShimmer";
import { useFilter } from "../hooks/useFilter";

export default function CountriesList({ search }) {

  // using useFilterHook
  const filteredData = useFilter(search);

  const array = filteredData.map((country, i) => {
    //giving key by this method is not good
    // console.log(country);
    return (
      <CountryCard
        key={i}
        name={country.name.common}
        flag={country.flags.svg}
        population={country.population}
        region={country.region}
        capital={country.name.official}
        data={country}
      />
    );
  });

  // console.log(array);
  return (
    <>
      {/* <button onClick={() => setCountriesData([])}>Remove all countries</button> */}
      {!filteredData.length ? (
        <CountriesListShimmer />
      ) : (
        <div className="countries-container">{array}</div>
      )}
    </>
  );
}
