// Libraries
import React from "react";

// Components
import Header from "./Components/Header";
import Welcome from "./Components/Welcome";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Achievements from "./Components/Achievements";
import Contact from "./Components/Contact";

const App = () => {
  // Variables/ Props
  // Header
  const uname = "sidtohan";
  const sections = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Achievements",
    "Contact",
  ];

  // Welcome
  const pic = "pfp.png";

  // About Me
  const fname = "Siddhant Tohan";
  const aboutMe = [
    `
  Currently learning more about the MERN Stack, and many other technologies.
  
  `,
    `Pursuing a B.Tech degree from Netaji Subhas University of Technology in the field of Mathematics and Computing.`,
  ];
  // Skills
  const skills = [
    "HTML5",
    "CSS3",
    "Javascript",
    "React",
    "SASS",
    "node.js",
    "Redux",
    "Python",
  ];

  // Projects
  const projects = [
    {
      projectName: "Weather App",
      projectDesc:
        "uses OpenWeatherAPI to display the weather of a specified city.",
      liveLink: "https://sidtohan.github.io/Weather-App/",
      repoLink: "https://github.com/sidtohan/Weather-App",
    },
    {
      projectName: "Calculator",
      projectDesc:
        "uses vanilla JS and DOM manipulation to act as a reliable substitute for a desk calculator.",
      liveLink: "https://sidtohan.github.io/Calculator",
      repoLink: "https://github.com/sidtohan/Calculator",
    },
    {
      projectName: "Oxygen and Ventilator Management System",
      projectDesc:
        "uses php and SQL to store and manage all information related to oxygen cylinders and ventilators.",
      repoLink: "https://github.com/sidtohan/DBMS-Project",
    },
  ];

  // Achievements
  const achievements = [
    {
      achievement: "",
      logo: "",
    },
  ];
  return (
    <>
      {/* <Header sections={sections} name={uname} /> */}
      <Welcome pic={pic} />
      <About aboutMe={aboutMe} name={fname} />
      <Skills skills={skills} />
      <Projects projects={projects} />
      {/* <Achievements achievements={achievements} />
      <Contact /> */}
    </>
  );
};

export default App;
