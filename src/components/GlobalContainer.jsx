import React from "react";
const BASE = import.meta.env.BASE_URL;

function GlobalContainer(props) {
  return (
    <section className="global-container">
      {/* if day : call getWeatherIcon, if night : display moon icon */}
      <img
        src={
          props.isNight(props.data) === false
            ? props.getWeatherIcon(props.data.weather[0].main)
            : `${BASE}/icons/moon.svg`
        }
        alt="weather icon"
      />

      {/* display weather details */}
      <div className="details">
        <h2 className="weather-status">{props.data.weather[0].description}</h2>
        <span className="temperature">
          {Math.round(props.data.main.temp - 273.15)}°C
        </span>
        <p className="date-of-day">
          {new Date(props.data.dt * 1000).toLocaleDateString("en-GB", {
            weekday: "long",
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}
        </p>
      </div>
    </section>
  );
}

export default GlobalContainer;
