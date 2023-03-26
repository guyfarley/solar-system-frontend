import SolarSystem from '../../components/solarSystem/solarSystem';
import Header from '../../components/header/header.js';
import ExplorePlanets from '../../components/explorePlanets/explorePlanets';

const Home = () => {
  return (
    <div>
      <Header />
      <SolarSystem />
      <section id="explore-planets">
        <ExplorePlanets />
      </section>
      <section id="resources"></section>
      <section id="fun-facts"></section>
      <section id="about-us"></section>

    </div>
  );
};

export default Home;
