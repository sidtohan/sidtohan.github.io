import React from "react";

const About = ({ aboutMe, name }) => {
  return (
    <section className="about-me">
      <h2 className="section-heading">My name is</h2>
      <span className="about-me-name">Siddhant Tohan</span>
      <p className="about-me-data">{aboutMe}</p>
    </section>
  );
};
export default About;
