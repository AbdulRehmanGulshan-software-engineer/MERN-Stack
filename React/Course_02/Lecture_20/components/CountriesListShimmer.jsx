import React from "react";
import "./CountriesListShimmer.css";

export default function CountriesListShimmer() {
  //   const array = new Array(10).fill(undefined);      //first method
  // const arr = Array.from({length:10},()=>0)    //second method: initiated with 0
  //   const arr = Array.from({ length: 10 }); //undefined by default
  const mapped = Array.from({ length: 10 }).map((element, i) => {
    return <div key={i} className="country-card shimmer-card"></div>;
  });
  return <div className="countries-container">{mapped}</div>;
}
