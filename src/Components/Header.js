import React from "react";

const Header = ({ name, sections }) => {
  const handleClick = (section) => {
    section = section.toLowerCase();
    if (section === "home") section = "welcome";
    const reqDiv = document.querySelector(`.${section}`);
    console.log(reqDiv);
  };
  return (
    <header>
      <h1 className="header-name">{name}</h1>
      <nav className="header-nav">
        <ul>
          {sections.map((section) => (
            <li
              key={section}
              className="header-nav-option"
              onClick={() => handleClick(section)}
            >
              {section}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
