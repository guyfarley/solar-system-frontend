import "./planetBanner.scss";

const PlanetBanner = ({ planet }) => {
  // console.log("planet from planet banner: ", planet);
  console.log(planet);
  return (
    <div className="planet-banner">
      <div className="planet-banner__planet">
        <div className={planet[0].planet_id}>
          <div className={`${planet[0].planet_id}-l1`}></div>
          <div className={`${planet[0].planet_id}-l2`}></div>
          <div className={`${planet[0].planet_id}-l3`}></div>
          <div className={`${planet[0].planet_id}-l4`}></div>
        </div>
      </div>
    </div>
  );
};

export default PlanetBanner;
