import Header from '../../components/header/header.js';
import PlanetBanner from '../../components/planetBanner/planetBanner.js';
import planets from '../../data.js';
import { useParams } from 'react-router-dom';

const Planet = () => {

  const { planetSlug } = useParams();
  let planet = planets.filter(planet => planet.name === planetSlug);
  let currentPlanet = planet[0];

  console.log('current planet: ', currentPlanet);

  return (
    <div>
      <Header />
      <PlanetBanner planet={currentPlanet} />
    </div>
  );
};

export default Planet;