import React, { useRef, useEffect } from "react";
import { useDarkMode } from "../context/DarkModeContext";
// Utility to sync left image height with right content
function useSyncHeight(leftRef, rightRef) {
  useEffect(() => {
    function sync() {
      if (leftRef.current && rightRef.current) {
        leftRef.current.style.height = rightRef.current.offsetHeight + "px";
      }
    }
    sync();
    window.addEventListener("resize", sync);
    return () => window.removeEventListener("resize", sync);
  }, [leftRef, rightRef]);
}
import { useNavigate } from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import aboutUsHero from "../assets/aboutUsHero.mp4";
import missionVision from "../assets/missionVision.jpg"; // suitable about/mission static image


const AboutUs = ({ user, onLogout }) => {
  const { darkMode, setDarkMode } = useDarkMode();
  // Strict color palette
  const COLOR_1 = "#002346"; // deep blue
  const COLOR_2 = "#F8F4E3"; // off-white
  const COLOR_3 = "#333333"; // dark gray
  const navigate = useNavigate();
  const handleBookConsultation = () => {
    navigate("/contact");
  };
  return (
    <div
      className={`min-h-screen w-full transition-colors duration-300`}
      style={{
        overflowX: "hidden",
        background: darkMode ? COLOR_1 : COLOR_2,
        color: darkMode ? COLOR_2 : COLOR_3,
      }}
    >
      <div className="sticky top-0 z-50">
        <div
          className="fixed top-0 left-0 w-full z-[100]"
          style={{
            background: darkMode ? COLOR_3 : COLOR_2,
            boxShadow: "0 2px 8px 0 rgba(51,51,51,0.08)",
          }}
        >
          <Header
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            user={user}
            onLogout={onLogout}
          />
        </div>
      </div>

      {/* 1. Hero / Introduction */}
      <section
        className="w-full relative min-h-screen flex items-center justify-center text-center overflow-hidden"
        style={{ background: COLOR_1 }}
      >
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src={aboutUsHero}
          autoPlay
          loop
          loading="lazy"
          muted
          playsInline
        />
        <div
          className="relative z-10 w-full min-h-screen flex flex-col items-center justify-center"
          style={{ background: "rgba(51, 51, 51, 0.7)" }}
        >
          <h1
            className="text-5xl font-extrabold mb-6"
            style={{ color: COLOR_2 }}
          >
            About Vision Builders
          </h1>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: COLOR_2 }}>
            Shaping skylines and building communities with passion, innovation,
            and trust since our foundation.
          </p>
        </div>
      </section>

      {/* 2. Our Mission & Vision Section */}
      <section className="w-full py-16 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-stretch gap-0">
        {(() => {
          const leftRef = useRef(null);
          const rightRef = useRef(null);
          useSyncHeight(leftRef, rightRef);
          return (
            <>
              {/* Left: Image */}
              <div
                ref={leftRef}
                className="md:w-1/2 w-full flex items-center justify-center mb-6 md:mb-0"
                style={{
                  minHeight: 280,
                  transition: "height 0.3s",
                }}
              >
                <img
                  src={missionVision}
                  alt="Vision Builders Mission"
                  className="rounded-xl shadow-lg object-cover border-4"
                  style={{
                    width: "96%",
                    maxWidth: "480px",
                    borderColor: "#002346",
                    borderStyle: "solid",
                    background: "#F8F4E3",
                    height: "100%",
                    minHeight: 220,
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>
              {/* Right: Content */}
              <div
                ref={rightRef}
                className="md:w-1/2 w-full flex flex-col justify-center px-0 md:px-7 py-8 md:py-0"
                style={{ background: "transparent" }}
              >
                <h2
                  className="text-3xl font-bold mb-3"
                  style={{ color: darkMode ? "#F8F4E3" : "#002346" }}
                >
                  Our Mission & Vision
                </h2>
                <p
                  className="mb-6 text-base md:text-lg"
                  style={{ color: darkMode ? "#F8F4E3" : "#333333" }}
                >
                  We are committed to designing and constructing spaces that
                  inspire, endure, and improve lives. Every project reflects our
                  focus on innovation, sustainability, and excellence in
                  architecture and construction.
                </p>
                {/* Mission card */}
                <div
                  className="rounded-lg p-5 mb-4 shadow-md"
                  style={{
                    background: "#F8F4E3",
                    borderLeft: "6px solid #002346",
                  }}
                >
                  <h3
                    className="font-bold text-lg mb-2"
                    style={{ color: "#333333" }}
                  >
                    Our Mission
                  </h3>
                  <p style={{ color: "#333333" }}>
                    To build sustainable, functional, and beautiful spaces that
                    bring visions to life and positively impact communities.
                  </p>
                </div>
                {/* Vision card */}
                <div
                  className="rounded-lg p-5 shadow-md"
                  style={{
                    background: "#F8F4E3",
                    borderLeft: "6px solid #333333",
                  }}
                >
                  <h3
                    className="font-bold text-lg mb-2"
                    style={{ color: "#002346" }}
                  >
                    Our Vision
                  </h3>
                  <p style={{ color: "#333333" }}>
                    To be a global leader in innovative and sustainable
                    architecture—transforming skylines and redefining modern
                    living and workspaces.
                  </p>
                </div>
              </div>
            </>
          );
        })()}
      </section>

      {/* 3. Our Values */}
      <section className="w-full py-16 px-6" style={{ background: COLOR_1 }}>
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-3xl font-bold mb-10 text-center"
            style={{ color: COLOR_2 }}
          >
            Our Core Values
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-8 font-medium text-lg">
            {[
              "Integrity",
              "Excellence",
              "Client Focus",
              "Sustainability",
              "Innovation",
              "Community",
            ].map((value, idx) => (
              <li
                key={value}
                className="rounded-lg p-6 shadow-md"
                style={{
                  background: idx % 2 === 0 ? COLOR_2 : COLOR_3,
                  color: idx % 2 === 0 ? COLOR_3 : COLOR_2,
                  border: `2px solid ${COLOR_1}`,
                }}
              >
                <h3 className="font-semibold mb-2">{value}</h3>
                <p>
                  {value === "Integrity"
                    ? "We uphold honesty and transparency in every project, from planning to delivery."
                    : value === "Excellence"
                    ? "Delivering world-class design and construction quality through expertise and precision."
                    : value === "Client Focus"
                    ? "Your vision is central to our process—we collaborate closely to exceed expectations."
                    : value === "Sustainability"
                    ? "Prioritizing eco-friendly practices, green materials, and energy-efficient solutions."
                    : value === "Innovation"
                    ? "Embracing modern technologies and forward-thinking designs to shape the future."
                    : "Dedicated to building not just structures, but lasting positive impacts for people and society."}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4. Our Journey / Growth Timeline */}
      <section className="w-full py-16 px-6 max-w-5xl mx-auto">
        <h2
          className="text-3xl font-bold mb-12 text-center"
          style={{ color: darkMode ? "#F8F4E3" : "#002346" }}
        >
          Our Growth Through Years
        </h2>
        <p
          className="text-center mb-14 text-lg font-medium"
          style={{ color: darkMode ? "#F8F4E3" : "#333333" }}
        >
          A journey of creativity, technology, and dedication—transforming
          blueprints into reality since day one.
        </p>
        <div className="relative flex flex-col gap-16">
          {/* Timeline Card: Foundation */}
          <div className="flex items-center gap-8">
            <div
              className="flex-1 rounded-xl shadow-lg p-8"
              style={{ backgroundColor: darkMode ? "#F8F4E3" : "#002346" }}
            >
              <h3
                className="text-xl font-bold mb-2"
                style={{ color: darkMode ? "#002346" : "white" }}
              >
                Foundation
              </h3>
              <p style={{ color: darkMode ? "#002346" : "white" }}>
                Founded Vision Builders with the goal of redefining modern
                architecture—first office established in 2016, delivering
                pioneering residential projects.
              </p>
            </div>
            <div
              className="flex-shrink-0 z-10 w-16 h-16 flex items-center justify-center rounded-full shadow-lg"
              style={{ background: "#333333", color: "#F8F4E3" }}
            >
              <span className="font-semibold text-lg">2016</span>
            </div>
          </div>

          {/* Timeline Card: Expansion */}
          <div className="flex items-center gap-8 flex-row-reverse">
            <div
              className="flex-1 rounded-xl shadow-lg p-8"
              style={{
                background: "#F8F4E3",
                color: "#333333",
                border: "2px solid #002346",
              }}
            >
              <h3 className="text-xl font-bold mb-2">Expansion</h3>
              <p>
                Expanded into commercial and industrial projects. Opened second
                design studio, grew to 20+ architects and engineers, 2019.
              </p>
            </div>
            <div
              className="flex-shrink-0 z-10 w-16 h-16 flex items-center justify-center rounded-full shadow-lg"
              style={{
                background: darkMode ? "#333333" : "#002346",
                color: "#F8F4E3",
              }}
            >
              <span className="font-semibold text-lg">2019</span>
            </div>
          </div>

          {/* Timeline Card: National Recognition */}
          <div className="flex items-center gap-8">
            <div
              className="flex-1 rounded-xl shadow-lg p-8"
              style={{ backgroundColor: darkMode ? "#F8F4E3" : "#002346" }}
            >
              <h3
                className="text-xl font-bold mb-2"
                style={{ color: darkMode ? "#002346" : "white" }}
              >
                National Recognition
              </h3>
              <p style={{ color: darkMode ? "#002346" : "white" }}>
                Earned national recognition for eco-friendly architecture and
                innovative structural designs. Awarded Best Design Firm, 2022.
              </p>
            </div>
            <div
              className="flex-shrink-0 z-10 w-16 h-16 flex items-center justify-center rounded-full shadow-lg"
              style={{ background: "#333333", color: "#F8F4E3" }}
            >
              <span className="font-semibold text-lg">2022</span>
            </div>
          </div>

          {/* Timeline Card: Technology & Innovation */}
          <div className="flex items-center gap-8 flex-row-reverse">
            <div
              className="flex-1 rounded-xl shadow-lg p-8"
              style={{
                background: "#F8F4E3",
                color: "#333333",
                border: "2px solid #002346",
              }}
            >
              <h3 className="text-xl font-bold mb-2">
                Technology & Innovation
              </h3>
              <p>
                Integrated BIM systems, smart building technologies, and remote
                project collaboration for efficiency and connectivity, 2024.
              </p>
            </div>
            <div
              className="flex-shrink-0 z-10 w-16 h-16 flex items-center justify-center rounded-full shadow-lg"
              style={{
                background: darkMode ? "#333333" : "#002346",
                color: "#F8F4E3",
              }}
            >
              <span className="font-semibold text-lg">2024</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Our Commitment Section */}
      <section className="w-full py-16 px-6" style={{ background: COLOR_1 }}>
        <div
          className="max-w-4xl mx-auto text-center"
          style={{ color: COLOR_2 }}
        >
          <h2 className="text-3xl font-bold mb-6">Our Commitment to You</h2>
          <p className="text-lg leading-relaxed mb-6">
            We commit to delivering reliable, innovative, and sustainable
            building solutions. From blueprint to handover, your vision is at
            the heart of everything we do.
          </p>
          <p className="italic text-base max-w-2xl mx-auto">
            “Vision Builders transformed our dream into reality with unmatched
            professionalism and creativity. A true partner in every step.” —
            Client Testimonial
          </p>
        </div>
      </section>

      {/* 6. Call-to-Action */}
      <section
        className="w-full py-20 text-center"
        style={{ backgroundColor: darkMode ? COLOR_1 : "#F8F4E3" }}
      >
        <h2
          className="text-4xl font-bold mb-6"
          style={{ color: darkMode ? "#fff" : COLOR_1 }}
        >
          Ready to Build with Us?
        </h2>
        <p
          className="mb-8 text-lg max-w-xl mx-auto"
          style={{ color: darkMode ? "#fff" : COLOR_3 }}
        >
          Contact Vision Builders today to schedule your consultation and
          discover how we can bring your project to life.
        </p>
        <button
          className="font-bold px-8 py-4 rounded-full transition"
          style={{
            background: darkMode ? "#F8F4E3" : COLOR_1,
            color: darkMode ? "#333333" : COLOR_2,
          }}
          onClick={handleBookConsultation}
        >
          Connect with us
        </button>
      </section>

      <Footer darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
};

export default AboutUs;
