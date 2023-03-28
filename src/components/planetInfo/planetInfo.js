import "./planetInfo.scss";
import React from "react";

const PlanetInfo = ({ planet }) => {
  return (
    <section className="planet-info">

      <div className="planet-info__header">
        <h1>{planet.name}</h1>
      </div>

      <div className="planet-info__planet-data">
        <div className="planet-info__container">
          <div className="planet-info__title">Planet Size</div>
          <div className="planet-info__data">size</div>
        </div>
        <div className="planet-info__container">
          <div className="planet-info__title">Distance from Sun</div>
          <div className="planet-info__data">distance</div>
        </div>
      </div>

      <div className="planet-info__planet-data">
        <div className="planet-info__container">
          <div className="planet-info__title">Year Length in Days</div>
          <div className="planet-info__data">year length</div>
        </div>
        <div className="planet-info__container">
          <div className="planet-info__title">Planet Type</div>
          <div className="planet-info__data">type</div>
        </div>
      </div>

      <div className="planet-info__planet-data">
        <div className="planet-info__container-large">
          <div className="planet-info__title">Atmosphere</div>
          <div className="planet-info__data">atmosphere description</div>
        </div>

      </div>




    </section>
  )
}

export default PlanetInfo;