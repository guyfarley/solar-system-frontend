import "./planetInfo.scss";
import React from "react";

const PlanetInfo = ({ data }) => {
  let planetType;

  if (data[0].planet_type === "gas_giant") {
    planetType = "Gas Giant";
  } else if (data[0].planet_type === "terrestrial") {
    planetType = "Terrestrial";
  } else if (data[0].planet_type === "dwarf_planet") {
    planetType = "Dwarf Planet";
  } else if (data[0].planet_type === "ice_giant") {
    planetType = "Ice Giant";
  }

  //function to put spaces in the number data every three characters
  function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }

  let size = numberWithSpaces(data[0].distance_from_sun);
  let distance = numberWithSpaces(data[0].planet_size);

  return (
    <section className="planet-info">

      <div className="planet-info__planet-data">
        <div className="planet-info__container">
          <div className="planet-info__title">Planet Size (Diameter)</div>
          <div className="planet-info__data">{distance} miles</div>
        </div>
        <div className="planet-info__container">
          <div className="planet-info__title">Distance from Sun</div>
          <div className="planet-info__data">{size} miles</div>
        </div>
      </div>

      <div className="planet-info__planet-data">
        <div className="planet-info__container">
          <div className="planet-info__title">Year Length</div>
          <div className="planet-info__data">{`${data[0].year_len} days`}</div>
        </div>
        <div className="planet-info__container">
          <div className="planet-info__title">Planet Type</div>
          <div className="planet-info__data">{planetType}</div>
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
