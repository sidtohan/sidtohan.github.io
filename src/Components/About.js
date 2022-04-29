import React from "react";

const About = ({ data, pic }) => {
  return (
    <section className="about">
      <h2 className="section-heading">About</h2>
      <img src={pic} alt="Siddhant Tohan" />
      <p className="about-me-data">{data}</p>
    </section>
  );
};
export default About;
