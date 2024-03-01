import { useState } from "react";
import "./App.css";
import MultiLevelMenu from "./components/MultiLevelMenu";

function App() {
  const countriesWithCities = [
    {
      country: "USA",
      cities: ["New York", "Los Angeles", "Chicago", "Houston"],
    },
    {
      country: "Canada",
      cities: ["Toronto", "Montreal", "Vancouver", "Calgary"],
    },
    {
      country: "United Kingdom",
      cities: ["London", "Manchester", "Birmingham", "Glasgow"],
    },
    // Add more countries and cities as needed
  ];
  const [country, setCountry] = useState([]);
  const [select, setSelect] = useState(false);
  const [selectedCities, setSelectedCities] = useState([]);

  const handleCountry = (e) => {
    const selectedCountry = e.target.value;
    const cities =
      countriesWithCities.find((item) => item.country === selectedCountry)
        ?.cities || [];
    console.log(e.target.value);
    setSelectedCities(cities);
    setCountry(selectedCountry);
    if (selectedCountry === "") {
      setSelect(false);
    } else {
      setSelect(true);
    }
  };
  return (
    <>
      {/* <h1>MultiLevelMenu</h1>
      <MultiLevelMenu /> */}
      <select onChange={handleCountry}>
        <option value={""}>Select Your City :- </option>
        {countriesWithCities.map((item, index) => {
          return (
            <option value={item.country} key={index}>
              {item.country}
            </option>
          );
        })}
      </select>
      {select ? (
        <select>
          <option>Select your city :- </option>
          {selectedCities.map((city, index) => {
            return (
              <option value={city} key={index}>
                {city}
              </option>
            );
          })}
        </select>
      ) : null}
    </>
  );
}

export default App;
