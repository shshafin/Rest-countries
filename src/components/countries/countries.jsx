import { useEffect } from "react";
import { useState } from "react";
import Country from "./country/country";
import "./countries.css";

const Countries = () => {
  // state
  const [countries, setCountries] = useState([]);
  const [visitedCountry, setVisitedCountry] = useState([]);
  const [visitedFlag, setVisitedFlag] = useState([]);

  //   handle name
  const handleVisitedCountry = (country) => {
    const newVisitedCountry = [...visitedCountry, country];
    setVisitedCountry(newVisitedCountry);
  };
  //   handle flag
  const handleFlag = (flag) => {
    const newVisitedFlag = [...visitedFlag, flag];
    setVisitedFlag(newVisitedFlag);
  };

  //   data load
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <div>
      <h3>Countries: {countries.length} </h3>

      {/* display visited country */}
      <div>
        <ul>
          {visitedCountry.map((country) => (
            <li key={country.cca3}>{country}</li>
          ))}
        </ul>
        <ul>
          {visitedFlag.map((flag, idx) => (
            <img className="flag-container" key={idx} src={flag}></img>
          ))}
        </ul>
      </div>
      {/* display visited country */}

      <div className="countries-container">
        {countries.map((country) => (
          <Country
            key={country.cca3}
            handleVisitedCountry={handleVisitedCountry}
            handleFlag={handleFlag}
            country={country}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
