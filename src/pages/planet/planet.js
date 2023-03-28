import Header from "../../components/header/header.js";
import PlanetBanner from "../../components/planetBanner/planetBanner.js";
import PlanetInfo from "../../components/planetInfo/planetInfo.js";
// import planets from "../../data.js";
import MoonCarousel from "../../components/moonCarousel/moonCarousel.js";
import { useParams } from "react-router-dom";
import "./planet.scss";
<<<<<<< HEAD
import axios from "axios";
import { useState, useEffect } from "react";
=======
import { useState, useEffect } from "react";
import axios from "axios";
>>>>>>> b72eaf918178395355b5f1a6d8ae05e80fc8fb7f

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

  const dummyPlanet = {
    planet_id: 123,
    planet_name: 'Dummy Planet',
    moons: [
      {
        id: 1.1,
        name: "Moon 1",
        nameHistory: "History of the name of this moon",
        size: "Small",
        category: "Moon",
      },
      {
        id: 1.2,
        name: "Moon 2",
        nameHistory: "History of the name of this moon",
        size: "Small",
        category: "Moon",
      },
      {
        id: 1.3,
        name: "Moon 3",
        nameHistory: "History of the name of this moon",
        size: "Small",
        category: "Moon",
      },
    ],
  }

  // console.log(dummyPlanet.moons);

  const { planetSlug } = useParams();
<<<<<<< HEAD
  //let planet = planets.filter((planet) => planet.name === planetSlug);
  //let bannerPlanet = currentPlanet[0];
  console.log(currentPlanet);
=======

  // const URL = `http://localhost:8080/planet/${planetSlug}`;

  const [planetData, setPlanetData] = useState([]);

  const getPlanet = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/planet/${planetSlug}`);
      console.log(response.data);
      setPlanetData(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getPlanet();
  }, []);

  console.log('planet data from planet page: ', planetData);

  // let planet = planetData.filter(planet => planet.planet_id === planetSlug);
  // let currentPlanet = planet[0];

  // console.log("current planet: ", currentPlanet);

>>>>>>> b72eaf918178395355b5f1a6d8ae05e80fc8fb7f
  return (
    <>
      <Header />
      <div className="planet">
        <PlanetBanner planet={dummyPlanet} />
        <PlanetInfo planet={dummyPlanet} />
        <div className="planet__header">
          <h1 className="planet__title">Moons</h1>
          <h1 className="planet__subtitle">Check out the moons</h1>
        </div>
<<<<<<< HEAD
        {/* <div className="carousel__container">
          <Carousel data={bannerPlanet.moons} />
        </div> */}
=======
        <div className="carousel__container">
          <MoonCarousel data={dummyPlanet.moons} />
        </div>
>>>>>>> b72eaf918178395355b5f1a6d8ae05e80fc8fb7f
      </div>
    </>
  );
};

export default Planet;
