import Navbar from "./components/NavbarCSS";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import ClientsSection from "./components/ClientsSection";
import OngoingProjectsSection from "./components/OngoingProjectsSection";
import Footer from "./components/Footer";
import Video from "./components/Video";
import Add from "./components/Add";
import Add2 from "./components/Add2";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Video />

      {/* <div>
        <Add />
      </div>
      {/* <div>
        <Add2 />
      </div> */}

      {/* Hero Section */}
      <div id="home">
        <HeroSection />
      </div>

      {/* Services Section */}
      <div id="services">
        <ServicesSection />
      </div>

      {/* Clients & Why Choose Us Section */}
      <div id="clients">
        <ClientsSection />
      </div>

      {/* Ongoing Projects Section */}
      <div id="ongoing-projects">
        <OngoingProjectsSection />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
