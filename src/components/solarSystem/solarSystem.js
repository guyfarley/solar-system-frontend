import React from "react";
import "./solarSystem.scss";

function SolarSystem() {
  return (
    <div className="solarSystem">
      <div className="sun"></div>
      <div className="orbit__mecury">
        <div className="planet__mecury"></div>
      </div>
    </div>
  );
}

export default SolarSystem;
