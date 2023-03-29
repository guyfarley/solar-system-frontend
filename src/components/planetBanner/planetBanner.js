import "./planetBanner.scss";

const PlanetBanner = ({ data }) => {
  console.log("planet from planet banner: ", data[0]);
  console.log(data);
  return (
    <div className="planet-banner">
      <div className="planet-banner__planet">
        <div className={data[0].planet_id}>
          <div className={`${data[0].planet_id}-l1`}></div>
          <div className={`${data[0].planet_id}-l2`}></div>
          <div className={`${data[0].planet_id}-l3`}></div>
          <div className={`${data[0].planet_id}-l4`}></div>
        </div>
      </div>
    </div>
  );
};

export default PlanetBanner;
