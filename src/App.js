import React from "react";
import Header from "./Components/Header";
import Welcome from "./Components/Welcome";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Achievements from "./Components/Achievements";
import Contact from "./Components/Contact";

const App = () => {
  const name = "sidtohan";
  const sections = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Achievements",
    "Contact",
  ];

  return (
    <>
      <Header sections={sections} name={name} />
      <Welcome />
      <About />
      <Skills />
      <Projects />
      <Achievements />
      <Contact />
    </>
  );
};

export default App;
