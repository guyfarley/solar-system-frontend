import "./explorePlanets.scss";
import Carousel from "../carousel/carousel";

const ExplorePlanets = () => {
  //create function that when the slider-container is pressed the user can
  //side the cards on the x axis

  return (
    <section className="explore">
      <h1 className="explore__header">Explore the Planets</h1>
      <h3 className="explore__subhead">
        Click on a planet to locate in the solar system
      </h3>
      <Carousel />
      {/* <div className="explore__slider-container">
        <div className="explore__slider-cards">
          <div className="explore__card-wrapper">
            <div className="explore__card">
              <div className="explore__card--img"></div>
              <div className="explore__card--info"></div>
            </div>
          </div>
        </div>

        <div className="explore__slider-cards">
          <div className="explore__card-wrapper">
            <div className="explore__card">
              <div className="explore__card--img"></div>
              <div className="explore__card--info"></div>
            </div>
          </div>
        </div>

        <div className="explore__slider-cards">
          <div className="explore__card-wrapper">
            <div className="explore__card">
              <div className="explore__card--img"></div>
              <div className="explore__card--info"></div>
            </div>
          </div>
        </div>

        <div className="explore__slider-cards">
          <div className="explore__card-wrapper">
            <div className="explore__card">
              <div className="explore__card--img"></div>
              <div className="explore__card--info"></div>
            </div>
          </div>
        </div>

        <div className="explore__slider-cards">
          <div className="explore__card-wrapper">
            <div className="explore__card">
              <div className="explore__card--img"></div>
              <div className="explore__card--info"></div>
            </div>
          </div>
        </div>

        <div className="explore__slider-cards">
          <div className="explore__card-wrapper">
            <div className="explore__card">
              <div className="explore__card--img"></div>
              <div className="explore__card--info"></div>
            </div>
          </div>
        </div>

        <div className="explore__slider-cards">
          <div className="explore__card-wrapper">
            <div className="explore__card">
              <div className="explore__card--img"></div>
              <div className="explore__card--info"></div>
            </div>
          </div>
        </div>

        <div className="explore__slider-cards">
          <div className="explore__card-wrapper">
            <div className="explore__card">
              <div className="explore__card--img"></div>
              <div className="explore__card--info"></div>
            </div>
          </div>
        </div>

        <div className="explore__slider-cards">
          <div className="explore__card-wrapper">
            <div className="explore__card">
              <div className="explore__card--img"></div>
              <div className="explore__card--info"></div>
            </div>
          </div>
        </div>
      </div> */}
      {/* carousel showing all 9 planets */}
      {/* clicking a planet dynamically routes user to planet"s page (`/planets/${planet.id}`) */}
    </section>
  );
};

export default ExplorePlanets;
