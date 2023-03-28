import SolarSystem from "../../components/solarSystem/solarSystem";
import Header from "../../components/header/header.js";
import ExplorePlanets from "../../components/explorePlanets/explorePlanets";
import Resources from "../../components/resources/resources";
import axios from "axios";
import FunFacts from "../../components/funFacts/funFacts";
import { useState, useEffect } from 'react';

const URL = "http://localhost:8080/";

// const getInfo = () => {
//   axios
//     .get(URL)
//     .then((response) => {
//       console.log(response.data);
//     })
//     .catch((err) => console.log(err));
// };

// getInfo();


const Home = () => {

  // Guy's changes below
  const [planetData, setPlanetData] = useState();

  useEffect(() => {
    const getPlanets = () => {
      axios
        .get(URL)
        .then(response => {
          const planets = response.data;
          setPlanetData(planets.rows);
        })
        .catch(error => console.log(error))
    }
    getPlanets();
  }, []);

  console.log("planet data: ", planetData);
  // Guy's changes above

  return (
    <div>
      <Header />
      <SolarSystem />
      <section id="explore-planets">
        <ExplorePlanets planetData={planetData} />
      </section>
      <section id="resources">
        <Resources />
      </section>
      <section id="fun-facts">
        <FunFacts />
      </section>
      <section id="about-us"></section>
    </div>
  );
};

export default Home;
