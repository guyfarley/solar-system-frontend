import * as React from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
//import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import "./carousel.scss";
import "../solarSystem/solarSystem.scss";
import axios from "axios";
import { useState, useEffect } from "react";

const Carousel = () => {
  const URL = "http://localhost:8080/";

  const [planetData, setPlanetData] = useState([]);

  const getPlanets2 = async () => {
    try {
      const response = await axios.get(URL);
      setPlanetData(response.data.rows);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getPlanets2();
  }, []);

  const listRef = useRef(null);

  //Kayle I took this out so until the data comes in this doesn't trigger
  //let isPlanet = false;

  // if (planetData[0].category === "Planet") {
  //   isPlanet = true;
  // }

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
        {planetData.map((item) => {
          return (
            <div key={item.planet_id} className="single-item-container">
              <Card sx={{ width: 200 }}>
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
                  >
                    Zoom
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
