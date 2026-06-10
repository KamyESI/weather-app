import React from "react";
import { Wind, Eye, Droplets, Gauge, Waves, Thermometer } from "lucide-react";

function DetailedContainer(props) {
  return (
    <section className="detailed-container">
      <div className="info-item">
        <Droplets size={24} className="info-icon" />
        <h3>Humidity</h3>
        <p>{props.data.main.humidity}%</p>
      </div>
      <div className="info-item">
        <Wind size={24} className="info-icon" />
        <h3>Wind Speed</h3>
        <p>{(props.data.wind.speed * 3.6).toFixed(1)} km/h</p>
      </div>
      <div className="info-item">
        <Gauge size={24} className="info-icon" />
        <h3>Pressure</h3>
        <p>{props.data.main.pressure} hPa</p>
      </div>
      <div className="info-item">
        <Eye size={24} className="info-icon" />
        <h3>Visibility</h3>
        <p>{props.data.visibility} m</p>
      </div>
      <div className="info-item">
        <Waves size={24} className="info-icon" />
        <h3>Sea level</h3>
        <p>{props.data.main.sea_level}</p>
      </div>
      <div className="info-item">
        <Thermometer size={24} className="info-icon" />
        <h3>Temperature</h3>
        <p>{Math.round(props.data.main.temp - 273.15)}°C</p>
      </div>
    </section>
  );
}

export default DetailedContainer;
