import { useState } from "react";
import "./country.css";

const Country = ({ country, handleVisitedCountry, handleFlag }) => {
  const { name, flags } = country;
  console.log(country);
  // state
  const [visited, setVisited] = useState(false);

  //   handle
  const handleVisited = () => {
    setVisited(!visited);
  };

  return (
    <div
      style={{ background: visited && "tomato" }}
      className="country-container"
    >
      <h3 style={{ color: visited ? "purple" : "blue" }}>
        name: {name.common}{" "}
      </h3>

      <img src={flags.png} alt="" />
      <button onClick={handleVisited}>Visited</button>
      {visited ? " yes visited " : " I want to visit "}

      <button onClick={() => handleVisitedCountry(country.name.common)}>
        mark visited
      </button>

      <button onClick={() => handleFlag(country.flags.png)}>Flag</button>
    </div>
  );
};

export default Country;
