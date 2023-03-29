import * as React from "react";
import { useRef } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import "./moonCarousel.scss";
import "../solarSystem/solarSystem.scss";
import { useState, useEffect } from "react";

const MoonCarousel = ({ data }) => {
  console.log("moon data from moon carousel", data);
  const listRef = useRef(null);
  const [hasMoons, setHasMoons] = useState(false);
  //Kayle I took this out so until the data comes in this doesn't trigger
  //let isPlanet = false;

  useEffect(() => {

    if (data[0].num_moons !== 0) {
      setHasMoons(true);
    }
  }, []);

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
    <>
      <div className="moon-carousel">

        {hasMoons === true &&

          (
            <>
              <div className="planet__header">
                {/* <h1 className="planettitle">Moons</h1> */}
                <h1 className="planet__title">Check out the moons</h1>
              </div>
              <div className="carousel__container">
                <div className="slide-container">
                  <ChevronLeftIcon
                    fontSize="large"
                    cursor="pointer"
                    onClick={scrollLeft}
                  ></ChevronLeftIcon>

                  <div className="items-container" ref={listRef}>
                    {data.map((item) => {
                      return (
                        <div key={item.moon_id} className="single-item-container">
                          <Card sx={{ width: 200, height: 350, bgcolor: "rgb(36, 37, 93)" }}>
                            {/* <div className="un">
                  <div className={item.planet_id}>
                    <div className={`${item.planet_id}-l1`}></div>
                    <div className={`${item.planet_id}-l2`}></div>
                  </div>
                </div> */}

                            <CardContent>
                              <Typography variant="h5" component="div" color="white">
                                {item.moon_name}
                              </Typography>

                              <div className="moon-size">
                                <Typography variant="body2" color="white">
                                  {`Size: ${item.moon_size} miles`}
                                </Typography>
                              </div>

                              <div className="moon-history">
                                <Typography variant="body2" color="white">
                                  {`History of Name: ${item.moon_fun_fact}`}
                                </Typography>
                              </div>
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
              </div>
            </>
          )
        }
      </div >
    </>
  );
};

export default MoonCarousel;
