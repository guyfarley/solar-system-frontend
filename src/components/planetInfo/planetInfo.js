import "./planetInfo.scss";
import React from "react";

const PlanetInfo = ({ planet }) => {
  return (
    <section className="planet-info">
      <div className="planet-info__header">
        <h1 className="planet-info__title">Planet Info</h1>
        <h3 className="planet-info__subtitle">
          {`All about ${planet.name}`}
        </h3>
      </div>

      <div className="type">
        <div className="infoCard">
          <p>{planet.type}</p>
        </div>
      </div>

    </section>
  )
}

export default PlanetInfo;