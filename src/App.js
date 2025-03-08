import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/Navbar";
import { Banner } from "./components/Banner";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Project } from "./components/Project";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div>
      <NavBar />
      <Banner />
      <About />
      <Skills />
      <Project />
      <Contact />
      <Footer />
      hh
    </div>
  );
}

export default App;
