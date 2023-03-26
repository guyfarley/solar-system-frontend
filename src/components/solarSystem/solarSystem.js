import React from "react";
import "./solarSystem.scss";

function SolarSystem() {
  return (
    <div className="solarSystem">
      <div className="sun"></div>

      <div className="orbit__mecury">
        <div className="orbit">
          <div className="planet__mecury"></div>
        </div>
      </div>

      <div className="orbit__venus">
        <div className="orbit">
          <div className="planet__venus"></div>
        </div>
      </div>

      <div className="orbit__earth">
        <div className="orbit">
          <div className="planet__earth"></div>
        </div>
      </div>

      <div className="orbit__mars">
        <div className="orbit">
          <div className="planet__mars"></div>
        </div>
      </div>

      <div className="orbit__jupiter">
        <div className="orbit">
          <div className="planet__jupiter"></div>
        </div>
      </div>

      <div className="orbit__saturn">
        <div className="orbit">
          <div className="planet__saturn"></div>
        </div>
      </div>

      <div className="orbit__uranus">
        <div className="orbit">
          <div className="planet__uranus"></div>
        </div>
      </div>

      <div className="orbit__neptune">
        <div className="orbit">
          <div className="planet__neptune"></div>
        </div>
      </div>

      <div className="orbit__pluto">
        <div className="orbit">
          <div className="planet__pluto"></div>
        </div>
      </div>
    </div>
  );
}

export default SolarSystem;
