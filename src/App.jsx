import { useState, useEffect } from "react";

import { getWeatherIcon, getBackground, isNight } from "./utils";
import Header from "./components/Header";
import MainContent from "./components/MainContent";

function App() {
  const [data, setData] = useState(null); /* data about searched city */
  const [city, setCity] = useState("Bouira"); /* city name */
  const [loading, setLoading] = useState(true); /* loading state */
  const [error, setError] = useState(""); /* handle error message */
  const [forecast, setForecast] = useState(null); /* 5-days forecast data */

  /* Fetch weather data when city changes, sets loading state, verify city code and sets error state */
  useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5c9c1ea0563455fdbfbc046dca5d8af8`,
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.cod === "404") {
          setError("City not found. Please try again.");
          setLoading(false);
          setData((data) => null);
        } else {
          setError("");
          setData(data);
          setLoading(false);
          console.log("Weather data:");
          console.log(data);
        }
      });
  }, [city]);

  /* fetch weather 5-days forecast */
  useEffect(() => {
    if (data) {
      fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=5c9c1ea0563455fdbfbc046dca5d8af8`,
      )
        .then((response) => response.json())
        .then((forecastData) => {
          setForecast(forecastData);
          console.log("Forecast data:");
          console.log(forecastData);
        });
    }
  }, [city]);

  /* Handle form submission */
  function handleSubmit(event) {
    event.preventDefault();
    setCity(event.target.elements[0].value);
    event.target.elements[0].value = "";
  }

  return (
    <>
      <Header
        data={data}
        isNight={isNight}
        getBackground={getBackground}
        handleSubmit={handleSubmit}
      />

      {/* if still loading or error display messages otherwise show weather details of searched city */}

      {loading || error ? (
        <>
          {loading && <p className="loading">⏳ Loading weather...</p>}
          {error && <p className="error">{error}</p>}
        </>
      ) : (
        <MainContent
          data={data}
          isNight={isNight}
          getWeatherIcon={getWeatherIcon}
          getBackground={getBackground}
          forecast={forecast}
        />
      )}
    </>
  );
}

export default App;
