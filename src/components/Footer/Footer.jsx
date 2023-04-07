import React from "react";

import "./footer.css";
import FooterWave from "../../media/footer/footerWave.png";
import { BsLinkedin } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="footer-section">
      <img className="footer-wave" src={FooterWave} alt="footer" />
      <section className="footer-icons">
        <span>
          <BsLinkedin
            className="icon"
            style={{
              margin: "2vw",
            }}
            size="3.5vw"
            color="white"
          />
        </span>
        <span>
          <FaInstagram
            className="icon"
            style={{
              margin: "2vw",
            }}
            size="3.5vw"
            color="white"
          />
        </span>
        <span>
          <FaGithub
            className="icon"
            style={{
              margin: "2vw",
            }}
            size="3.5vw"
            color="white"
          />
        </span>
      </section>
    </section>
  );
};

export default Footer;
