import React, { useEffect, useState } from "react";
import "./CountryDetail.css";

export default function CountryDetail() {
  const countryName = new URLSearchParams(location.search).get("name");
  // console.log(countryName);
  const [CountryData, setCountryData] = useState(null);
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then((res) => res.json())
      .then(([data]) => {
        console.log(data);
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
          currencies: Object.values(data.currencies)[0].name,
          languages: Object.values(data.languages).join(", "),
          borders: Object.values(data.borders).join(", "),
        });
      });
  }, []);

  return CountryData === null ? (
    "loading...."
  ) : (
    <main>
      <div className="country-details-container">
        <span className="back-button">
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
                <b>Capital: {CountryData.capital}</b>
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

            <div className="border-countries">
              <b>Border Countries:</b> {CountryData.borders}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
