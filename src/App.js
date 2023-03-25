<<<<<<< HEAD
import logo from "./logo.svg";
import "./App.css";
import SolarSystem from "./SolarSystem/SolarSystem";

function App() {
  return <SolarSystem />;
=======
import logo from './logo.svg';
import './App.css';
import ExplorePlanets from './components/explorePlanets';

function App() {
  return (

    <div className="App">
      <ExplorePlanets />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
>>>>>>> d26050eb70daeedd4b4261b4ce52638047a0ca99
}

export default App;
