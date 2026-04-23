import { useState, useEffect } from "react";

export function useFilter(search) {
    //fetch
    const [countriesData, setCountriesData] = useState([]);
    useEffect(() => {
        fetch(
            "https://restcountries.com/v3.1/all?fields=name,flags,population,region,subregion,capital,tld,currencies,languages,borders",
        )
            .then((res) => {
                if (!res.ok) {
                    throw new Error("HTTP error: " + res.status);
                } return res.json();
            })
            .then((data) => {
                setCountriesData(data);
            })
            .catch((err) => console.error("Fetch Error:", err));
    }, []);

    //compare with given data
    const filteredData = countriesData.filter((country) =>
        country.name.common.toLowerCase().includes(search.toLowerCase()),
    );

    // return filtered array and setQuery function
    return filteredData

}