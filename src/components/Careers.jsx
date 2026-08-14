import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Careers.css";
import Navbar from "./NavbarCSS";
import Footer from "./Footer";
import { div } from "framer-motion/client";

const jobs = [
  {
    img: "/career/lro.jpeg",
    title: "LRO",
    icon: "👷",
    description:
      "Support labour resource operations, workforce coordination and project-based manpower requirements.",
    tags: ["Full Time", "Operations", "Entry Level"],
    femaleOnly: true,
    maleOnly: false,
  },
  {
    img: "/career/foreman.jpeg",
    title: "Site Supervisor",
    icon: "🏗️",
    description:
      "Coordinate site activities, supervise workforce and help ensure smooth execution of construction projects.",
    tags: ["Full Time", "Construction", "Site Based"],
    femaleOnly: false,
    maleOnly: true,
  },
  {
    img: "/career/digital_marketing.jpeg",
    title: "Social Media Marketing",
    icon: "📱",
    description:
      "Create engaging content, manage social media platforms and support digital marketing campaigns.",
    tags: ["Full Time", "Marketing", "Digital"],
    femaleOnly: true,
    maleOnly: false,
  },
  {
    img: "/career/asst_manager.jpeg",
    title: "Asst. Manager Human Resources",
    icon: "👥",
    description:
      "Support recruitment, employee coordination, workforce management and HR operations while helping build an efficient and engaged team.",
    tags: ["Full Time", "Human Resources", "Management"],
    femaleOnly: true,
    maleOnly: false,
  },
];

