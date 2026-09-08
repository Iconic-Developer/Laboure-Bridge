
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
        title="Construction Labour & Workforce Solutions in India | Labour Bridges"
        description="Labour Bridges connects contractors, construction companies and infrastructure projects with skilled and unskilled workers across India."
        url="https://www.labourbridges.com/"
        image="https://www.labourbridges.com/logo.png"
      />

      <Navbar />

      <main>
        <Video />
        <HeroSection />
      </main>

      <Footer />
    </>
  );
};

export default Home;

