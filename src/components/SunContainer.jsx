import React from "react";

function SunContainer(props) {
  return (
    <section className="sun-container">
      <div className="sun-rise">
        <p>
          {new Date(props.data.sys.sunrise * 1000).toLocaleTimeString("en-GB", {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>
        <h3>Sunrise</h3>
      </div>
      <div className="sun-set">
        <p>
          {new Date(props.data.sys.sunset * 1000).toLocaleTimeString("en-GB", {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>
        <h3>Sunset</h3>
      </div>
    </section>
  );
}

export default SunContainer;
