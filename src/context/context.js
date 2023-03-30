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

  // update a specific install with submitted form data
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
    // let updatedPlanets = installs.map(install => {
    //   if (install.storeNum === formData.storeNum) {
    //     install = formData;
    //   }
    //   return install;
    // })
    setClickedPlanets(updatedPlanets);
  }

  // add an install to state installs, from submitted form data
  // const addStateInstall = (formData) => {
  //   setInstalls([...installs, formData]);
  // }

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