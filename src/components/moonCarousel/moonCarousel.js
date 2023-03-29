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
import "./moonCarousel.scss";
import "../solarSystem/solarSystem.scss";

const MoonCarousel = ({ data }) => {
  console.log("moon data from moon carousel", data);
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
        {data.map((item) => {
          return (
            <div key={item.id} className="single-item-container">
              <Card sx={{ width: 200 }}>
                {/* <div className="un">
                  <div className={item.planet_id}>
                    <div className={`${item.planet_id}-l1`}></div>
                    <div className={`${item.planet_id}-l2`}></div>
                  </div>
                </div> */}

                <CardContent>
                  <Typography variant="h5" component="div">
                    {item.moon_name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.moon_size}
                  </Typography>
                </CardContent>

                {/* <CardActions className="button-container">
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
                    to={`/planets/${item.planet_name}`}
                  >
                    Learn More
                  </Button>
                </CardActions> */}
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

export default MoonCarousel;
