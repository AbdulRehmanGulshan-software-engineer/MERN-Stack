import React, { useEffect, useState } from "react";
// import countriesData from "../countriesData";
import CountryCard from "./CountryCard";

export default function CountriesList({ search }) {
  //using use effect to avoid refetching
  const [countriesData, setCountriesData] = useState([]);
  useEffect(() => {
    fetch(
      "https://restcountries.com/v3.1/all?fields=name,flags,population,region",
    )
      .then((res) => res.json())
      .then((data) => {
        setCountriesData(data);
      });
    const intervalID = setInterval(() => {
      console.log("running countries component");
    }, 1000);
    // console.log(intervalID);
    return () => {
      clearInterval(intervalID) 
      // console.log("cleaning up");
    };
  }, []);
  // //fetching data through api 👇
  // const [countriesData, setCountriesData] = useState([]);
  // if (countriesData.length === 0) {
  //   fetch(
  //     "https://restcountries.com/v3.1/all?fields=name,flags,population,region",
  //   )
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setCountriesData(data);
  //     });
  // }

  const filteredData = countriesData.filter((country) =>
    country.name.common.toLowerCase().includes(search.toLowerCase()),
  );
  // const array = [
  //   <CountryCard />,
  //   <CountryCard />,
  //   <CountryCard />,
  //   <CountryCard />,
  //   <CountryCard />,
  // ];
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
      />
    );
  });

  // console.log(array);
  return (
    <>
      <button onClick={() => setCountriesData([])}>Remove all countries</button>
      <div className="countries-container">{array}</div>
    </>
  );
}
