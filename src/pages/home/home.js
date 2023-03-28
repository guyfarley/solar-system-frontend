import SolarSystem from "../../components/solarSystem/solarSystem";
import Header from "../../components/header/header.js";
import ExplorePlanets from "../../components/explorePlanets/explorePlanets";
import Resources from "../../components/resources/resources";
import FunFacts from "../../components/funFacts/funFacts";

// import axios from "axios";
// import { useState, useEffect } from "react";

const Home = () => {
  // const URL = "http://localhost:8080/";

  // // Guy's changes below
  // const [planetData, setPlanetData] = useState("");

  // const getPlanets2 = async () => {
  //   const response = await axios.get(URL);
  //   setPlanetData(response.data);
  // };

  // const getPlanets = () => {
  //   axios
  //     .get(URL)
  //     .then((response) => {
  //       const planets = response.data;
  //       setPlanetData(planets.rows);
  //     })
  //     .catch((error) => console.log(error));
  // };

  // useEffect(() => {
  //   getPlanets2();
  // }, []);

  // console.log("planet data: ", planetData);
  // // Guy's changes above

  return (
    <div>
      <Header />
      <SolarSystem />
      <section id="explore-planets">
        <ExplorePlanets />
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
