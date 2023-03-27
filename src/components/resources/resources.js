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

      <div className="resources__div-wrapper">
        <div className="resources__div1">
          {" "}
          <div className="resourceCard">
            <img className="resourceCard__img" src={nasa} alt={nasa} />
          </div>
          <div className="resourceCard">
            <img className="resourceCard__img" src={esa} alt={esa} />
          </div>
        </div>

        <div className="resources__div2">
          {" "}
          <div className="resourceCard">
            <img className="resourceCard__img" src={solarRap} alt={solarRap} />
          </div>
          <div className="resourceCard">
            <img
              className="resourceCard__img"
              src={nationalGeo}
              alt={nationalGeo}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
