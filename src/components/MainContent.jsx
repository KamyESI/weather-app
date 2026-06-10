import React from "react";
import GlobalContainer from "./GlobalContainer";
import DetailedContainer from "./DetailedContainer";
import SunContainer from "./SunContainer";
import ForecastContainer from "./ForecastContainer";

function MainContent({
  data,
  isNight,
  getWeatherIcon,
  getBackground,
  forecast,
}) {
  return (
    <main
      /* apply background class based on weather condition */
      className={
        data
          ? isNight(data)
            ? "night"
            : getBackground(data.weather[0].main)
          : ""
      }
    >
      <GlobalContainer
        data={data}
        isNight={isNight}
        getWeatherIcon={getWeatherIcon}
      />

      {/* show some detailed weather information about searched city */}
      <DetailedContainer data={data} />

      {/* sunset and sunrise details */}
      <SunContainer data={data} />

      {/* 5-days forecast */}
      <ForecastContainer forecast={forecast} getWeatherIcon={getWeatherIcon} />
    </main>
  );
}

export default MainContent;
