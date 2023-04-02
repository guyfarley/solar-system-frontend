import { createContext, useState } from "react";

const PlanetsContext = createContext();

const PlanetsProvider = ({ children }) => {

  const [clickedPlanets, setClickedPlanets] = useState({
    Mercury: false,
    Venus: false,
    Earth: false,
    Mars: false,
    Jupiter: false,
    Saturn: false,
    Uranus: false,
    Neptune: false,
    Pluto: false,
  });

  const updateClickedPlanets = (id) => {
    let resetPlanets = {
      Mercury: false,
      Venus: false,
      Earth: false,
      Mars: false,
      Jupiter: false,
      Saturn: false,
      Uranus: false,
      Neptune: false,
      Pluto: false,
    };
    let updatedPlanets = { ...resetPlanets, [id]: true }
    console.log('updated planets: ', updatedPlanets);
    setClickedPlanets(updatedPlanets);
  }

  return (
    <PlanetsContext.Provider
      value={{
        clickedPlanets,
        updateClickedPlanets
      }}
    >
      {children}
    </PlanetsContext.Provider>
  )
}

export { PlanetsProvider, PlanetsContext };