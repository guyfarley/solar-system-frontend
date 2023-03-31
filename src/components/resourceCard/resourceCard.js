import React from "react";
import "./resourceCard.scss";

function rCard({ image }) {
  return (
    <div className="resourceCard">
      <img className="resourceCard__img" src={image} alt={image} />
    </div>
  );
}

export default rCard;
