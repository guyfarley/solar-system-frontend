import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home.js";
import Planet from "./pages/planet/planet.js";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  // const URL = "http://localhost:8080/";
  // const [planetData, setPlanetData] = useState("no data");

  // const getPlanets = () => {
  //   axios
  //     .get(URL)
  //     .then((response) => {
  //       const planets = response.data;
  //       setPlanetData(planets.rows);
  //     })
  //     .catch((error) => console.log(error));
  // };

  // const getPlanets2 = async () => {
  //   const response = await axios.get(URL);
  //   console.log(response);
  // };

  // useEffect(() => {
  //   getPlanets2();
  // }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/planets/:planetSlug" element={<Planet />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
