import "./planetInfo.scss";
import React from "react";

const PlanetInfo = ({ data }) => {
  console.log(data);
  return (
    <section className="planet-info">
      <div className="planet-info__header">
        <h1>{data[0].planet_name}</h1>
      </div>

      <div className="planet-info__planet-data">
        <div className="planet-info__container">
          <div className="planet-info__title">Planet Size</div>
          <div className="planet-info__data">{data[0].planet_size}</div>
        </div>
        <div className="planet-info__container">
          <div className="planet-info__title">Distance from Sun</div>
          <div className="planet-info__data">{data[0].distance_from_sun}</div>
        </div>
      </div>

      <div className="planet-info__planet-data">
        <div className="planet-info__container">
          <div className="planet-info__title">Year Length in Days</div>
          <div className="planet-info__data">{data[0].year_len}</div>
        </div>
        <div className="planet-info__container">
          <div className="planet-info__title">Planet Type</div>
          <div className="planet-info__data">{data[0].planet_type}</div>
        </div>
      </div>

      <div className="planet-info__planet-data">
        <div className="planet-info__container-large">
          <div className="planet-info__title">Atmosphere</div>
          <div className="planet-info__data">{data[0].atmosphere}</div>
        </div>
      </div>
    </section>
  );
};

export default PlanetInfo;
