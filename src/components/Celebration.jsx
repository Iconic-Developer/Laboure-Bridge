import React, { useState } from "react";
import "./Celebration.css";

const celebrations = [
  {
    id: 1,
    type: "image",
    image: "/celebration/christmas_1_2025.jpeg",
    category: "Christmas",
    title: "Together We Celebrate",
    description: "Building stronger teams beyond the workplace.",
  },
    {
    id: 2,
    type: "image",
    image: "/celebration/christmas_2_2025.jpeg",
    category: "Christmas",
    title: "Festive Team Spirit",
    description: "Spreading happiness and creating memorable moments together.",
  },
    {
    id: 3,
    type: "image",
    image: "/celebration/christmas_3_2025.jpeg",
    category: "Christmas",
    title: "A Season to Remember",
    description: "Bringing our team closer through celebration and cheer.",
  },   {
    id: 4,
    type: "image",
    image: "/celebration/christmas_4_2025.jpeg",
    category: "Christmas",
    title: "A Season to Remember",
    description: "Bringing our team closer through celebration and cheer.",
  },   {
    id: 5,
    type: "image",
    image: "/celebration/christmas_5_2025.jpeg",
    category: "Christmas",
    title: "A Season to Remember",
    description: "Bringing our team closer through celebration and cheer.",
  },
   {
    id: 6,
    type: "image",
    image: "/celebration/holi_2026.jpeg",
    category: "Holi",
    title: "Colors of Togetherness",
    description: "Celebrating the vibrant spirit of Holi with our team.",
  },
    {
    id: 7,
    type: "image",
    image: "/celebration/holi_2_2026.jpeg",
    category: "Holi",
    title: "Holi & Happiness",
    description: "Adding colors, laughter, and joyful memories to our workplace.",
  }, 
  {
    id: 8,
    type: "video",
    image: "/celebration/jyotirmoy_birthday.mp4",
    category: "Birthday",
    title: "Birthday Bash",
    description: "Adding colors, laughter, and joyful memories to our workplace.",
  },
  
];

const categories = [
  "All",
  "Christmas",
  "Holi",
  "Birthday",
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

      {item.type === "video" ? (
        <video
          src={item.image}
          autoPlay
          muted
          loop
          playsInline
        />
      ) : (
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
        />
      )}

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