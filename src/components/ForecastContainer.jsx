import React from "react";

function ForecastContainer(props) {
  return (
    <section className="forecast-container">
      {props.forecast?.list
        .filter((item) => item.dt_txt.includes("12:00:00"))
        ?.map((day) => (
          <div key={day.dt} className="day-of-week">
            <p className="day">
              {new Date(day.dt * 1000).toLocaleDateString("en-US", {
                weekday: "long",
              })}
            </p>

            <img
              src={props.getWeatherIcon(day.weather[0].main)}
              alt={day.weather[0].description}
              width={70}
            />

            <p className="temp">{Math.round(day.main.temp - 273.15)}°C</p>
          </div>
        ))}
    </section>
  );
}

export default ForecastContainer;
