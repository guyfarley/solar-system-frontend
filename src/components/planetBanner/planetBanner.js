const PlanetBanner = ({ planet }) => {

  // console.log('planet from planet banner: ', planet);

  return (
    <div>
      <h1>{`banner for ${planet.name}`}</h1>
    </div>
  )
}

export default PlanetBanner;