function Careers() {
  const formRef = useRef();

  const EMAILJS_SERVICE_ID = "service_x7ge54i";
  const EMAILJS_TEMPLATE_ID = "template_7tyilla";
  const EMAILJS_PUBLIC_KEY = "uhLegOYq-vixRgpgj";

  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState("");
  const [file, setFile] = useState(null);
  const [dragging, setDragging] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    position: "",
    experience: "",
    message: "",
  });

  useEffect(() => {
    document.body.style.overflow = modalOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [modalOpen]);

  const openApplication = (position = "") => {
    setSelectedPosition(position);

    setFormData((prev) => ({
      ...prev,
      position,
    }));

    setSubmitted(false);
    setModalOpen(true);
  };

  const closeApplication = () => {
    setModalOpen(false);
    setFile(null);
    setSubmitted(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // const validateFile = (selectedFile) => {
  //   if (!selectedFile) return false;

  //   const allowedExtensions = ["pdf", "doc", "docx"];

  //   const extension = selectedFile.name
  //     .split(".")
  //     .pop()
  //     .toLowerCase();

  //   if (!allowedExtensions.includes(extension)) {
  //     alert("Please upload a PDF, DOC or DOCX file.");
  //     return false;
  //   }

  //   if (selectedFile.size > 5 * 1024 * 1024) {
  //     alert("CV must be smaller than 5 MB.");
  //     return false;
  //   }

  //   return true;
  // };

  // const handleFile = (selectedFile) => {
  //   if (validateFile(selectedFile)) {
  //     setFile(selectedFile);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // if (!file) {
    //   alert("Please upload your CV.");
    //   return;
    // }

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        {
          publicKey: EMAILJS_PUBLIC_KEY,
        },
      );

      setSubmitted(true);
    } catch (error) {
      console.error("EmailJS Error:", error);

      alert("Unable to submit your application. Please try again.");
    }
  };

  return (
    <div className="careers-page">
      {/* ================= NAVBAR ================= */}

      <Navbar />

      {/* ================= HERO ================= */}

      <section className="careers-hero">
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <div className="hero-tag">
            <span></span>
            WE ARE HIRING
          </div>

          <h1>
            Build Your <strong>Career</strong>
            <br />
            With Us.
          </h1>

          <p>
            Join Labour Bridges India and become part of a growing team
            connecting skilled professionals with opportunities across
            industries.
          </p>

          <div className="hero-buttons">
            <a href="#openings" className="career-btn primary">
              Explore Openings
              <span>→</span>
            </a>

            <button
              className="career-btn outline"
              onClick={() => openApplication()}>
              Submit Your Application
            </button>
            <button
              className="career-btn outline"
              onClick={() => {
                window.open(
                  "https://mail.google.com/mail/?view=cm&fs=1&to=hrd@labourbridges.com&su=Job%20Application",
                  "_blank",
                );
              }}>
              Send Your CV
            </button>
          </div>
        </div>
      </section>

      {/* ================= JOB OPENINGS ================= */}

      <section className="jobs-section" id="openings">
        <div className="career-container">
          <div className="section-heading">
            <span>CURRENT OPPORTUNITIES</span>

            <h2>Find Your Next Opportunity</h2>

            <p>
              Explore our current openings and take the next step towards
              building your career with us.
            </p>
          </div>

          <div className="jobs-grid">
            {jobs.map((job) => (
              <article className="job-card" key={job.title}>
                {job.img && (
                  <div className="mb-3">
                    <img
                      src={job.img}
                      alt={job.title}
                      className="img-fluid rounded-2xl  w-100"
                    />
                  </div>
                )}

                {job.femaleOnly && (
                  <div className="female-only-badge">♀ Female Only</div>
                )}
                {job.maleOnly && (
                  <div className="male-only-badge">♂ Male Only</div>
                )}

                <div className="job-icon">{job.icon}</div>

                <h3>{job.title}</h3>

                <p className="job-description">{job.description}</p>

                <div className="job-tags">
                  {job.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <button
                  className="job-apply"
                  onClick={() => openApplication(job.title)}>
                  Apply Now
                  <span>→</span>
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY JOIN ================= */}

      <section className="why-section" id="why-us">
        <div className="career-container why-grid">
          <div className="why-image">
            <div className="why-image-overlay">
              <span>LABOUR BRIDGES INDIA</span>
              <strong>People. Opportunity. Growth.</strong>
            </div>
          </div>

          <div className="why-content">
            <span className="section-label">WHY LABOUR BRIDGES INDIA</span>

            <h2>Grow With A Team That Values People</h2>

            <p className="why-intro">
              We believe that people are at the heart of every successful
              project. Join a team where your skills, ideas and contribution
              matter.
            </p>

            <div className="benefits">
              <div className="benefit">
                <div className="benefit-icon">✓</div>

                <div>
                  <h4>Career Growth</h4>
                  <p>
                    Opportunities to learn, improve and grow professionally.
                  </p>
                </div>
              </div>

              <div className="benefit">
                <div className="benefit-icon">✓</div>

                <div>
                  <h4>Real Project Experience</h4>
                  <p>Work on practical projects and real-world requirements.</p>
                </div>
              </div>

              <div className="benefit">
                <div className="benefit-icon">✓</div>

                <div>
                  <h4>Professional Environment</h4>
                  <p>
                    A collaborative environment focused on teamwork and
                    performance.
                  </p>
                </div>
              </div>

              <div className="benefit">
                <div className="benefit-icon">✓</div>

                <div>
                  <h4>Make An Impact</h4>
                  <p>
                    Be part of work that connects people with meaningful
                    opportunities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}

      <section className="career-cta">
        <div>
          <span>LOOKING FOR MORE?</span>

          <h2>Don't See Your Perfect Role?</h2>

          <p>
            Send us your CV and we'll consider you for future opportunities.
          </p>
        </div>

        <button
          className="career-btn primary"
          onClick={() => openApplication("General Application")}>
          Submit Your Application
          <span>→</span>
        </button>
      </section>

      {/* ================= FOOTER ================= */}

      <Footer />

      {/* ================= APPLICATION MODAL ================= */}

      {modalOpen && (
        <div
          className="modal-overlay"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) {
              closeApplication();
            }
          }}>
          <div className="application-modal">
            <button className="modal-close" onClick={closeApplication}>
              ×
            </button>

            {!submitted ? (
              <>
                <div className="modal-heading">
                  <span>CAREER APPLICATION</span>

                  <h2>Apply For A Position</h2>

                  <p>Complete the form below and upload your latest CV.</p>
                </div>

                <form ref={formRef} onSubmit={handleSubmit}>
                  <div className="form-grid">
                    <div className="form-field">
                      <label>
                        Full Name <i>*</i>
                      </label>

                      <input
                        type="text"
                        name="name"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-field">
                      <label>
                        Email Address <i>*</i>
                      </label>

                      <input
                        type="email"
                        name="email"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-field">
                      <label>
                        Phone Number <i>*</i>
                      </label>

                      <input
                        type="tel"
                        name="phone"
                        placeholder="+91 XXXXX XXXXX"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-field">
                      <label>Location</label>

                      <input
                        type="text"
                        name="location"
                        placeholder="Your current location"
                        value={formData.location}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-field full">
                      <label>
                        Position Applying For <i>*</i>
                      </label>

                      <select
                        name="position"
                        value={selectedPosition || formData.position}
                        onChange={(e) => {
                          setSelectedPosition(e.target.value);

                          handleChange(e);
                        }}
                        required>
                        <option value="">Select a position</option>

                        <option value="LRO">LRO</option>

                        <option value="Site Supervisor">Site Supervisor</option>

                        <option value="Social Media Marketing">
                          Social Media Marketing
                        </option>

                        <option value="General Application">
                          General Application
                        </option>
                      </select>
                    </div>

                    <div className="form-field full">
                      <label>Experience</label>

                      <select
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}>
                        <option value="">Select experience</option>

                        <option value="Fresher">Fresher</option>

                        <option value="Less than 1 year">
                          Less than 1 year
                        </option>

                        <option value="1-2 years">1–2 years</option>

                        <option value="2-5 years">2–5 years</option>

                        <option value="5+ years">5+ years</option>
                      </select>
                    </div>

                    <div className="form-field full">
                      <label>Short Message</label>

                      <textarea
                        name="message"
                        placeholder="Tell us briefly about yourself..."
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>

                    {/* CV UPLOAD */}

                    {/* <div className="form-field full">

                      <label>
                        Upload CV <i>*</i>
                      </label>

                      <label
                        className={`cv-upload ${
                          dragging ? "dragging" : ""
                        }`}
                        onDragOver={(e) => {
                          e.preventDefault();
                          setDragging(true);
                        }}
                        onDragLeave={() =>
                          setDragging(false)
                        }
                        onDrop={(e) => {
                          e.preventDefault();
                          setDragging(false);

                          const droppedFile =
                            e.dataTransfer.files[0];

                          handleFile(droppedFile);
                        }}
                      >

                        <input
  type="file"
  name="cv"
  accept=".pdf,.doc,.docx"
  onChange={(e) =>
    handleFile(e.target.files[0])
  }
/>

                        <div className="upload-icon">
                          📄
                        </div>

                        {file ? (

                          <>
                            <strong>
                              {file.name}
                            </strong>

                            <small>
                              CV selected successfully
                            </small>
                          </>

                        ) : (

                          <>
                            <strong>
                              Click to upload or drag & drop
                            </strong>

                            <small>
                              PDF, DOC or DOCX · Maximum 5 MB
                            </small>
                          </>

                        )}

                      </label>

                    </div> */}
                  </div>

                  <button type="submit" className="submit-application">
                    Submit Application
                    <span>→</span>
                  </button>
                </form>
              </>
            ) : (
              <div className="success-state">
                <div className="success-icon">✓</div>

                <span>APPLICATION RECEIVED</span>

                <h2>Thank You!</h2>

                <p>
                  Your application has been submitted successfully. Our
                  recruitment team will review your profile and contact you if
                  you are shortlisted.
                </p>

                <button
                  className="career-btn primary"
                  onClick={closeApplication}>
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Careers;
