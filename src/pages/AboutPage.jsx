import React from 'react';
import Navbar from '../components/NavbarCSS';
import AboutSection from '../components/AboutSection';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const AboutPage = () => {
  return (
    <div className="min-h-screen">
         <SEO 
        title="About Us | Labour Bridge"
        description="Learn more about Labour Bridge and how we connect skilled workers with job opportunities."
      />
      <Navbar />
      
      {/* About Us Page Content */}
      <div className="pt-16"> {/* Account for fixed navbar */}
        <AboutSection />
      </div>
      
      <Footer />
    </div>
  );
};

export default AboutPage;