import Header from "../../components/header/header.js";
import PlanetBanner from "../../components/planetBanner/planetBanner.js";
import PlanetInfo from "../../components/planetInfo/planetInfo.js";
import IdentifyingFacts from "../../components/identifyingFacts/identifyingFacts.js";
import MoonCarousel from "../../components/moonCarousel/moonCarousel.js";
import { useParams } from "react-router-dom";
import "./planet.scss";
import Footer from "../../components/footer/footer.js";
// import data from planet-data.js instead
import { allPlanets } from "../../planet-data";
// import { useState, useEffect } from "react";
// import axios from "axios";

const Planet = () => {
  const { planetSlug } = useParams();

  // filter allPlanets to just the planet whose id matches planetSlug
  const planetData = allPlanets.filter(planet => planet.planet_id === planetSlug);
  console.log('planetData: ', planetData);

  const moonData = planetData[0].moons;

  // const SERVER = process.env.REACT_APP_SERVER;
  // const URLplanet = `${SERVER}planet/${planetSlug}`;

  // const [isLoading, setLoading] = useState(true);
  // const [planetData, setPlanetData] = useState([]);

  // const getPlanet = () => {
  //   try {
  //     axios.get(URLplanet).then((response) => {
  //       setPlanetData(response.data.rows);
  //       setLoading(false);
  //     });
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // useEffect(() => {
  //   getPlanet();
  // }, []);

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  return (
    <>
      <Header />
      <div className="planet">
        <PlanetBanner data={planetData} />
        <PlanetInfo data={planetData} />
        <IdentifyingFacts data={planetData} />
        <MoonCarousel data={moonData} />
        <Footer />
      </div>
    </>
  );
};

export default Planet;
