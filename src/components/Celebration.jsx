import React, { useState } from "react";
import "./Celebration.css";

const celebrations = [
  {
    id: 1,
    type: "image",
    image: "/celebration/christmas_1_2025.jpeg",
    category: "Festivals",
    title: "Together We Celebrate",
    description: "Building stronger teams beyond the workplace.",
  },
    {
    id: 2,
    type: "image",
    image: "/celebration/christmas_2_2025.jpeg",
    category: "Festivals",
    title: "Festive Team Spirit",
    description: "Spreading happiness and creating memorable moments together.",
  },
    {
    id: 3,
    type: "image",
    image: "/celebration/christmas_3_2025.jpeg",
    category: "Festivals",
    title: "A Season to Remember",
    description: "Bringing our team closer through celebration and cheer.",
  },   {
    id: 4,
    type: "image",
    image: "/celebration/christmas_4_2025.jpeg",
    category: "Festivals",
    title: "A Season to Remember",
    description: "Bringing our team closer through celebration and cheer.",
  },   {
    id: 5,
    type: "image",
    image: "/celebration/christmas_5_2025.jpeg",
    category: "Festivals",
    title: "A Season to Remember",
    description: "Bringing our team closer through celebration and cheer.",
  },
   {
    id: 6,
    type: "image",
    image: "/celebration/holi_2026.jpeg",
    category: "Festivals",
    title: "Colors of Togetherness",
    description: "Celebrating the vibrant spirit of Holi with our team.",
  },
    {
    id: 7,
    type: "image",
    image: "/celebration/holi_2_2026.jpeg",
    category: "Festivals",
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
  {
  id: 9,
  type: "image",
  image: "/celebration/independence_2_2026.jpeg",
  category: "Celebrations",
  title: "Freedom & Unity",
  description: "A proud celebration filled with patriotism, teamwork, and unforgettable moments.",
},

{
  id: 10,
  type: "image",
  image: "/celebration/independence_1_2026.jpeg",
  category: "Celebrations",
  title: "Celebrating Together",
  description: "Bringing everyone together to celebrate the spirit of independence with pride and joy.",
},
{
  id: 11,
  type: "image",
  image: "/celebration/conference.jpeg",
  category: "Achievements",
  title: "Proud Moments",
  description: "Honoring the milestones that inspire us to aim higher and achieve even more together.",
},
{
  id: 12,
  type: "image",
  image: "/celebration/mla_1.jpeg",
  category: "Achievements",
  title: "A Moment of Recognition",
  description: "A memorable visit that reflects our commitment to excellence, teamwork, and meaningful work on the ground.",
},
{
  id: 13,
  type: "image",
  image: "/celebration/mla_2.jpeg",
  category: "Achievements",
  title: "Celebrating Together",
  description: "Bringing everyone together to celebrate the spirit of independence with pride and joy.",
},

// soni birthday
{
  id: 14,
  type: "image",
  image: "/celebration/soni_birthday_1.jpeg",
  category: "Birthday",
  title: "Birthday Joy",
  description: "Sharing smiles, laughter, and warm wishes as we make every birthday a special celebration.",
},

{
  id: 15,
  type: "video",
  image: "/celebration/soni_birthday_2.mp4",
  category: "Birthday",
  title: "A Day to Celebrate",
  description: "Wishing our team members a birthday filled with happiness, laughter, and memorable moments.",
},

{
  id: 16,
  type: "video",
  image: "/celebration/soni_birthday_3.mp4",
  category: "Birthday",
  title: "Cheers to Another Year",
  description: "Celebrating another year of growth, success, and happiness with our amazing team.",
},

{
  id: 17,
  type: "video",
  image: "/celebration/soni_birthday_4.mp4",
  category: "Birthday",
  title: "Birthday Joy",
  description: "Sharing smiles, laughter, and warm wishes as we make every birthday a special celebration.",
},


];

const categories = [
  "All",
  "Celebrations",
  "Festivals",
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