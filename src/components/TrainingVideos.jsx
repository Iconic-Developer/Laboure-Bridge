
import { useState } from "react";

import {
  Star,
  Clock,
  BookOpen,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const courses = [
  {
    id: 1,
    category: "CONSTRUCTION TRADE",
    title: "Carpenter (Shuttering) Training",
    description:
      "Learn formwork installation, measurements, shuttering systems and professional construction techniques.",
    thumbnail: "/training/carpenter.avif",
    duration: "12 Minutes",
    lessons: "15 Lessons",
    rating: 4.8,
    reviews: 124,
    link: "https://labourbridges.talentlms.com/plus/courses",
  },
  {
    id: 2,
    category: "STEEL REINFORCEMENT",
    title: "Bar Bender & Steel Fixer",
    description:
      "Understand steel reinforcement, bar bending, cutting and placement techniques through practical learning.",
    thumbnail: "/training/bar bending.avif",
    duration: "15 Minutes",
    lessons: "18 Lessons",
    rating: 4.9,
    reviews: 98,
    link: "https://labourbridges.talentlms.com/plus/courses",
  },
  {
    id: 3,
    category: "ENGINEERING",
    title: "Fitter Training Program",
    description:
      "Explore mechanical fitting, equipment assembly, precision measurement and maintenance skills.",
    thumbnail: "/training/fitter.avif",
    duration: "10 Minutes",
    lessons: "12 Lessons",
    rating: 4.7,
    reviews: 86,
    link: "https://labourbridges.talentlms.com/plus/courses",
  },
  {
    id: 4,
    category: "INDUSTRIAL SAFETY",
    title: "Scaffolding Safety Training",
    description:
      "Learn scaffolding erection, inspection, fall protection and essential workplace safety practices.",
    thumbnail: "/training/scaffolding.avif",
    duration: "9 Minutes",
    lessons: "10 Lessons",
    rating: 4.8,
    reviews: 110,
    link: "https://labourbridges.talentlms.com/plus/courses",
  },

];

function TrainingVideos() {
  const [activeIndex, setActiveIndex] = useState(0);

const nextSlide = () => {
  setActiveIndex((prev) =>
    Math.min(prev + 1, courses.length - 3)
  );
};

const prevSlide = () => {
  setActiveIndex((prev) =>
    Math.max(prev - 1, 0)
  );
};
  

  return (
    <section
      id="training-videos"
      className="bg-slate-50 px-5 py-20 sm:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-12 flex flex-col justify-between gap-7 sm:flex-row sm:items-end">

          <div className="max-w-2xl">
            <span className="text-xs font-bold tracking-[0.2em] text-orange-600">
              EXPLORE OUR COURSES
            </span>

            <h2 className="mt-4 text-3xl font-bold text-[#101F35] sm:text-4xl">
              Discover Our Training Programs
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Explore industry-focused training programs designed
              to develop practical skills, enhance knowledge and
              prepare learners for professional opportunities.
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex shrink-0 gap-3">

            <button
              onClick={prevSlide}
              aria-label="Previous courses"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-300 bg-white text-[#101F35] shadow-sm transition hover:border-orange-500 hover:bg-orange-500 hover:text-white"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={nextSlide}
              aria-label="Next courses"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 text-white shadow-sm transition hover:bg-orange-600"
            >
              <ChevronRight size={24} />
            </button>

          </div>
        </div>

        {/* Sliding Course Carousel */}
        <div className="overflow-hidden">
          <div
            className="flex -mx-3 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${
                activeIndex * (100 / 3)
              }%)`,
            }}
          >
            {courses.map((course) => (
              <div
                key={course.id}
                className="w-full shrink-0 px-3 sm:w-1/2 lg:w-1/3"
              >
                <article
                  className="group h-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                >

                  {/* Course Thumbnail */}
                  <div className="relative aspect-video overflow-hidden bg-slate-200">

                    <img
                      src={course.thumbnail}
                      alt={course.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />

                    {/* Category */}
                    <span className="absolute left-4 top-4 rounded-md bg-orange-500 px-3 py-1.5 text-[10px] font-bold tracking-wider text-white">
                      {course.category}
                    </span>

                  </div>

                  {/* Course Details */}
                  <div className="flex h-full flex-col p-6">

                    {/* Rating */}
                    <div className="flex items-center justify-between gap-2">

                      <div className="flex items-center gap-1.5">
                        <Star
                          size={16}
                          fill="#F59E0B"
                          className="text-amber-500"
                        />

                        <span className="text-sm font-bold text-[#101F35]">
                          {course.rating}
                        </span>

                        <span className="text-xs text-slate-500">
                          ({course.reviews} Reviews)
                        </span>
                      </div>

                      <span className="flex items-center gap-1 text-xs font-semibold text-orange-600">
                        <BookOpen size={14} />
                        Course
                      </span>

                    </div>

                    {/* Title */}
                    <h3 className="mt-4 text-xl font-bold leading-snug text-[#101F35] transition group-hover:text-orange-600">
                      {course.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-3 min-h-[84px] text-sm leading-7 text-slate-600">
                      {course.description}
                    </p>

                    {/* Course Information */}
                    <div className="mt-5 flex items-center gap-5 border-y border-slate-100 py-4">

                      <div className="flex items-center gap-2 text-xs font-medium text-slate-600">
                        <Clock size={16} className="text-orange-500" />
                        {course.duration}
                      </div>

                      <div className="flex items-center gap-2 text-xs font-medium text-slate-600">
                        <BookOpen size={16} className="text-orange-500" />
                        {course.lessons}
                      </div>

                    </div>

                    {/* LMS Button */}
                    <a
                      href={course.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-[#101F35] px-5 py-3.5 text-sm font-bold text-white transition duration-300 hover:bg-orange-500"
                    >
                      View Course
                      <ExternalLink size={16} />
                    </a>

                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="mt-10 flex justify-center gap-2">
          {courses.map((course, index) => (
            <button
              key={course.id}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to course ${index + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? "w-9 bg-orange-500"
                  : "w-2 bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default TrainingVideos;
