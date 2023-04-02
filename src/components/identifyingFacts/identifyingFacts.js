import "./identifyingFacts.scss";
import React from "react";

const identifyingFacts = ({ data }) => {
  // Splitting facts into 3 separate variables
  let split_string = data[0].three_facts.split(".");
  const fact1 = split_string[0];
  const fact2 = split_string[1];
  const fact3 = split_string[2];

  return (
    <section className="identifying-facts">
      <div className="identifying-facts__header">
        <div className="identifying-facts__header--title">{`Fun Facts About ${data[0].planet_name}!`}</div>
      </div>
      <div className="identifying-facts__container">
        <div className="identifying-facts__data1">{fact1}</div>
        <div className="identifying-facts__data2">{fact2}</div>
        <div className="identifying-facts__data3">{fact3}</div>
      </div>
    </section>
  );
};

export default identifyingFacts;
