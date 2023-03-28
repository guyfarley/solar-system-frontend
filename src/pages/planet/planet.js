import Header from "../../components/header/header.js";
import PlanetBanner from "../../components/planetBanner/planetBanner.js";
import PlanetInfo from "../../components/planetInfo/planetInfo.js";
import planets from "../../data.js";
import Carousel from "../../components/carousel/carousel.js";
import { useParams } from "react-router-dom";
import "./planet.scss";
import axios from "axios";
import { useState, useEffect } from "react";

const Planet = () => {
  const URL = "http://localhost:8080/";

  const [currentPlanet, setCurrentPlanet] = useState([]);
  let planet;

  const getAllPlanets = async () => {
    try {
      const response = await axios.get(URL);
      const planets = response.data.rows;
      planet = planets.filter((planet) => planet.planet_name === planetSlug);
      setCurrentPlanet(planet);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAllPlanets();
  }, []);

  const { planetSlug } = useParams();
  //let planet = planets.filter((planet) => planet.name === planetSlug);
  //let bannerPlanet = currentPlanet[0];
  console.log(currentPlanet);
  return (
    <>
      <Header />
      <div className="planet">
        <PlanetBanner planet={currentPlanet} />
        <PlanetInfo planet={currentPlanet} />
        <div className="planet__header">
          <h1 className="planet__title">Moons</h1>
          <h1 className="planet__subtitle">Check out the moons</h1>
        </div>
        {/* <div className="carousel__container">
          <Carousel data={bannerPlanet.moons} />
        </div> */}
      </div>
    </>
  );
};

export default Planet;
