import React from "react";

import "./header.css";

const Header = () => {
  return (
    <section className="header-cection">
      <section className="header-left">
        <div className="header-name">Linoy</div>
        <span>toggle</span>
      </section>
      <section className="header-right">
        <div className="header-list">
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>Experience</li>
            <li>Portfolio</li>
            <li>Testimonials</li>
          </ul>
        </div>
        <button className="button header-btn">contact us</button>
      </section>
    </section>
  );
};

export default Header;
