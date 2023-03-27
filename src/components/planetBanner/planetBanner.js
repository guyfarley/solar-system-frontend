import "./planetBanner.scss";

const PlanetBanner = ({ planet }) => {

  // console.log("planet from planet banner: ", planet);

  return (
    <div className="planet-banner">
      <h1 className="banner-name">{planet.name}</h1>
    </div>
  )
}

export default PlanetBanner;