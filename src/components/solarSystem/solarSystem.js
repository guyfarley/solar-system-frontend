import React from "react";
import "./solarSystem.scss";

function SolarSystem() {
  return (
    <div className="universe">
      <div className="solarSystem">
        <div className="sun"></div>

        <div className="orbit orbit__mecury">
          <div className="orbit__inner">
            <div className="planet__mecury"></div>
          </div>
        </div>

        <div className="orbit orbit__venus">
          <div className="orbit__inner">
            <div className="planet__venus"></div>
          </div>
        </div>

        <div className="orbit orbit__earth">
          <div className="orbit__inner">
            <div className="planet__earth"></div>
          </div>
        </div>

        <div className="orbit orbit__mars">
          <div className="orbit__innerQuarter">
            <div className="planet__mars"></div>
          </div>
        </div>

        <div className="orbit orbit__jupiter">
          <div className="orbit__innerMid">
            <div className="planet__jupiter"></div>
          </div>
        </div>

        <div className="orbit orbit__saturn">
          <div className="orbit__innerMid">
            <div className="planet__saturn"></div>
          </div>
        </div>

        <div className="orbit orbit__uranus">
          <div className="orbit__innerQuarter">
            <div className="planet__uranus"></div>
          </div>
        </div>

        <div className="orbit orbit__neptune">
          <div className="orbit__innerQuarter">
            <div className="planet__neptune"></div>
          </div>
        </div>

        <div className="orbit orbit__pluto">
          <div className="orbit__innerPluto">
            <div className="planet__pluto"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SolarSystem;
