import React from "react";

import "./services.css";
import CardRight from "../../media/cards/cardRight.png";
import CardLeft from "../../media/cards/cardLeft.png";

const Services = () => {
  return (
    <section className="services">
      {/* left side */}
      <div className="awesome">
        <span>My awesome</span>
        <span>services</span>
        <span>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, harum?
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </span>
        <button className="button services-btn">Download CV</button>
      </div>
      {/* right side */}

      <div className="cards">
        <img className="card-right" src={CardRight} alt="card" />
        <img className="card-left" src={CardLeft} alt="card" />
        <div
          className="blur services-blur"
          style={{ background: "rgb(244, 121, 154)" }}
        ></div>
        <div
          className="blur scnd-services-blur"
          style={{ background: "rgb(244, 121, 154)" }}
        ></div>
        <div
          className="blur thrd-services-blur"
          style={{ background: "rgb(244, 121, 154)" }}
        ></div>
      </div>
    </section>
  );
};
export default Services;
