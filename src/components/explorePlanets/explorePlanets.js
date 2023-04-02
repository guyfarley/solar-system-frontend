import "./explorePlanets.scss";
import Carousel from "../carousel/carousel";

const ExplorePlanets = () => {
  //create function that when the slider-container is pressed the user can
  //side the cards on the x axis

  return (
    <section className="explore">
      <h1 className="explore__header">Explore the Planets</h1>
      <h3 className="explore__subhead">
        Locate in the solar system above, or learn more!
      </h3>
      <Carousel />
    </section>
  );
};

export default ExplorePlanets;
