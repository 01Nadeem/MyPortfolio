// App.jsx
import React from "react";
import PortfolioHeader from "./Sections/Hero"; // Adjust path if needed
import AboutSection from "./Sections/About"; // Adjust path if needed
import Specification1 from "./Sections/Specification1";
import Skills from "./Sections/Skills";
import Specification2 from "./Sections/Specification2";
import Project from "./Sections/Project";
import Contact from "./Sections/Contact";

function App() {
  return (
    <div className="App">
      <PortfolioHeader />
      <AboutSection />
      <Specification1 />
      <Skills />
      <Specification2 />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
