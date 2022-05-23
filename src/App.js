// Libraries
import React, { useState } from "react";

// Components
import Header from "./Components/Header";
import Welcome from "./Components/Welcome";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Achievements from "./Components/Achievements";
import Contacts from "./Components/Contacts";

const App = () => {
  // Variables/ Props
  // Header
  const [ifPrimary, setIfPrimary] = useState(true);
  const [current, setCurrent] = useState(true);

  const uname = "sidtohan";
  const sections = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Achievements",
    "Contacts",
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
      achievement: "Grade 4/5 in Fullstack Open 2021",
      logo: "helsinki",
    },
    {
      achievement: "Global Rank 2907 in Google Kickstart 2021",
      logo: "google",
    },
    {
      achievement: "Global Rank 2970 in Google Hashcode 2022",
      logo: "google",
    },
  ];

  // Contacts
  const contacts = [
    { name: "Email", link: "siddhant.tohan.in@protonmail.com" },
    { name: "LinkedIn", link: "https://linkedin.com/in/siddhant-tohan" },
    { name: "Github", link: "https://github.com/sidtohan" },
    { name: "Codechef", link: "https://codechef.com/users/siddhant_tohan" },
  ];

  // All The Required Refs
  return (
    <>
      <Header
        sections={sections}
        name={uname}
        ifPrimary={ifPrimary}
        current={current}
      />
      <Welcome pic={pic} setIfPrimary={setIfPrimary} setCurrent={setCurrent} />
      <About
        aboutMe={aboutMe}
        name={fname}
        setIfPrimary={setIfPrimary}
        setCurrent={setCurrent}
      />
      <Skills
        skills={skills}
        setIfPrimary={setIfPrimary}
        setCurrent={setCurrent}
      />
      <Projects
        projects={projects}
        setIfPrimary={setIfPrimary}
        setCurrent={setCurrent}
      />
      <Achievements
        achievements={achievements}
        setIfPrimary={setIfPrimary}
        setCurrent={setCurrent}
      />
      <Contacts
        contacts={contacts}
        setIfPrimary={setIfPrimary}
        setCurrent={setCurrent}
      />
    </>
  );
};

export default App;
