import * as React from "react";
import { useRef } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import "./moonCarousel.scss";
import "../solarSystem/solarSystem.scss";
import { useState, useEffect } from "react";

const MoonCarousel = ({ data }) => {
  //console.log("moon data from moon carousel", data);
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
  console.log(data);
  return (
    <>
      <div className="moonCarousel">
        {hasMoons === true && (
          <>
            <div className="moonCarousel__header">
              <h1 className="moonCarousel__header--title">Moons</h1>
              <h3 className="moonCarousel__header--subtitle">
                Check out the moons of this planet...
              </h3>
            </div>
            <div className="carousel__container">
              <div className="slide-container">
                {data > 1 ? (
                  <ChevronLeftIcon
                    fontSize="large"
                    cursor="pointer"
                    onClick={scrollLeft}
                  ></ChevronLeftIcon>
                ) : (
                  <div></div>
                )}

                <div className="items-container" ref={listRef}>
                  {data.map((item) => {
                    return (
                      <div key={item.moon_id} className="single-item-container">
                        <Card
                          sx={{
                            width: 200,
                            height: 440,
                            bgcolor: "rgb(36, 37, 93)",
                            padding: ".5rem",
                            boxShadow: 6,
                          }}
                        >
                          {/* <div className="un">
                  <div className={item.planet_id}>
                    <div className={`${item.planet_id}-l1`}></div>
                    <div className={`${item.planet_id}-l2`}></div>
                  </div>
                </div> */}

                          <CardContent>
                            <div className="moonCarousel__title">
                              <p className="moonCarousel__title--label">
                                NAME:
                              </p>
                              <p className="moonCarousel__input--moon">
                                {item.moon_name}
                              </p>
                            </div>

                            <div className="moonCarousel__title">
                              <p className="moonCarousel__title--label">
                                SIZE:
                              </p>

                              <p className="moonCarousel__input">
                                {`${item.moon_size} miles`}
                              </p>
                            </div>

                            <div className="moonCarousel__title--history">
                              <p className="moonCarousel__title--history--label">
                                HISTORY OF NAME
                              </p>
                              <p className="moonCarousel__input">
                                {item.moon_name_history}
                              </p>
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
                {data > 1 ? (
                  <ChevronRightIcon
                    fontSize="large"
                    cursor="pointer"
                    onClick={scrollRight}
                  ></ChevronRightIcon>
                ) : (
                  <div></div>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default MoonCarousel;
