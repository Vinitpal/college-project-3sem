import React from "react";
import Navbar from "./components/Home-page/Navbar";
import HeroSection from "./components/Home-page/HeroSection";
import Overview from "./components/Home-page/Overviews";
import Testimonial from "./components/Home-page/Testimonial";
import "./App.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Overview />
      <Testimonial />
    </div>
  );
};

export default App;
