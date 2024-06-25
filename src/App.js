import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Preloader from "./component/Pre";
// import About from "./component/About";
// import Contact from "./component/Contact";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import Project from "./component/Project";
import Projects from "./component/Projects";
import Skill from "./component/Skill";
// import Sociallinks from "./component/Sociallinks";
// import Footer from "./component/Footer";
import "./App.css";

function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/project/:projectName" element={<Project />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;