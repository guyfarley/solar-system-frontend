import "./planetBanner.scss";

const PlanetBanner = ({ data }) => {

  return (
    <div className="planet-banner">
      <div className="planet-banner__name">
        <h1>{data[0].planet_name}</h1>
      </div>
      <div className={data[0].planet_id}>
        <div className={`${data[0].planet_id}-l1`}></div>
        <div className={`${data[0].planet_id}-l2`}></div>
        <div className={`${data[0].planet_id}-l3`}></div>
        <div className={`${data[0].planet_id}-l4`}></div>
      </div>
    </div>
  );
};

export default PlanetBanner;
