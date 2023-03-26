import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home.js";
import Planet from "./pages/planet/planet.js";

// query database for full list of planets & moons?
// set into context/state?

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/planet/:id" element={<Planet />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
