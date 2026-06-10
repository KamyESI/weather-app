import React from "react";

function Header(props) {
  const { data, isNight, getBackground, handleSubmit } = props;

  return (
    <header
      /* apply background class based on weather condition */
      className={
        data
          ? isNight(data)
            ? "night"
            : getBackground(data.weather[0].main)
          : ""
      }
    >
      {/* if data found display city name otherwise display default "weather app"*/}
      <h1>{data ? data.name : "Weather App"}</h1>

      {/* form to allow user to search for a city */}
      <form onSubmit={handleSubmit}>
        <input
          className="city-name"
          type="text"
          placeholder="Enter city name"
        />
        <button type="submit">Search</button>
      </form>

      {/* display current time for searched city */}
      <span className="current-time">
        {data &&
          new Date((data.dt + data.timezone) * 1000).toLocaleTimeString(
            "en-GB",
            {
              hour: "2-digit",
              minute: "2-digit",
              hour12: false,
              timeZone: "UTC",
            },
          )}
      </span>
    </header>
  );
}

export default Header;
