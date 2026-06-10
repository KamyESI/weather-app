/* Returns the appropriate weather icon based on the condition */
function getWeatherIcon(condition) {
  switch (condition) {
    case "Clear":
      return "/icons/clear-day.svg";

    case "Clouds":
      return "/icons/cloudy.svg";

    case "Rain":
      return "/icons/rain.svg";

    case "Drizzle":
      return "/icons/drizzle.svg";

    case "Thunderstorm":
      return "/icons/thunderstorms.svg";

    case "Snow":
      return "/icons/snow.svg";

    case "Mist":
    case "Fog":
      return "/icons/fog.svg";

    default:
      return "/icons/clear-day.svg";
  }
}

/* Returns the appropriate background class based on the weather condition */
function getBackground(condition) {
  switch (condition) {
    case "Clear":
      return "clear";

    case "Clouds":
      return "clouds";

    case "Rain":
    case "Drizzle":
      return "rain";

    case "Thunderstorm":
      return "storm";

    case "Snow":
      return "snow";

    case "Mist":
    case "Fog":
      return "fog";

    default:
      return "default";
  }
}

/* Determines if it is night based on the current time and sunrise/sunset times */
function isNight(data) {
  return data.dt < data.sys.sunrise || data.dt > data.sys.sunset;
}

export { getWeatherIcon, getBackground, isNight };
