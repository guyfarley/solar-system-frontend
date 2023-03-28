import * as React from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import "./carousel.scss";
import "../solarSystem/solarSystem.scss";

const Carousel = ({ data }) => {

  console.log('data from Carousel: ', data);

  const listRef = useRef(null);
  let isPlanet = false;

  if (data[0].planet_name === "Earth") {
    isPlanet = true;
  }

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
            <div key={item.planet_id} className="single-item-container">
              <Card sx={{ width: 200 }}>
                <CardMedia
                  component="img"
                  alt={item.planet_name}
                  height="200"
                  image="https://cdn.mos.cms.futurecdn.net/yCPyoZDQBBcXikqxkeW2jJ-1200-80.jpg"
                />
                <CardContent>
                  <Typography variant="h5" component="div">
                    {item.planet_name}
                  </Typography>
                  {/* <Typography variant="body2" color="text.secondary">
                    {item.type}
                  </Typography> */}
                </CardContent>
                {isPlanet === true && (
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
                      to={`/planets/${item.planet_name}`}
                    >
                      Learn More
                    </Button>
                  </CardActions>
                )}
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
