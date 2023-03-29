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
<<<<<<< HEAD
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
    planet_name: "Dummy Planet",
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
  };

  // console.log(dummyPlanet.moons);

  const { planetSlug } = useParams();
  //let planet = planets.filter((planet) => planet.name === planetSlug);
  //let bannerPlanet = currentPlanet[0];
  console.log(currentPlanet);

  // const URL = `http://localhost:8080/planet/${planetSlug}`;

=======

  const { planetSlug } = useParams();
  const URLplanet = `http://localhost:8080/planet/${planetSlug}`;
  const [isLoading, setLoading] = useState(true);
>>>>>>> dev
  const [planetData, setPlanetData] = useState([]);

  const getPlanet = () => {
    try {
<<<<<<< HEAD
      const response = await axios.get(
        `http://localhost:8080/planet/${planetSlug}`
      );
      console.log(response.data);
      setPlanetData(response.data);
=======
      axios.get(URLplanet).then(response => {
        setPlanetData(response.data.rows);
        setLoading(false);
      })
>>>>>>> dev
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPlanet();
    // console.log("planet data from planet page: ", planetData);
  }, []);

<<<<<<< HEAD
  console.log("planet data from planet page: ", planetData);

  // let planet = planetData.filter(planet => planet.planet_id === planetSlug);
  // let currentPlanet = planet[0];

  // console.log("current planet: ", currentPlanet);

=======
  if (isLoading) {
    return <div>Loading...</div>
  }

>>>>>>> dev
  return (
    <>
      <Header />
      <div className="planet">
<<<<<<< HEAD
        <PlanetBanner planet={currentPlanet} />
        <PlanetInfo planet={currentPlanet} />
        <div className="planet__header">
          <h1 className="planet__title">Moons</h1>
          <h1 className="planet__subtitle">Check out the moons</h1>
        </div>
        {/* <div className="carousel__container">
          <Carousel data={bannerPlanet.moons} />
        </div> */}
        <div className="carousel__container">
          <MoonCarousel data={dummyPlanet.moons} />
        </div>
=======
        <PlanetBanner data={planetData} />
        <PlanetInfo data={planetData} />
        <MoonCarousel data={planetData} />
>>>>>>> dev
      </div>
    </>
  );
};

export default Planet;
