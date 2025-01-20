import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import profilepic1 from "../../images/profile-pics/profile-pic-1.JPG";

const Hero = () => {
  return (
    <section className="tp-hero-section-1">
      <div className="container">
        <div className="row">
          <div className="col col-xs-7 col-lg-7">
            <div className="tp-hero-section-text">
              <div className="tp-hero-title">
                <h2>App Developer</h2>
              </div>
              <div className="tp-hero-sub">
                <p>M. Anas Akhtar</p>
              </div>
              <div className="btns">
                <Link
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-95}
                  className="theme-btn"
                >
                  Get In Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right-vec">
        <div className="right-img">
          <img src={profilepic1} alt="" />
        </div>
      </div>
      <div className="social-link">
        <ul>
          <li>
            <NavLink to="/">Facebook</NavLink>
          </li>
          <li>
            <NavLink to="/">Twitter</NavLink>
          </li>
          <li>
            <NavLink to="/">Instagram</NavLink>
          </li>
        </ul>
      </div>
      <div className="visible-text">
        <h1>Developer</h1>
      </div>
    </section>
  );
};

export default Hero;
