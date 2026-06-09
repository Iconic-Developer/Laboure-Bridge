import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import Video from "../components/Video";


const Home = () => {
  return (
    <>
      <SEO 
        title="Labour Bridge - Connecting Skilled Workers"
        description="India's trusted platform connecting workers and contractors in construction and infrastructure."
      />

      <Navbar />
      <Video />
      <HeroSection />
      <Footer />
    </>
  );
};

export default Home;