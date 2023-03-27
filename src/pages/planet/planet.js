import Header from "../../components/header/header.js";
import PlanetBanner from "../../components/planetBanner/planetBanner.js";
import PlanetInfo from "../../components/planetInfo/planetInfo.js";
import planets from "../../data.js";
import Carousel from "../../components/carousel/carousel.js";
import { useParams } from "react-router-dom";
import "./planet.scss";

const Planet = () => {

  const { planetSlug } = useParams();
  let planet = planets.filter(planet => planet.name === planetSlug);
  let currentPlanet = planet[0];

  // console.log("current planet: ", currentPlanet);

  return (
    <>
      <Header />
      <div className="planet">
        <PlanetBanner planet={currentPlanet} />
        <div className="planet__header">
          <h1 className="planet__title">Moons</h1>
          <h1 className="planet__subtitle">Check out the moons</h1>
        </div>
        <div className="carousel__container">
          <Carousel data={currentPlanet.moons} />
        </div>
        <PlanetInfo planet={currentPlanet} />
      </div>
    </>
  );
};

export default Planet;