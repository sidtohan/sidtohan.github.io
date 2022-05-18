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
    {
      skillName: "HTML",
      icon: "",
    },
    {
      skillName: "CSS",
      icon: "",
    },
    {
      skillName: "Javascript",
      icon: "",
    },
    {
      skillName: "React",
      icon: "",
    },
    {
      skillName: "SASS",
      icon: "",
    },
    {
      skillName: "node.js",
      icon: "",
    },
    {
      skillName: "Redux",
      icon: "",
    },
    {
      skillName: "Python",
      icon: "",
    },
  ];

  // Projects
  const projects = [
    {
      projectName: "Weather App",
      projectDesc:
        "uses OpenWeatherAPI to display the weather of a specified city",
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
      <Header sections={sections} name={uname} />
      <Welcome pic={pic} />
      <About aboutMe={aboutMe} name={fname} />
      <Skills skills={skills} />
      <Projects projects={projects} />
      <Achievements achievements={achievements} />
      <Contact />
    </>
  );
};

export default App;
