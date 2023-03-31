import Header from "../../components/header/header.js";
import PlanetBanner from "../../components/planetBanner/planetBanner.js";
import PlanetInfo from "../../components/planetInfo/planetInfo.js";
import IdentifyingFacts from "../../components/identifyingFacts/identifyingFacts.js";
// import planets from "../../data.js";
import MoonCarousel from "../../components/moonCarousel/moonCarousel.js";
import { useParams } from "react-router-dom";
import "./planet.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import Footer from "../../components/footer/footer.js";

const Planet = () => {
  const { planetSlug } = useParams();
  const SERVER = process.env.SERVER || "http://localhost:8080/";

  const URLplanet = `${SERVER}planet/${planetSlug}`;
  // const URLplanet = `http://localhost:8080/planet/${planetSlug}`;

  const [isLoading, setLoading] = useState(true);
  const [planetData, setPlanetData] = useState([]);

  const getPlanet = () => {
    try {
      axios.get(URLplanet).then((response) => {
        setPlanetData(response.data.rows);
        setLoading(false);
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPlanet();
    // console.log("planet data from planet page: ", planetData);
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <div className="planet">
        <PlanetBanner data={planetData} />
        <PlanetInfo data={planetData} />
        <IdentifyingFacts data={planetData} />
        <MoonCarousel data={planetData} />
        <Footer />
      </div>
    </>
  );
};

export default Planet;
