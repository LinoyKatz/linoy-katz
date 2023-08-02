import React from "react";

import "./services.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const Services = () => {
  return (
    <>
      <div className="services-page-div">
        <section className="services-div">
          <article className="skills-div-left">
            <h1>
              My <span>Skills</span>{" "}
            </h1>
          </article>
          <article className="skills-div-right">
            <ul className="ul1">
              <li>React JS</li>
              <li>HTML</li>
              <li>JS</li>
              <li>TypeScript</li>
              <li>MongoDB</li>
              <li>CSS</li>
              <li>Sass</li>
            </ul>
            <ul className="ul2">
              <li>SQL</li>
              <li>Node.js</li>
              <li>VSCode</li>
              <li>Bootstrap</li>
              <li>API</li>
              <li>Json</li>
              <li>WordPress</li>
            </ul>
          </article>
        </section>
        <ul className="my-services">
          <li>Code website design</li>
          <li>full website development</li>
          <li>Wordpress website design</li>
        </ul>
        <section className="about-me">
          hey i'm Linoy, <br />
          a Fullstack web developer <br />
          and i'm here to build your next website! <br />
          <Link to="/contact">
            <span>Contact me!</span>
          </Link>
        </section>
      </div>
    </>
  );
};

export default Services;
