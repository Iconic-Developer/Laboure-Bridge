import React, { useState } from "react";
import "./Workforce.css";
import Navbar from "./NavbarCSS.jsx";
import Footer from "./Footer.jsx";

const gallery = [
  {
  image: "/workforce/team_1.jpeg",
  category: "skilled",
  caption: "Our dedicated team ready to build the future.",
},
{
  image: "/workforce/team_2.jpeg",
  category: "project",
  caption: "Precision work, strong foundations.",
},
{
  image: "/workforce/team_3.jpeg",
  category: "workforce",
  caption: "Working together to achieve more.",
},
{
  image: "/workforce/team_4.jpeg",
  category: "teamwork",
  caption: "Skilled hands at work, building with pride.",
},
{
  image: "/workforce/team_5.jpeg",
  category: "site",
  caption: "Commitment to safety, commitment to quality.",
},
{
  image: "/workforce/team_6.jpeg",
  category: "project",
  caption: "Planning today, building tomorrow.",
},
{
  image: "/workforce/team_7.jpeg",
  category: "workforce",
  caption: "Every detail matters, every time.",
},
{
  image: "/workforce/team_8.jpeg",
  category: "site",
  caption: "United by teamwork, driven by purpose.",
},
{
  image: "/workforce/team_9.jpeg",
  category: "teamwork",
  caption: "Building stronger structures, together.",
},
{
  image: "/workforce/team_10.jpeg",
  category: "workforce",
  caption: "Building stronger structures, together.",
},
{
  image: "/workforce/team_11.jpeg",
  category: "site",
  caption: "Laying the groundwork for a better tomorrow.",
},
{
  image: "/workforce/team_12.jpeg",
  category: "skilled",
  caption: "Working together to achieve more.",
},
{
  image: "/workforce/team_13.jpeg",
  category: "project",
  caption: "Skilled hands at work, building with pride.",
},
{
  image: "/workforce/team_14.jpeg",
  category: "teamwork",
  caption: "Commitment to safety, commitment to quality.",
},
{
  image: "/workforce/team_15.jpeg",
  category: "workforce",
  caption: "Planning today, building tomorrow.",
},
{
  image: "/workforce/team_16.jpeg",
  category: "site",
  caption: "Every detail matters, every time.",
},
{
  image: "/workforce/team_17.jpeg",
  category: "project",
  caption: "United by teamwork, driven by purpose.",
},
{
  image: "/workforce/team_18.jpeg",
  category: "workforce",
  caption: "Building stronger structures, together.",
},
{
  image: "/workforce/team_19.jpeg",
  category: "teamwork",
  caption: "Expertise in every connection.",
},
{
  image: "/workforce/team_20.jpeg",
  category: "skilled",
  caption: "Hard work today, stronger tomorrow.",
},
{
  image: "/workforce/team_21.jpeg",
  category: "site",
  caption: "Laying the groundwork for a better tomorrow.",
},
{
  image: "/workforce/team_22.jpeg",
  category: "project",
  caption: "Expertise in every connection.",
},
{
  image: "/workforce/team_23.jpeg",
  category: "teamwork",
  caption: "Hard work today, stronger tomorrow.",
},
{
  image: "/workforce/team_24.jpeg",
  category: "workforce",
  caption: "Laying the groundwork for a better tomorrow.",
},
{
  image: "/workforce/team_25.jpeg",
  category: "site",
  caption: "Our dedicated team ready to build the future.",
},
{
  image: "/workforce/team_26.jpeg",
  category: "skilled",
  caption: "Precision work, strong foundations.",
},
{
  image: "/workforce/team_27.jpeg",
  category: "project",
  caption: "Working together to achieve more.",
},
{
  image: "/workforce/team_28.jpeg",
  category: "teamwork",
  caption: "Skilled hands at work, building with pride.",
},
{
  image: "/workforce/team_29.jpeg",
  category: "workforce",
  caption: "Commitment to safety, commitment to quality.",
},
{
  image: "/workforce/team_30.jpeg",
  category: "site",
  caption: "Planning today, building tomorrow.",
},
{
  image: "/workforce/team_31.jpeg",
  category: "project",
  caption: "Every detail matters, every time.",
},
{
  image: "/workforce/team_32.jpeg",
  category: "skilled",
  caption: "United by teamwork, driven by purpose.",
},
{
  image: "/workforce/team_33.jpeg",
  category: "teamwork",
  caption: "Building stronger structures, together.",
},
{
  image: "/workforce/team_34.jpeg",
  category: "workforce",
  caption: "Expertise in every connection.",
},
{
  image: "/workforce/team_35.jpeg",
  category: "site",
  caption: "Strength built through skill.",
},
{
  image: "/workforce/team_36.jpeg",
  category: "project",
  caption: "Skilled hands, reliable results.",
},
{
  image: "/workforce/team_37.jpeg",
  category: "teamwork",
  caption: "Precision that makes a difference.",
},
{
  image: "/workforce/team_38.jpeg",
  category: "workforce",
  caption: "Committed to quality work.",
},
{
  image: "/workforce/team_39.jpeg",
  category: "skilled",
  caption: "Experience you can rely on.",
},
{
  image: "/workforce/team_40.jpeg",
  category: "site",
  caption: "Building with confidence and care.",
},
{
  image: "/workforce/team_41.jpeg",
  category: "project",
  caption: "Professionalism in every task.",
},
{
  image: "/workforce/team_42.jpeg",
  category: "teamwork",
  caption: "Skill that drives progress.",
},
{
  image: "/workforce/team_43.jpeg",
  category: "workforce",
  caption: "Dedicated people, dependable work.",
},

{
  image: "/workforce/team_45.jpeg",
  category: "site",
  caption: "Quality begins with skilled hands.",
},
{
  image: "/workforce/team_46.jpeg",
  category: "project",
  caption: "Work powered by experience.",
},
{
  image: "/workforce/team_47.jpeg",
  category: "teamwork",
  caption: "Reliable skills. Strong results.",
},
{
  image: "/workforce/team_48.jpeg",
  category: "workforce",
  caption: "Every task deserves the right expertise.",
},
{
  image: "/workforce/team_49.jpeg",
  category: "site",
  caption: "Working together with purpose.",
},
{
  image: "/workforce/team_50.jpeg",
  category: "project",
  caption: "Where skill meets dedication.",
},
{
  image: "/workforce/team_51.jpeg",
  category: "teamwork",
  caption: "Expert hands, reliable results.",
},
{
  image: "/workforce/team_52.jpeg",
  category: "workforce",
  caption: "Strength built through hard work.",
},
{
  image: "/workforce/team_53.jpeg",
  category: "site",
  caption: "Precision in every task.",
},
{
  image: "/workforce/team_54.jpeg",
  category: "skilled",
  caption: "Together, we build with purpose.",
},
{
  image: "/workforce/team_55.jpeg",
  category: "project",
  caption: "Experience that makes a difference.",
},
{
  image: "/workforce/team_56.jpeg",
  category: "teamwork",
  caption: "Hard work powering every project.",
},
{
  image: "/workforce/team_57.jpeg",
  category: "workforce",
  caption: "Crafted with skill and commitment.",
},
{
  image: "/workforce/team_58.jpeg",
  category: "site",
  caption: "Dedicated hands behind every success.",
},
{
  image: "/workforce/team_59.jpeg",
  category: "skilled",
  caption: "Professional skill, dependable performance.",
},
{
  image: "/workforce/team_60.jpeg",
  category: "project",
  caption: "Every effort moves the project forward.",
},
{
  image: "/workforce/team_61.jpeg",
  category: "teamwork",
  caption: "Strong teamwork creates stronger results.",
},
{
  image: "/workforce/team_62.jpeg",
  category: "site",
  caption: "Building progress through skill and dedication.",
},
{
  image: "/workforce/team_63.jpeg",
  category: "workforce",
  caption: "Dedicated hands turning plans into reality.",
},
{
  image: "/workforce/team_64.jpeg",
  category: "safety",
  caption: "Safety and responsibility come first on every site.",
},
{
  image: "/workforce/team_65.jpeg",
  category: "project",
  caption: "Step by step, every project reaches new heights.",
},
{
  image: "/workforce/team_66.jpeg",
  category: "teamwork",
  caption: "Together, we make every challenge achievable.",
},
{
  image: "/workforce/team_67.jpeg",
  category: "workforce",
  caption: "Skilled workers powering progress every day.",
},
{
  image: "/workforce/team_68.jpeg",
  category: "site",
  caption: "Precision work lays the foundation for success.",
},
{
  image: "/workforce/team_69.jpeg",
  category: "achievement",
  caption: "Another milestone achieved through collective effort.",
},
{
  image: "/workforce/team_70.jpeg",
  category: "safety",
  caption: "A safe workplace is the foundation of great work.",
},
{
  image: "/workforce/team_71.jpeg",
  category: "teamwork",
  caption: "One team, one goal, one successful project.",
},
{
  image: "/workforce/team_72.jpeg",
  category: "project",
  caption: "Commitment today creates success tomorrow.",
},
{
  image: "/workforce/team_73.jpeg",
  category: "workforce",
  caption: "Hard work and expertise make progress possible.",
},
{
  image: "/workforce/team_74.jpeg",
  category: "site",
  caption: "Every task completed brings us closer to the goal.",
},
{
  image: "/workforce/team_75.jpeg",
  category: "achievement",
  caption: "Proud moments are built through consistent effort.",
},
{
  image: "/workforce/team_76.jpeg",
  category: "safety",
  caption: "Working smart, working safely, working together.",
},
{
  image: "/workforce/team_77.jpeg",
  category: "teamwork",
  caption: "Collaboration turns hard work into great achievements.",
},
{
  image: "/workforce/team_7.jpeg",
  category: "project",
  caption: "Moving forward with purpose, passion, and teamwork.",
},
];

