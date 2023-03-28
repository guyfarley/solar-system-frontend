import SolarSystem from "../../components/solarSystem/solarSystem";
import Header from "../../components/header/header.js";
import ExplorePlanets from "../../components/explorePlanets/explorePlanets";
import Resources from "../../components/resources/resources";
import FunFacts from "../../components/funFacts/funFacts";

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
      <section id="fun-facts">
        <FunFacts />
      </section>
      <section id="about-us"></section>
    </div>
  );
};

export default Home;
