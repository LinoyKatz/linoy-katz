import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import { Link } from "react-router-dom";
import "./hero.css";
import PinkBlob from "../../media/blobs/pinkBlob.png";
import LightPinkBlob from "../../media/blobs/lightPinkBlob.png";
import LaptopWave from "../../media/bitMoji/laptopWave.png";
import SpeechBouble from "../../media/speechBouble.png";

const Hero = () => {
  return (
    <div className="hero-section">
      <section className="hero-left">
        <article className="hero-left-name">
          <span>Hi! I AM</span>
          <span>Linoy</span>
          <span>Fullstack web developper</span>
        </article>
        <button className="button hero-left-btn">Hire me!</button>
        <section className="hero-left-icons">
          <span>
            <BsLinkedin
              className="icon"
              style={{
                margin: "2vw",
              }}
              size="3.5vw"
              color="pink"
            />
          </span>
          <span>
            <FaInstagram
              className="icon"
              style={{
                margin: "2vw",
              }}
              size="3.5vw"
              color="pink"
            />
          </span>
          <span>
            <FaGithub
              className="icon"
              style={{
                margin: "2vw",
              }}
              size="3.5vw"
              color="pink"
            />
          </span>
        </section>
      </section>
      <section className="hero-right">
        {/* <Link to="/meetMe">
          <img
            className="speech-bouble"
            src={SpeechBouble}
            alt="speech-bouble"
          />
        </Link> */}

        <img className="pink-blob" src={PinkBlob} alt="pink-blob" />
        <img
          className="light-pink-blob"
          src={LightPinkBlob}
          alt="light-pink-blob"
        />
        <img className="laptop-wave" src={LaptopWave} alt="LaptopWave" />
        <div className="blur" style={{ background: "rgb(224, 73, 116)" }}></div>
        <div
          className="blur"
          style={{
            background: "rgb(244, 121, 154)",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </section>
    </div>
  );
};

export default Hero;
