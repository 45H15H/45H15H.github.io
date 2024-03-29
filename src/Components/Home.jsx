/**
 * Home component
 *
 * The section at the top of the page to display image of your
 * choice, name and title that describes your career focus.
 */

import React from "react";
import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";

import "./Home.css";

/**
 * Home background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
// import landscapeImage from "../images/woman-with-tablet.jpg";
import landscapeImage from "../images/blood-ffffff-bg.webp";
// import portraitImage from "../images/portrait-girl-with-laptop.jpg";

const imageAltText = "Adult female in office setting leaning against a glass wall while holding a platinum Microsoft Surface Pro 7 in tablet mode preparing to write with Microsoft Surface Pen";

const downloadCV = () => {
  window.open("https://45h15h.github.io/resume/", "_blank");
};

const Home = ({ name, title }) => {
  return (
    <section id="home" className="min-height">
      <img className="home-background" src={landscapeImage} alt="" />
      <div className="name-title">
        <h1>{name}</h1>
        <h2>{title}</h2>
      </div>
      <div className="arrow-down">
        <img src={arrowSvg} alt={imageAltText} className="bounce"/>
      </div>
      <div className="download-cv">
        <button className="cv-button" onClick={downloadCV}>RESUME</button>
      </div>
    </section>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
