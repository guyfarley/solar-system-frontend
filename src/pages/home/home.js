import SolarSystem from "../../components/solarSystem/solarSystem";
import Header from "../../components/header/header.js";
import ExplorePlanets from "../../components/explorePlanets/explorePlanets";
import Resources from "../../components/resources/resources";
import axios from 'axios';

const URL = "http://localhost:8080/"

const getInfo = () => {
  axios
  .get(URL)
  .then((response) => {
    console.log(response.data)
  })
  .catch((err) => console.log(err))
}

getInfo()

const Home = () => {

  // ping the server to query database for all planet data - save to variable

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
      <section id="fun-facts"></section>
      <section id="about-us"></section>
    </div>
  );
};

export default Home;