const categories = [
  { id: "all", label: "All" },
  { id: "workforce", label: "Our Workforce" },
  { id: "site", label: "On Site" },
  { id: "teamwork", label: "Teamwork" },
  { id: "skilled", label: "Skilled Hands" },
  { id: "project", label: "Project Moments" },
];

export default function Workforce() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);

  // pagination logic

const [currentPage, setCurrentPage] = useState(1);

const imagesPerPage = 12;

  const filteredImages =
  activeCategory === "all"
    ? gallery
    : gallery.filter((item) => item.category === activeCategory);

const totalPages = Math.ceil(filteredImages.length / imagesPerPage);

const startIndex = (currentPage - 1) * imagesPerPage;

const currentImages = filteredImages.slice(
  startIndex,
  startIndex + imagesPerPage
);

  return (
    <>
    <main className="workforce-page">
      <Navbar />

      {/* HERO */}
      <section className="workforce-hero">
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <span className="hero-small">LABOUR BRIDGES INDIA</span>

          <h1>
            Our Workforce
            <span> in Action</span>
          </h1>

          <div className="hero-line"></div>

          <p>
            Dedicated people. Strong teamwork.
            <br />
            Successful projects.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="workforce-intro container">

        <div className="intro-text">
          <span className="section-label">WHO WE ARE</span>

          <h2>
            The People Behind
            <br />
            Every Project
          </h2>

          <p>
            At Labour Bridges India, we believe that great projects are
            built by great people. Our workforce is our strength — skilled,
            dedicated and committed to delivering quality on every site,
            every single day.
          </p>
        </div>

        <div className="quote-card">
          <div className="quote-mark">“</div>

          <blockquote>
            Every structure begins with a vision,
            <br />
            but it takes skilled hands
            <br />
            to bring it to life.
          </blockquote>

          <span>— Labour Bridges India</span>
        </div>

      </section>

      {/* STATS */}
      <section className="stats-section container">

        <div className="stat-card">
          <div className="stat-icon">👷</div>
          <div>
            <strong>2500+</strong>
            <span>Workers</span>
            <small>Skilled & Unskilled</small>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">🏗️</div>
          <div>
            <strong>150+</strong>
            <span>Projects</span>
            <small>Completed Successfully</small>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">📍</div>
          <div>
            <strong>80+</strong>
            <span>Sites</span>
            <small>Across India</small>
          </div>
        </div>

  

      </section>

      {/* GALLERY */}
      <section className="gallery-section container">

        <div className="gallery-header">
          <span className="section-label">LIFE ON SITE</span>

          <h2>Workforce in Action</h2>

          <p>
            A glimpse into the people, teamwork and dedication
            behind the projects we help bring to life.
          </p>
        </div>

        {/* FILTERS */}
        <div className="gallery-filters">

          {categories.map((category) => (
            <button
              key={category.id}
              className={
                activeCategory === category.id ? "active" : ""
              }
              onClick={() => {
  setActiveCategory(category.id);
  setCurrentPage(1);
}}
            >
              {category.label}
            </button>
          ))}

        </div>

        {/* IMAGE GRID */}
        <div className="gallery-grid">

          {currentImages.map((item, index) => (
            <div
              className={`gallery-item item-${index % 4}`}
              key={item.image}
              onClick={() => setSelectedImage(item)}
            >
              <img
                src={item.image}
                alt={item.caption}
                loading="lazy"
              />

              <div className="gallery-overlay">
                <div>
                  <p>{item.caption}</p>

                  <span>View Photo ↗</span>
                </div>
              </div>
            </div>
          ))}

        </div>
{totalPages > 1 && (
  <div className="pagination">

    <button
      onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
      disabled={currentPage === 1}
    >
      ← Previous
    </button>

    {Array.from({ length: totalPages }, (_, index) => (
      <button
        key={index + 1}
        className={currentPage === index + 1 ? "active" : ""}
        onClick={() => setCurrentPage(index + 1)}
      >
        {index + 1}
      </button>
    ))}

    <button
      onClick={() =>
        setCurrentPage((prev) => Math.min(prev + 1, totalPages))
      }
      disabled={currentPage === totalPages}
    >
      Next →
    </button>

  </div>
)}
      </section>

      {/* QUOTE BANNER */}
      <section className="quote-banner">
        <div className="container quote-banner-inner">

          <div className="p-2">
            <span className="section-label">
              BUILT BY PEOPLE
            </span>

            <h2>
              Strong teams build
              <br />
              strong foundations.
            </h2>
          </div>

          <p>
            From the first brick to the final finish,
            our people make progress possible.
          </p>

        </div>
      </section>

      {/* CTA */}
      <section className="workforce-cta container">

        <div className="cta-content">
          <span className="section-label">
            LET'S BUILD TOGETHER
          </span>

          <h2>
            Need a Reliable Workforce
            <br />
            for Your Next Project?
          </h2>

          <p>
            Partner with Labour Bridges India and get access
            to skilled, reliable and committed manpower
            tailored to your project requirements.
          </p>

          <a href="/contact" className="cta-button">
            Get In Touch
            <span>→</span>
          </a>
        </div>

      </section>

      {/* LIGHTBOX */}
      {selectedImage && (
        <div
          className="lightbox"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="lightbox-close"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>

          <img
            src={selectedImage.image}
            alt={selectedImage.caption}
            onClick={(e) => e.stopPropagation()}
          />

          <div className="lightbox-caption">
            {selectedImage.caption}
          </div>
        </div>
      )}

    </main>
    <footer>
      <Footer />
    </footer>
    </>
  );
}