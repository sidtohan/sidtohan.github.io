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

  const aboutMe = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt reprehenderit officia impedit vel, laudantium accusamus, possimus minus molestias culpa doloribus natus eos. In molestias doloremque delectus est, fuga aperiam ea.`;
  const pic = null;
  return (
    <>
      <Header sections={sections} name={name} />
      <Welcome />
      <About data={aboutMe} pic={null} />
      <Skills />
      <Projects />
      <Achievements />
      <Contact />
    </>
  );
};

export default App;
