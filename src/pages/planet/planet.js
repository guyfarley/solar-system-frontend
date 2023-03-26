import Header from '../../components/header/header.js';
import PlanetBanner from '../../components/planetBanner/planetBanner.js';
import planets from '../../data.js';
import Carousel from '../../components/carousel/carousel.js';
import { useParams } from 'react-router-dom';
import './planet.scss';

const Planet = () => {

  const { planetSlug } = useParams();
  let planet = planets.filter(planet => planet.name === planetSlug);
  let currentPlanet = planet[0];

  // console.log('current planet: ', currentPlanet);

  return (
    <>
      <Header />
      <div className="planet">
        <PlanetBanner planet={currentPlanet} />
        <h1 className="planet__header">{`${currentPlanet.name}'s Moons`}</h1>
        <div className='carousel__container'>
          <Carousel data={currentPlanet.moons} />
        </div>
      </div>
    </>
  );
};

export default Planet;