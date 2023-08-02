import React from "react";

import "./bottomSection.css";
import PaperPlane from "../../media/bitMoji/paperPlane.png";
import { Link } from "react-router-dom";
// import { motion } from "framer-motion";

const BottomSection = () => {
  const transition = { duration: 5, type: "spring" };
  return (
    <section className="bottom-section">
      <div className="bottom-right">
        <span> wanna hear more</span>
        <span>about me?</span>
        <Link to="/services">
          <span>Click here!</span>
        </Link>
      </div>
      <div className="bottom-left">
        {/* <motion.img
          className="paper-plane-img"
          initial={{ left: "40%" }}
          whileInView={{ left: "10%" }}
          transition={transition}
          src={PaperPlane}
          alt="paper- plane"
        /> */}
        <img className="paper-plane-img" src={PaperPlane} alt="paper- plane" />
      </div>
    </section>
  );
};

export default BottomSection;
