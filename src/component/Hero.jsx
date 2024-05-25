import React from "react";
import Home from "./Home";
import About from "./About";

import Projects from "./Projects";
import Skill from "./Skill";
import Sociallinks from "./Sociallinks";
import Contact from "./Contact"

export default function Hero() {
  return (
    <main className="main-section">
      <Home/>
      
      <About />
      <Sociallinks/>
      <Skill/>
      <Projects />
      <Contact/>
    </main>
  );
}
