import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home.js";
import Planet from "./pages/planet/planet.js";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/planet/:planetSlug" element={<Planet />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
