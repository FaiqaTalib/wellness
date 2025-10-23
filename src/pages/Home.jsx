import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Apps from "../components/Apps";
import Testimonials from "../components/Testominals";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Video from "../components/home/Video";
import AboutUs from "../components/AboutUs";
import ScrollToTop from "../components/ScrollToTop";
import HomeHeroText from "../components/home/HomeHeroText";
import Services from '../components/Services'

import Diet from "../components/Diet";

import Projects from "../components/Projects";
import FutureSection from "../components/FutureSection";

const Home = () => {
  return (
    // ✅ Apply a consistent dark background + text color
    <div className="bg-[#0a0a0a] text-gray-200 min-h-screen overflow-x-hidden">
      <Navbar />

      {/* Hero & Intro */}
      <HomeHeroText />
      <AboutUs />
      <Hero />

      {/* Main Content Sections */}
      <Projects />
      <About />
      <Apps />
      <Diet />
      <Services />
      <FutureSection />
      <Testimonials />
      <Contact />

      {/* Utilities */}
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default Home;
