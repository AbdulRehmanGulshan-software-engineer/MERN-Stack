import React from "react";
import countriesData from "../countriesData";
import CountryCard from "./CountryCard";

export default function CountriesList() {
  // const array = [
  //   <CountryCard />,
  //   <CountryCard />,
  //   <CountryCard />,
  //   <CountryCard />,
  //   <CountryCard />,
  // ];
  const array = countriesData.map((country, i) => {
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
      />
    );
  });

  // console.log(array);
  return <div className="countries-container">{array}</div>;
}
