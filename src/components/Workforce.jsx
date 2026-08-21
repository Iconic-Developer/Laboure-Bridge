import React, { useState } from "react";
import "./Workforce.css";
import Navbar from "./NavbarCSS.jsx";
import Footer from "./Footer.jsx";

const gallery = [
  {
    image: "/workforce/team_1.jpeg",
    category: "workforce",
    caption: "Our dedicated team ready to build the future.",
  },
  {
    image: "/workforce/team_2.jpeg",
    category: "site",
    caption: "Precision work, strong foundations.",
  },
  {
    image: "/workforce/team_3.jpeg",
    category: "teamwork",
    caption: "Working together to achieve more.",
  },
  {
    image: "/workforce/team_4.jpeg",
    category: "skilled",
    caption: "Skilled hands at work, building with pride.",
  },
  {
    image: "/workforce/team_5.jpeg",
    category: "site",
    caption: "Commitment to safety, commitment to quality.",
  },
  {
    image: "/workforce/team_6.jpeg",
    category: "teamwork",
    caption: "Planning today, building tomorrow.",
  },
  {
    image: "/workforce/team_7.jpeg",
    category: "skilled",
    caption: "Every detail matters, every time.",
  },
  {
    image: "/workforce/team_8.jpeg",
    category: "workforce",
    caption: "United by teamwork, driven by purpose.",
  },
  {
    image: "/workforce/team_9.jpeg",
    category: "skilled",
    caption: "Building stronger structures, together.",
  },  {
    image: "/workforce/team_10.jpeg",
    category: "skilled",
    caption: "Building stronger structures, together.",
  },
  {
    image: "/workforce/team_11.jpeg",
    category: "project",
    caption: "Laying the groundwork for a better tomorrow.",
  }, {
    image: "/workforce/team_12.jpeg",
    category: "teamwork",
    caption: "Working together to achieve more.",
  },
  {
    image: "/workforce/team_13.jpeg",
    category: "skilled",
    caption: "Skilled hands at work, building with pride.",
  },
  {
    image: "/workforce/team_14.jpeg",
    category: "site",
    caption: "Commitment to safety, commitment to quality.",
  },
  {
    image: "/workforce/team_15.jpeg",
    category: "teamwork",
    caption: "Planning today, building tomorrow.",
  },
  {
    image: "/workforce/team_16.jpeg",
    category: "skilled",
    caption: "Every detail matters, every time.",
  },
  {
    image: "/workforce/team_17.jpeg",
    category: "workforce",
    caption: "United by teamwork, driven by purpose.",
  },
  {
    image: "/workforce/team_18.jpeg",
    category: "skilled",
    caption: "Building stronger structures, together.",
  },
  {
    image: "/workforce/team_19.jpeg",
    category: "skilled",
    caption: "Expertise in every connection.",
  },
  {
    image: "/workforce/team_20.jpeg",
    category: "site",
    caption: "Hard work today, stronger tomorrow.",
  },
  {
    image: "/workforce/team_21.jpeg",
    category: "project",
    caption: "Laying the groundwork for a better tomorrow.",
  },
  {
    image: "/workforce/team_22.jpeg",
    category: "skilled",
    caption: "Expertise in every connection.",
  },
  {
    image: "/workforce/team_23.jpeg",
    category: "site",
    caption: "Hard work today, stronger tomorrow.",
  },
  {
    image: "/workforce/team_24.jpeg",
    category: "project",
    caption: "Laying the groundwork for a better tomorrow.",
  },{
    image: "/workforce/team_25.jpeg",
    category: "workforce",
    caption: "Our dedicated team ready to build the future.",
  },
  {
    image: "/workforce/team_26.jpeg",
    category: "site",
    caption: "Precision work, strong foundations.",
  },
  {
    image: "/workforce/team_27.jpeg",
    category: "teamwork",
    caption: "Working together to achieve more.",
  },
  {
    image: "/workforce/team_28.jpeg",
    category: "skilled",
    caption: "Skilled hands at work, building with pride.",
  },
  {
    image: "/workforce/team_29.jpeg",
    category: "site",
    caption: "Commitment to safety, commitment to quality.",
  },
  {
    image: "/workforce/team_30.jpeg",
    category: "teamwork",
    caption: "Planning today, building tomorrow.",
  },
  {
    image: "/workforce/team_31.jpeg",
    category: "skilled",
    caption: "Every detail matters, every time.",
  },
  {
    image: "/workforce/team_32.jpeg",
    category: "workforce",
    caption: "United by teamwork, driven by purpose.",
  },
  {
    image: "/workforce/team_33.jpeg",
    category: "skilled",
    caption: "Building stronger structures, together.",
  },
  {
    image: "/workforce/team_34.jpeg",
    category: "skilled",
    caption: "Expertise in every connection.",
  },
 {
  image: "/workforce/team_35.jpeg",
  category: "skilled",
  caption: "Strength built through skill.",
},
{
  image: "/workforce/team_36.jpeg",
  category: "skilled",
  caption: "Skilled hands, reliable results.",
},
{
  image: "/workforce/team_37.jpeg",
  category: "skilled",
  caption: "Precision that makes a difference.",
},
{
  image: "/workforce/team_38.jpeg",
  category: "skilled",
  caption: "Committed to quality work.",
},
{
  image: "/workforce/team_39.jpeg",
  category: "skilled",
  caption: "Experience you can rely on.",
},
{
  image: "/workforce/team_40.jpeg",
  category: "skilled",
  caption: "Building with confidence and care.",
},
{
  image: "/workforce/team_41.jpeg",
  category: "skilled",
  caption: "Professionalism in every task.",
},
{
  image: "/workforce/team_42.jpeg",
  category: "skilled",
  caption: "Skill that drives progress.",
},
{
  image: "/workforce/team_43.jpeg",
  category: "skilled",
  caption: "Dedicated people, dependable work.",
},
{
  image: "/workforce/team_44.jpeg",
  category: "skilled",
  caption: "Turning expertise into excellence.",
},
{
  image: "/workforce/team_45.jpeg",
  category: "skilled",
  caption: "Quality begins with skilled hands.",
},
{
  image: "/workforce/team_46.jpeg",
  category: "skilled",
  caption: "Work powered by experience.",
},
{
  image: "/workforce/team_47.jpeg",
  category: "skilled",
  caption: "Reliable skills. Strong results.",
},
{
  image: "/workforce/team_48.jpeg",
  category: "skilled",
  caption: "Every task deserves the right expertise.",
},
{
  image: "/workforce/team_49.jpeg",
  category: "skilled",
  caption: "Working together with purpose.",
},
{
  image: "/workforce/team_50.jpeg",
  category: "skilled",
  caption: "Where skill meets dedication.",
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

  const filteredImages =
    activeCategory === "all"
      ? gallery
      : gallery.filter((item) => item.category === activeCategory);

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
              onClick={() => setActiveCategory(category.id)}
            >
              {category.label}
            </button>
          ))}

        </div>

        {/* IMAGE GRID */}
        <div className="gallery-grid">

          {filteredImages.map((item, index) => (
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