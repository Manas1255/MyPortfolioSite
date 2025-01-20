import React from "react";
import profilepic2 from "../../images/profile-pics/profile-pic-2.JPG";

const About = (props) => {
  return (
    <section className="tf-about-section section-padding">
      <div className="container">
        <div className="tf-about-wrap">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 col-12">
              <div className="tf-about-img">
                <img src={profilepic2} alt="" />
                <div className="tf-about-img-text">
                  <div className="tf-about-icon">
                    <h3>8+</h3>
                    <span>Years Exprience</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12">
              <div className="tf-about-text">
                <small>about Me</small>
                <h2>Overview</h2>
                <h5>
                  I have 8+ years of experiences in Software Development for
                  give you better services.
                </h5>
                <p>
                  Specializing in mobile app development, I create seamless and
                  high-performing applications for both iOS and Android
                  platforms. With expertise in React Native and Flutter, I
                  leverage these cutting-edge technologies to deliver versatile
                  and efficient cross-platform solutions.{" "}
                </p>

                <div className="tf-funfact">
                  <div className="tf-funfact-item">
                    <h3>
                      <span>500</span>+
                    </h3>
                    <p>Projects Completed</p>
                  </div>
                  <div className="tf-funfact-item">
                    <h3>
                      <span>52</span>+
                    </h3>
                    <p>Awards Win</p>
                  </div>
                  <div className="tf-funfact-item">
                    <h3>
                      <span>2</span>M+
                    </h3>
                    <p>Happy clients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="visible-rotate-text">
        <h1>About Me</h1>
      </div>
    </section>
  );
};

export default About;
