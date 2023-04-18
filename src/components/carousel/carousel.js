import * as React from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import "./carousel.scss";
import "../solarSystem/solarSystem.scss";
import { useContext } from "react";
import { PlanetsContext } from "../../context/context";
// import data from planet-data.js instead
import { allPlanets } from "../../planet-data";
// import axios from "axios";

const Carousel = () => {

  // const SERVER = process.env.REACT_APP_SERVER;
  // const [planetData, setPlanetData] = useState([]);
  const { updateClickedPlanets } = useContext(PlanetsContext);

  // const getPlanets2 = async () => {
  //   try {
  //     const response = await axios.get(SERVER);
  //     setPlanetData(response.data.rows);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  // useEffect(() => {
  //   getPlanets2();
  // }, []);

  const listRef = useRef(null);

  // change planet types in database to stringified types for rendering
  const newPlanets = allPlanets.map((planet) => {
    let stringifiedType;

    if (planet.planet_type === "gas_giant") {
      stringifiedType = "Gas Giant";
    } else if (planet.planet_type === "terrestrial") {
      stringifiedType = "Terrestrial";
    } else if (planet.planet_type === "dwarf_planet") {
      stringifiedType = "Dwarf Planet";
    } else if (planet.planet_type === "ice_giant") {
      stringifiedType = "Ice Giant";
    }

    return { ...planet, planet_type: stringifiedType };
  });

  const handleClick = (name) => {
    window.scrollTo(0, 0);
    updateClickedPlanets(name);
  };

  const scrollLeft = () => {
    if (listRef.current) {
      listRef.current.scrollBy({
        top: 0,
        left: -240,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (listRef.current) {
      listRef.current.scrollBy({
        top: 0,
        left: 240,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="slide-container">
      <ChevronLeftIcon
        fontSize="large"
        cursor="pointer"
        onClick={scrollLeft}
      ></ChevronLeftIcon>

      <div className="items-container" ref={listRef}>
        {newPlanets.map((item) => {
          return (
            <div key={item.planet_id} className="single-item-container">
              <Card sx={{ width: 200, boxShadow: 6 }}>
                <div className="un">
                  <div className={item.planet_id}>
                    <div className={`${item.planet_id}-l1`}></div>
                    <div className={`${item.planet_id}-l2`}></div>
                    <div className={`${item.planet_id}-l3`}></div>
                    <div className={`${item.planet_id}-l4`}></div>
                  </div>
                </div>

                <CardContent>
                  <Typography variant="h5" component="div">
                    {item.planet_name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.planet_type}
                  </Typography>
                </CardContent>

                <CardActions className="button-container">
                  <Button
                    className="carousel-button"
                    size="small"
                    variant="contained"
                    onClick={() => handleClick(item.planet_name)}
                  >
                    Locate
                  </Button>
                  <Button
                    className="carousel-button"
                    size="small"
                    variant="contained"
                    component={Link}
                    to={`/planet/${item.planet_id}`}
                  >
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </div>
          );
        })}
      </div>

      <ChevronRightIcon
        fontSize="large"
        cursor="pointer"
        onClick={scrollRight}
      ></ChevronRightIcon>
    </div>
  );
};

export default Carousel;
