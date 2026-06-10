/* Returns the appropriate weather icon based on the condition */
const BASE = import.meta.env.BASE_URL;

function getWeatherIcon(condition) {
  switch (condition) {
    case "Clear":
      return `${BASE}/icons/clear-day.svg`;

    case "Clouds":
      return `${BASE}/icons/cloudy.svg`;

    case "Rain":
      return `${BASE}/icons/rain.svg`;

    case "Drizzle":
      return `${BASE}/icons/drizzle.svg`;

    case "Thunderstorm":
      return `${BASE}/icons/thunderstorms.svg`;

    case "Snow":
      return `${BASE}/icons/snow.svg`;

    case "Mist":
    case "Fog":
      return `${BASE}/icons/fog.svg`;

    default:
      return `${BASE}/icons/clear-day.svg`;
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
