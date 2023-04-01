import "./resources.scss";
import React from "react";
import nasa from "../../assets/images/nasa.png";
import esa from "../../assets/images/euro.png";
import solarRap from "../../assets/images/solarRap.png";
import nationalGeo from "../../assets/images/vidnational.png";

const Resources = () => {
  //create a Ref function that when the section is fully in view the picture scroll up but the title stays fixed
  //work on the images and they need to be clickable to the source
  //the clickable source should open a new page

  return (
    <section className="resources">
      <div className="resources__header">
        <h1 className="resources__title">Resources to Learn More</h1>
        <h3 className="resources__subtitle">
          Dive into the resources to continue your learning journey
        </h3>
      </div>
      <div className="resources__div-parent-wrapper">
        <div className="resources__div-child-wrapper">
          <div className="resources__div1">
            {" "}
            <a
              href="https://solarsystem.nasa.gov/planets/overview/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="resourceCard">
                <img className="resourceCard__img" src={nasa} alt={nasa} />
              </div>
            </a>
            <a
              href="https://www.esa.int/kids/en/learn/Our_Universe/Planets_and_moons/The_Solar_System_and_its_planets"
              target="_blank"
              rel="noreferrer"
            >
              <div className="resourceCard">
                <img className="resourceCard__img" src={esa} alt={esa} />
              </div>
            </a>
          </div>
          <div className="resources__div2"></div>
        </div>
        <div className="resources__div-child-wrapper">
          <div className="resources__div2"></div>
          <div className="resources__div1">
            {" "}
            <a
              href="https://www.youtube.com/watch?v=Vb2ZXRh74WU"
              target="_blank"
              rel="noreferrer"
            >
              <div className="resourceCard">
                <img
                  className="resourceCard__img"
                  src={solarRap}
                  alt={solarRap}
                />
              </div>
            </a>
            <a
              href="https://www.youtube.com/watch?v=libKVRa01L8"
              target="_blank"
              rel="noreferrer"
            >
              <div className="resourceCard">
                <img
                  className="resourceCard__img"
                  src={nationalGeo}
                  alt={nationalGeo}
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
