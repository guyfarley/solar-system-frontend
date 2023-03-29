import Header from "../../components/header/header.js";
import PlanetBanner from "../../components/planetBanner/planetBanner.js";
import PlanetInfo from "../../components/planetInfo/planetInfo.js";
// import planets from "../../data.js";
import MoonCarousel from "../../components/moonCarousel/moonCarousel.js";
import { useParams } from "react-router-dom";
import "./planet.scss";
import { useState, useEffect } from "react";
import axios from "axios";
const Planet = () => {
  // const URL = "http://localhost:8080/";

  // const [currentPlanet, setCurrentPlanet] = useState([]);
  // let planet;

  // const getAllPlanets = async () => {
  //   try {
  //     const response = await axios.get(URL);
  //     const planets = response.data.rows;
  //     planet = planets.filter((planet) => planet.planet_id === planetSlug);
  //     setCurrentPlanet(planet);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // useEffect(() => {
  //   getAllPlanets();
  // }, []);

  // const dummyPlanet = {
  //   planet_id: 123,
  //   planet_name: "Dummy Planet",
  //   moons: [
  //     {
  //       id: 1.1,
  //       name: "Moon 1",
  //       nameHistory: "History of the name of this moon",
  //       size: "Small",
  //       category: "Moon",
  //     },
  //     {
  //       id: 1.2,
  //       name: "Moon 2",
  //       nameHistory: "History of the name of this moon",
  //       size: "Small",
  //       category: "Moon",
  //     },
  //     {
  //       id: 1.3,
  //       name: "Moon 3",
  //       nameHistory: "History of the name of this moon",
  //       size: "Small",
  //       category: "Moon",
  //     },
  //   ],
  // };

  // console.log(dummyPlanet.moons);
  const { planetSlug } = useParams();
  const URLplanet = `http://localhost:8080/planet/${planetSlug}`;
  const URLplanets = `http://localhost:8080/`;
  console.log(planetSlug);

  //const URL = http://localhost:8080/planet/${planetSlug};

  const [planetData, setPlanetData] = useState([]);
  const [planetsData, setPlanetsData] = useState([]);

  let planet;

  const getPlanets = async () => {
    try {
      const response = await axios.get(URLplanets);
      const planets = response.data.rows;
      planet = planets.filter((planet) => planet.planet_id === planetSlug);
      setPlanetsData(planet);
    } catch (error) {
      console.error(error);
    }
  };

  const getPlanet = async () => {
    try {
      const response = await axios.get(URLplanet);
      setPlanetData(response.data.rows);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPlanet();
    getPlanets();
  }, []);

  //console.log("planet data from planet page: ", planetData);

  // let planet = planetData.filter(planet => planet.planet_id === planetSlug);
  // let currentPlanet = planet[0];

  // console.log("current planet: ", currentPlanet);

  return (
    <>
      <Header />
      <div className="planet">
        <PlanetBanner data={planetsData} />
        <PlanetInfo data={planetsData} />
        <div className="planetheader">
          {/* <h1 className="planettitle">Moons</h1> */}
          <h1 className="planet__subtitle">Check out the moons</h1>
        </div>
        <div className="carousel__container">
          <MoonCarousel data={planetData} />
        </div>
      </div>
    </>
  );
};

export default Planet;
