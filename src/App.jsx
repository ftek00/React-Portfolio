import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Use Routes and element in v6
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        {" "}
        <Route path="/" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
