import React, { useEffect, useState } from "react";
import "./CountryDetail.css";
import { Link, useLocation, useParams } from "react-router-dom";
// import { useOutletContext } from "react-router-dom";
// import { ThemeContext } from "../Contexts/ThemeContext";
import { useWindowSize } from "../hooks/useWindowSize";
import { useTheme } from "../hooks/useTheme";

export default function CountryDetail() {
  // const [isDark] = useOutletContext();
  const [isDark] = useTheme();

  // // const countryName = new URLSearchParams(location.search).get("name");
  const params = useParams();
  const countryName = params.country;
  // console.log(countryName);

  //passing data logic here 👇
  const { state } = useLocation();
  // console.log(state);

  const [CountryData, setCountryData] = useState(null);
  const [NotFound, setNotFound] = useState(false);
  // console.log(CountryData);

  function updateCountryData(data) {
    setCountryData({
      alt: data.flags.alt,
      image: data.flags.svg,
      name: data.name.common,
      nativeName: Object.values(data.name.nativeName)[0].common,
      population: data.population,
      region: data.region,
      subregion: data.subregion,
      capital: data.capital,
      tld: data.tld[0],
      currencies: Object.values(data.currencies)
        .map((currency) => currency.name)
        .join(", "),
      languages: Object.values(data.languages).join(", "),
      // borders: Object.values(data.borders).join(", "),
      borders: [],
    });

    if (!data.borders) {
      data.borders = [];
    }

    Promise.all(
      data.borders.map((border) => {
        return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
          .then((res) => res.json())
          .then(([borderCountry]) => borderCountry.name.common);
      }),
    ).then((borders) => {
      setCountryData((prevState) => ({
        ...prevState,
        borders,
      }));
      // console.log(allBordersName);
    });
  }

  useEffect(() => {
    if (state) {
      updateCountryData(state);
      return;
    }

    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then((res) => res.json())
      .then(([data]) => {
        // console.log(data);
        updateCountryData(data);
      })
      .catch((err) => {
        console.log(err);
        setNotFound(true);
      });
  }, [countryName]);

  if (NotFound) {
    return <div>Country Not Found</div>;
  }

  return CountryData === null ? (
    "loading...."
  ) : (
    <main className={`${isDark ? "dark" : ""}`}>
      <div className="country-details-container">
        <span className="back-button" onClick={() => history.back()}>
          <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
        </span>

        <div className="country-details">
          <img src={CountryData.image} alt={CountryData.alt} />

          <div className="details-text-container">
            <h1>{CountryData.name}</h1>

            <div className="details-text">
              <p>
                <b>Native Name: {CountryData.nativeName}</b>
              </p>

              <p>
                <b>Population: {CountryData.population}</b>
              </p>

              <p>
                <b>Region: {CountryData.region}</b>
              </p>

              <p>
                <b>Sub Region: {CountryData.subregion}</b>
              </p>

              <p>
                <b>Capital: {CountryData.capital.join(", ")}</b>
              </p>

              <p>
                <b>Top Level Domain: {CountryData.tld}</b>
              </p>

              <p>
                <b>Currencies: {CountryData.currencies}</b>
              </p>

              <p>
                <b>Languages: {CountryData.languages}</b>
              </p>
            </div>
            {CountryData.borders.length !== 0 && (
              <div className="border-countries">
                <b>Border Countries:</b>
                {/* {CountryData.borders} */}
                {CountryData.borders.map((border) => (
                  <Link key={border} to={`/${border}`}>
                    {border}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
