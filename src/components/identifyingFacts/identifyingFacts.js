import "./identifyingFacts.scss";
import React from "react";
import { useRef } from "react";
import { useInView } from "framer-motion";

const IdentifyingFacts = ({ data }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
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
      <div ref={ref} className="identifying-facts__container">
        <div
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(.17,.67,.84,.25) 0.5s",
          }}
          className="identifying-facts__data1"
        >
          {fact1}
        </div>
        <div
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(.17,.67,.84,.25) 1s",
          }}
          className="identifying-facts__data2"
        >
          {fact2}
        </div>
        <div
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(.17,.67,.84,.25) 1.5s",
          }}
          className="identifying-facts__data3"
        >
          {fact3}
        </div>
      </div>
    </section>
  );
};

export default IdentifyingFacts;
