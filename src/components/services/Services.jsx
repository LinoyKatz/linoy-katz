import React from "react";

import "./services.css";
import CardRight from "../../media/cards/cardRight.png";
import CardLeft from "../../media/cards/cardLeft.png";
import { motion } from "framer-motion";

const Services = () => {
  const transition = { duration: 5, type: "spring" };
  return (
    <section className="services">
      {/* left side */}
      <div className="awesome">
        <span>My awesome</span>
        <span>services</span>
        <span>
          to see my services- <br /> <span>Click here!</span>
        </span>
        <button className="button services-btn">Download CV</button>
      </div>
      {/* right side */}

      <div className="cards">
        <motion.img
          className="card-right"
          initial={{ left: "40%" }}
          whileInView={{ left: "10%" }}
          transition={transition}
          src={CardRight}
          alt="card"
        />
        <motion.img
          className="card-left"
          initial={{ left: "40%" }}
          whileInView={{ left: "25%" }}
          transition={transition}
          src={CardLeft}
          alt="card"
        />
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
