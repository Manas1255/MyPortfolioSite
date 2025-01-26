import React, { Fragment } from "react";
import { Element } from "react-scroll";
import About from "../../components/about/about";
import BackToTop from "../../components/backToTop/backToTop";
import ContactArea from "../../components/ContactArea";
import Footer from "../../components/footer/Footer";
import Hero from "../../components/hero/hero";
import Marquee from "../../components/marque/marque";
import Navbar from "../../components/Navbar/Navbar";
import ProjectSection from "../../components/ProjectSection/ProjectSection";
import ServiceSection from "../../components/ServiceSection/ServiceSection";

const HomePage = () => {
  return (
    <Fragment>
      <Navbar />
      <Element name="home">
        <Hero />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="service">
        <ServiceSection />
      </Element>
      <Marquee />
      <Element name="project">
        <ProjectSection />
      </Element>
      {/* <Testimonial /> */}
      {/* <Element name="blog">
        <BlogSection />
      </Element> */}
      {/* <Pricing /> */}
      <Element name="contact">
        <ContactArea />
      </Element>
      <Footer />
      <BackToTop />
    </Fragment>
  );
};
export default HomePage;
