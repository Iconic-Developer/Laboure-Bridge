import React, { useState } from "react";
import "./Celebration.css";

const celebrations = [
  {
    id: 1,
    image: "/images/celebrations/team-1.jpg",
    category: "Team",
    title: "Together We Celebrate",
    description: "Building stronger teams beyond the workplace.",
  },
  {
    id: 2,
    image: "/images/celebrations/festival-1.jpg",
    category: "Occasions",
    title: "Festival Celebrations",
    description: "Celebrating traditions and creating memories together.",
  },
  {
    id: 3,
    image: "/images/celebrations/birthday-1.jpg",
    category: "Birthdays",
    title: "Birthday Moments",
    description: "A little celebration for our amazing team members.",
  },
  {
    id: 4,
    image: "/images/celebrations/team-2.jpg",
    category: "Team",
    title: "Team Moments",
    description: "Great people make great teams.",
  },
  {
    id: 5,
    image: "/images/celebrations/site-1.jpg",
    category: "Workforce",
    title: "Our Workforce in Action",
    description: "Celebrating the people behind every successful project.",
  },
  {
    id: 6,
    image: "/images/celebrations/festival-2.jpg",
    category: "Occasions",
    title: "Special Occasions",
    description: "Moments that bring us closer together.",
  },
  {
    id: 7,
    image: "/images/celebrations/achievement-1.jpg",
    category: "Achievements",
    title: "Celebrating Success",
    description: "Recognising hard work, dedication and achievement.",
  },
  {
    id: 8,
    image: "/images/celebrations/team-3.jpg",
    category: "Team",
    title: "Making Memories",
    description: "Because every journey is better together.",
  },
];

const categories = [
  "All",
  "Team",
  "Occasions",
  "Birthdays",
  "Workforce",
  "Achievements",
];

export default function Celebrations() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPhotos =
    activeCategory === "All"
      ? celebrations
      : celebrations.filter(
          (item) => item.category === activeCategory
        );

  return (
    <section className="celebrations-section" id="celebrations">
      <div className="celebrations-container">

        {/* Heading */}
        <div className="celebrations-heading">

          <div className="section-label">
            <span></span>
            LIFE AT LABOUR BRIDGES
          </div>

          <h2 className="text-yellow-500">
            Celebrations{" "}
            <small className="text-black">& </small>
            <span>Moments</span>
          </h2>

          <p>
            From festivals and team celebrations to achievements and
            everyday moments, we believe in celebrating the people
            who make our journey special.
          </p>

        </div>

        {/* Filters */}
        <div className="celebration-filters">
          {categories.map((category) => (
            <button
              key={category}
              className={
                activeCategory === category ? "active" : ""
              }
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery */}
        <div className="celebration-grid">

          {filteredPhotos.map((item) => (
            <div
              className="celebration-card"
              key={item.id}
            >

              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
              />

              <div className="celebration-overlay">

                <div className="instagram-icon">
                  ◎
                </div>

                <div className="celebration-content">
                  <span>{item.category}</span>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>
                </div>

              </div>

            </div>
          ))}

        </div>

        {/* Instagram Button */}
        <div className="instagram-button-wrapper">
          <a
            href="https://www.instagram.com/labour_bridges_india/"
            target="_blank"
            rel="noopener noreferrer"
            className="instagram-button"
          >
            <span className="instagram-button-icon">
              ◎
            </span>

            View More on Instagram

            <span className="arrow">
              →
            </span>
          </a>
        </div>

      </div>
    </section>
  );
}