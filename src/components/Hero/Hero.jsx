import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import "./hero.css";
import PinkBlob from "../../media/blobs/pinkBlob.png";
import LightPinkBlob from "../../media/blobs/lightPinkBlob.png";
import LaptopWave from "../../media/bitMoji/laptopWave.png";

const Hero = () => {
  return (
    <div className="hero-section">
      <section className="hero-left">
        <article className="hero-left-name">
          <span>Hi! I AM</span>
          <span>Linoy Katz</span>
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
          {/* <BsLinkedin
            className="icon"
            style={{
              margin: "2vw",
            }}
            onMouseOver={({ target }) => (target.style.color = "pink")}
            onMouseOut={({ target }) => (target.style.color = "black")}
            size="3.5vw"
          />
          <FaInstagram
            className="icon"
            style={{
              margin: "2vw",
            }}
            onMouseOver={({ target }) => (target.style.color = "pink")}
            onMouseOut={({ target }) => (target.style.color = "black")}
            size="3.5vw"
          />
          <FaGithub
            className="icon"
            style={{
              margin: "2vw",
            }}
            onMouseOver={({ target }) => (target.style.color = "pink")}
            onMouseOut={({ target }) => (target.style.color = "black")}
            size="3.5vw"
          /> */}
        </section>
      </section>
      <section className="hero-right">
        <img className="pink-blob" src={PinkBlob} alt="pink-blob" />
        <img
          className="light-pink-blob"
          src={LightPinkBlob}
          alt="light-pink-blob"
        />
        <img className="laptop-wave" src={LaptopWave} alt="LaptopWave" />
      </section>
    </div>
  );
};

export default Hero;
