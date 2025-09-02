/* eslint-disable no-unused-vars */

import React, { useRef, useEffect } from "react";
import {
  FaBullseye,
  FaRocket,
  FaGlobe,
  FaCompass,
  FaTrophy,
  FaHandshake,
  FaLeaf,
  FaLightbulb,
  FaUsers,
} from "react-icons/fa";
import { useDarkMode } from "../context/DarkModeContext";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();
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
            {t("About Vision Builders")}
          </h1>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: COLOR_2 }}>
            {t(
              "Shaping skylines and building communities with passion, innovation, and trust since our foundation.",
            )}
          </p>
        </div>
      </section>

      {/* 2. Our Mission & Vision Section */}
      <section
        className="w-full py-20 px-4 md:px-8 max-w-7xl mx-auto flex flex-col md:flex-row items-stretch gap-0"
        style={{ position: "relative", zIndex: 1 }}
      >
        {/* Left: Image with gradient border */}
        <div
          className="md:w-1/2 w-full flex items-center justify-center mb-10 md:mb-0"
          style={{ minHeight: 320 }}
        >
          <div
            className="rounded-2xl shadow-2xl p-1"
            style={{
              background: darkMode
                ? "linear-gradient(135deg, #eebbc3 0%, #232946 100%)"
                : "linear-gradient(135deg, #232946 0%, #eebbc3 100%)",
              display: "inline-block",
            }}
          >
            <img
              src={missionVision}
              alt="Vision Builders Mission"
              className="rounded-xl object-cover border-4"
              style={{
                width: "96%",
                maxWidth: 440,
                minHeight: 240,
                height: 320,
                borderColor: darkMode ? "#eebbc3" : "#232946",
                background: darkMode ? "#232946" : "#F8F4E3",
                objectFit: "cover",
                display: "block",
                boxShadow: darkMode
                  ? "0 8px 32px 0 #eebbc355"
                  : "0 8px 32px 0 #23294633",
              }}
            />
          </div>
        </div>
        {/* Right: Content with cards */}
        <div className="md:w-1/2 w-full flex flex-col justify-center px-0 md:px-10 py-8 md:py-0">
          <h2
            className="text-4xl font-extrabold mb-5 flex items-center gap-3"
            style={{
              color: darkMode ? "#eebbc3" : "#232946",
              letterSpacing: "-1px",
            }}
          >
            <FaBullseye className="inline-block text-3xl" />
            {t("Our Mission & Vision")}
          </h2>
          <p
            className="mb-8 text-lg md:text-xl font-medium"
            style={{ color: darkMode ? "#F8F4E3" : "#333333" }}
          >
            {t(
              "We are committed to designing and constructing spaces that inspire, endure, and improve lives. Every project reflects our focus on innovation, sustainability, and excellence in architecture and construction.",
            )}
          </p>
          <div className="flex flex-col md:flex-row gap-6">
            {/* Mission card */}
            <div
              className="flex-1 rounded-2xl p-6 shadow-lg border-2"
              style={{
                background: darkMode
                  ? "linear-gradient(120deg, #232946 60%, #eebbc3 100%)"
                  : "linear-gradient(120deg, #F8F4E3 60%, #eebbc3 100%)",
                borderColor: darkMode ? "#eebbc3" : "#232946",
                minWidth: 0,
              }}
            >
              <div className="flex items-center gap-2 mb-2">
                <FaRocket className="text-2xl" />
                <h3
                  className="font-bold text-xl"
                  style={{ color: darkMode ? "#eebbc3" : "#232946" }}
                >
                  {t("Our Mission")}
                </h3>
              </div>
              <p style={{ color: darkMode ? "#F8F4E3" : "#333333" }}>
                {t(
                  "To build sustainable, functional, and beautiful spaces that bring visions to life and positively impact communities.",
                )}
              </p>
            </div>
            {/* Vision card */}
            <div
              className="flex-1 rounded-2xl p-6 shadow-lg border-2"
              style={{
                background: darkMode
                  ? "linear-gradient(120deg, #232946 60%, #eebbc3 100%)"
                  : "linear-gradient(120deg, #F8F4E3 60%, #eebbc3 100%)",
                borderColor: darkMode ? "#eebbc3" : "#232946",
                minWidth: 0,
              }}
            >
              <div className="flex items-center gap-2 mb-2">
                <FaGlobe className="text-2xl" />
                <h3
                  className="font-bold text-xl"
                  style={{ color: darkMode ? "#eebbc3" : "#232946" }}
                >
                  {t("Our Vision")}
                </h3>
              </div>
              <p style={{ color: darkMode ? "#F8F4E3" : "#333333" }}>
                {t(
                  "To be a global leader in innovative and sustainable architecture—transforming skylines and redefining modern living and workspaces.",
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Our Values */}
      <section className="w-full py-20 px-4" style={{ background: COLOR_1 }}>
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-4xl font-extrabold mb-14 text-center flex items-center justify-center gap-3"
            style={{ color: "#eebbc3", letterSpacing: "-1px" }}
          >
            <FaUsers className="inline-block text-3xl" />
            {t("Our Core Values")}
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 font-medium text-lg">
            {[
              { key: "Integrity", icon: FaCompass },
              { key: "Excellence", icon: FaTrophy },
              { key: "Client Focus", icon: FaHandshake },
              { key: "Sustainability", icon: FaLeaf },
              { key: "Innovation", icon: FaLightbulb },
              { key: "Community", icon: FaGlobe },
            ].map((item, idx) => (
              <li
                key={item.key}
                className="rounded-2xl p-8 shadow-xl border-2 flex flex-col items-center text-center transition-transform hover:-translate-y-2"
                style={{
                  background: darkMode
                    ? "linear-gradient(135deg, #232946 60%, #eebbc3 100%)"
                    : "linear-gradient(135deg, #F8F4E3 60%, #eebbc3 100%)",
                  borderColor: darkMode ? "#eebbc3" : "#232946",
                  color: darkMode ? "#eebbc3" : "#232946",
                  minHeight: 220,
                }}
              >
                <span className="mb-4">
                  {React.createElement(item.icon, { className: "text-3xl" })}
                </span>
                <h3
                  className="font-bold text-2xl mb-2"
                  style={{ color: darkMode ? "#eebbc3" : "#232946" }}
                >
                  {t(item.key)}
                </h3>
                <p
                  className="text-base"
                  style={{ color: darkMode ? "#F8F4E3" : "#333333" }}
                >
                  {t(item.key + "_desc")}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4. Our Journey / Growth Timeline */}
      <section className="w-full py-20 px-2 sm:px-4  mx-auto">
        <h2
          className="text-4xl font-extrabold mb-10 text-center flex items-center justify-center gap-3"
          style={{
            color: darkMode ? "#eebbc3" : "#232946",
            letterSpacing: "-1px",
          }}
        >
          <FaBullseye className="inline-block text-3xl" />
          {t("Our Growth Through Years")}
        </h2>
        <p
          className="text-center mb-16 text-lg font-medium"
          style={{ color: darkMode ? "#F8F4E3" : "#333333" }}
        >
          {t(
            "A journey of creativity, technology, and dedication—transforming blueprints into reality since day one.",
          )}
        </p>
        <div className="relative flex flex-col items-center">
          {/* Vertical timeline line */}
          <div
            className="hidden sm:block absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-[#eebbc3] to-[#232946] opacity-40"
            style={{ transform: "translateX(-50%)", zIndex: 0 }}
          />
          {/* Timeline events */}
          {[
            {
              year: "2016",
              title: t("Foundation"),
              desc: t(
                "Founded Vision Builders with the goal of redefining modern architecture—first office established in 2016, delivering pioneering residential projects.",
              ),
              icon: <FaCompass className="text-2xl" />,
              color: darkMode ? "#232946" : "#eebbc3",
              cardBg: darkMode ? "#F8F4E3" : "#232946",
              cardText: darkMode ? "#232946" : "#fff",
            },
            {
              year: "2019",
              title: t("Expansion"),
              desc: t(
                "Expanded into commercial and industrial projects. Opened second design studio, grew to 20+ architects and engineers, 2019.",
              ),
              icon: <FaUsers className="text-2xl" />,
              color: darkMode ? "#eebbc3" : "#232946",
              cardBg: darkMode ? "#232946" : "#F8F4E3",
              cardText: darkMode ? "#eebbc3" : "#232946",
            },
            {
              year: "2022",
              title: t("National Recognition"),
              desc: t(
                "Earned national recognition for eco-friendly architecture and innovative structural designs. Awarded Best Design Firm, 2022.",
              ),
              icon: <FaTrophy className="text-2xl" />,
              color: darkMode ? "#232946" : "#eebbc3",
              cardBg: darkMode ? "#F8F4E3" : "#232946",
              cardText: darkMode ? "#232946" : "#fff",
            },
            {
              year: "2024",
              title: t("Technology & Innovation"),
              desc: t(
                "Integrated BIM systems, smart building technologies, and remote project collaboration for efficiency and connectivity, 2024.",
              ),
              icon: <FaLightbulb className="text-2xl" />,
              color: darkMode ? "#eebbc3" : "#232946",
              cardBg: darkMode ? "#232946" : "#F8F4E3",
              cardText: darkMode ? "#eebbc3" : "#232946",
            },
          ].map((event, idx) => (
            <div
              key={event.year}
              className={`relative w-full flex flex-col sm:flex-row items-center mb-16 last:mb-0`}
              style={{ zIndex: 1 }}
            >
              {/* Timeline dot */}
              <div className="sm:absolute sm:left-1/2 sm:-translate-x-1/2 z-10 w-12 h-12 flex items-center justify-center rounded-full shadow-lg border-4 border-[#eebbc3] bg-white dark:bg-[#232946] mb-4 sm:mb-0">
                <span style={{ color: event.color }}>{event.icon}</span>
              </div>
              {/* Card */}
              <div
                className={`flex-1 rounded-2xl shadow-xl p-6 sm:p-8 mx-0 sm:mx-8 ${
                  idx % 2 === 0
                    ? "text-left sm:mr-auto"
                    : "text-left sm:ml-auto"
                }`}
                style={{
                  background: event.cardBg,
                  color: event.cardText,
                  border: `2px solid ${event.color}`,
                  minWidth: 0,
                  maxWidth: 520,
                  width: "100%",
                }}
              >
                <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                  {event.title}
                </h3>
                <p className="mb-2 text-base font-medium">{event.desc}</p>
                <span
                  className="inline-block mt-2 px-4 py-1 rounded-full text-sm font-bold"
                  style={{ background: event.color, color: event.cardBg }}
                >
                  {event.year}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Our Commitment Section */}
      <section
        className="w-full py-16 px-2 sm:px-6 flex justify-center items-center"
        style={{ background: COLOR_1 }}
      >
        <div
          className="w-full max-w-2xl mx-auto bg-white dark:bg-[#232946] rounded-2xl shadow-2xl border-l-8 border-[#eebbc3] flex flex-col items-center text-center p-6 sm:p-10"
          style={{
            color: darkMode ? COLOR_2 : COLOR_3,
            borderColor: "#eebbc3",
            boxShadow: darkMode
              ? "0 8px 32px 0 #eebbc355"
              : "0 8px 32px 0 #23294633",
          }}
        >
          <div className="flex items-center justify-center mb-4">
            <FaHandshake className="text-4xl" style={{ color: "#eebbc3" }} />
          </div>
          <h2
            className="text-3xl font-extrabold mb-4"
            style={{ color: darkMode ? "#eebbc3" : COLOR_1 }}
          >
            {t("Our Commitment to You")}
          </h2>
          <p
            className="text-lg leading-relaxed mb-6"
            style={{ color: darkMode ? COLOR_2 : COLOR_3 }}
          >
            {t(
              "We commit to delivering reliable, innovative, and sustainable building solutions. From blueprint to handover, your vision is at the heart of everything we do.",
            )}
          </p>
          <p
            className="italic text-base max-w-2xl mx-auto"
            style={{ color: darkMode ? "#eebbc3" : "#eebbc3" }}
          >
            {t(
              "\u201cVision Builders transformed our dream into reality with unmatched professionalism and creativity. A true partner in every step.\u201d — Client Testimonial",
            )}
          </p>
        </div>
      </section>

      {/* 6. Call-to-Action */}
      <section
        className="w-full py-20 px-2 sm:px-6 flex justify-center items-center relative overflow-hidden"
        style={{ background: darkMode ? COLOR_1 : "#F8F4E3" }}
      >
        {/* Layered background shapes for accent */}
        <div
          className="absolute -top-16 -left-16 w-64 h-64 rounded-full opacity-30 blur-2xl z-0"
          style={{
            background: darkMode
              ? "radial-gradient(circle at 30% 30%, #eebbc3 0%, #232946 100%)"
              : "radial-gradient(circle at 30% 30%, #232946 0%, #eebbc3 100%)",
          }}
        />
        <div
          className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full opacity-20 blur-3xl z-0"
          style={{
            background: darkMode
              ? "radial-gradient(circle at 70% 70%, #eebbc3 0%, #232946 100%)"
              : "radial-gradient(circle at 70% 70%, #eebbc3 0%, #232946 100%)",
          }}
        />
        <div className="w-full max-w-2xl mx-auto relative z-10 flex flex-col items-center text-center">
          {/* Glassmorphism card */}
          <div
            className="w-full rounded-3xl shadow-2xl p-8 sm:p-12 mb-8 backdrop-blur-md border-2 border-[#eebbc3] bg-white/60 dark:bg-[#232946]/60"
            style={{
              boxShadow: darkMode
                ? "0 8px 32px 0 #eebbc355"
                : "0 8px 32px 0 #23294633",
              color: darkMode ? COLOR_2 : COLOR_3,
              borderColor: "#eebbc3",
              backdropFilter: "blur(12px)",
            }}
          >
            <div className="flex items-center justify-center mb-6">
              <FaRocket
                className="text-5xl drop-shadow-lg"
                style={{ color: "#eebbc3" }}
              />
            </div>
            <h2
              className="text-4xl font-extrabold mb-4 tracking-tight"
              style={{ color: darkMode ? "#eebbc3" : COLOR_1 }}
            >
              {t("Ready to Build with Us?")}
            </h2>
            <p
              className="text-lg sm:text-xl leading-relaxed mb-8 max-w-xl mx-auto"
              style={{ color: darkMode ? COLOR_2 : COLOR_3 }}
            >
              {t(
                "Contact Vision Builders today to schedule your consultation and discover how we can bring your project to life.",
              )}
            </p>
          </div>
          {/* Floating accent button */}
          <button
            className="font-bold px-10 py-5 rounded-full shadow-xl border-2 border-[#eebbc3] bg-[#eebbc3] text-[#232946] text-lg sm:text-xl transition hover:scale-110 hover:bg-[#232946] hover:text-[#eebbc3] focus:outline-none focus:ring-4 focus:ring-[#eebbc3] -mt-[70px] relative  "
            style={{
              boxShadow: "0 4px 24px 0 #eebbc355",
              transition: "all 0.2s",
            }}
            onClick={handleBookConsultation}
          >
            {t("Connect with us")}
          </button>
        </div>
      </section>

      <Footer darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
};

export default AboutUs;
