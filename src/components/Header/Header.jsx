import React from "react";

import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <section className="header-cection">
      <section className="header-left">
        <Link to="/">
          <div className="header-name">Linoy</div>
        </Link>

        <span>toggle</span>
      </section>
      <section className="header-right">
        <div className="header-list">
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/services">
              <li>Services</li>
            </Link>
            <Link to="/experience">
              <li>Experience</li>
            </Link>
            <Link to="/portfolio">
              <li>Portfolio</li>
            </Link>
            <Link to="/testimonials">
              <li>Testimonials</li>
            </Link>
          </ul>
        </div>
        <Link to="/contact">
          <button className="button header-btn">contact us</button>
        </Link>
      </section>
    </section>
  );
};

export default Header;
