/* eslint-disable no-unused-vars */

import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import philosophy from "../assets/philosophy.jpg";
import Header from "../components/Header.jsx";
import { useDarkMode } from "../context/DarkModeContext";
import Footer from "../components/Footer.jsx";
import home2Hero from "../assets/home2Hero.mp4";

export default function Home2({ user, onLogout }) {
  const { darkMode, setDarkMode } = useDarkMode();
  const { t } = useTranslation();

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

  const navigate = useNavigate();

  // Strict color palette
  const COLOR_1 = "#002346"; // deep blue
  const COLOR_2 = "#F8F4E3"; // off-white
  const COLOR_3 = "#333333"; // dark gray

  // Replace "case studies" with sample architecture/construction projects
  const caseStudies = [
    {
      title: t("Sustainable Residential Complex"),
      summary: t(
        "Designed and constructed an award-winning eco-friendly residential complex with solar integration and smart water management.",
      ),
      year: 2024,
    },
    {
      title: t("Modern Corporate Headquarters"),
      summary: t(
        "Delivered a state-of-the-art commercial office building with innovative open-plan designs and LEED Platinum certification.",
      ),
      year: 2023,
    },
  ];

  const [consultSent, setConsultSent] = useState(false);

  const handleConsultSubmit = (e) => {
    e.preventDefault();
    setConsultSent(true);
    setTimeout(() => setConsultSent(false), 4000); // Hide after 4s
  };

  return (
    <div
      className={`min-h-screen flex flex-col transition-colors duration-300`}
      style={{
        overflowX: "hidden",
        background: darkMode ? COLOR_1 : COLOR_2,
        color: darkMode ? COLOR_2 : COLOR_3,
      }}
    >
      {/* Sticky Header */}
      <div
        className="fixed top-0 left-0 w-full z-[100]"
        style={{
          background: darkMode ? COLOR_3 : COLOR_2,
          boxShadow: "0 2px 8px 0 rgba(51,51,51,0.08)",
        }}
      >
        <Header user={user} onLogout={onLogout} />
      </div>

      {/* Section 1: Hero with Video */}
      <section
        className="relative w-screen h-screen flex items-center justify-center overflow-hidden m-0 p-0"
        style={{ minHeight: "100vh", maxWidth: "100vw", background: COLOR_1 }}
      >
        <video
          autoPlay
          loop
          muted
          loading="lazy"
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
          style={{ minHeight: "100vh", minWidth: "100vw", objectFit: "cover" }}
        >
          <source src={home2Hero} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center">
          <h1
            className="text-6xl md:text-7xl font-extrabold mb-6 drop-shadow-xl tracking-tight text-center"
            style={{ color: COLOR_2, letterSpacing: "-2px" }}
          >
            {t("Welcome to Vision Builders")}
          </h1>
          <p
            className="text-2xl max-w-2xl mx-auto mb-10 drop-shadow-lg text-center font-medium"
            style={{ color: COLOR_2 }}
          >
            {t(
              "Designing and building innovative spaces that inspire communities and stand the test of time.",
            )}
          </p>
        </div>
      </section>

      <main className="flex-grow max-w-7xl mx-auto px-6 py-12 space-y-24 md:space-y-32">
        {/* Section 2: Our Philosophy */}
        <section
          className={`relative   mx-auto flex flex-col md:flex-row items-stretch min-h-[420px] rounded-3xl shadow-2xl overflow-hidden ${
            darkMode
              ? "bg-gradient-to-br from-[#181c2a] to-[#232946]"
              : "bg-gradient-to-br from-[#e0e7ef] to-[#f8fafc]"
          }`}
        >
          {/* Modern Image with Overlay */}
          <div className="md:w-2/5 w-full relative flex items-stretch justify-center">
            <img
              src={philosophy}
              alt="Architectural Philosophy"
              className="rounded-3xl shadow-2xl object-cover h-full w-full md:w-[98%] max-w-[420px] min-h-[280px]"
              style={{ objectFit: "cover", display: "block" }}
            />
            <div
              className="absolute inset-0 rounded-3xl"
              style={{
                background: darkMode
                  ? "linear-gradient(135deg, rgba(0,35,70,0.7) 60%, rgba(35,41,70,0.5) 100%)"
                  : "linear-gradient(135deg, rgba(248,244,227,0.7) 60%, rgba(224,231,239,0.5) 100%)",
                zIndex: 2,
              }}
            ></div>
            <div
              className="absolute bottom-4 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full shadow-lg text-base font-semibold"
              style={{
                background: darkMode ? "#eebbc3" : "#232946",
                color: darkMode ? "#232946" : "#f8f4e3",
                zIndex: 3,
                letterSpacing: 1,
              }}
            >
              {t("Our Design Philosophy")}
            </div>
          </div>
          {/* Modern Card Content */}
          <div
            className="md:w-3/5 w-full flex flex-col justify-center px-8 py-10 relative z-10"
            style={{ background: "none" }}
          >
            <p
              className="text-lg leading-relaxed mb-8 font-medium"
              style={{ color: darkMode ? "#f8f4e3" : "#232946" }}
            >
              {t(
                "Creativity, sustainability, and precision are the cornerstones of our practice. Every project is tailored with innovation, functional design, and a strong commitment to environmental responsibility.",
              )}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div
                className={`flex flex-col items-center text-center rounded-2xl shadow-xl p-7 border-t-8 ${
                  darkMode
                    ? "bg-[#232946] text-[#f8f4e3] border-[#eebbc3]"
                    : "bg-white text-[#232946] border-[#eebbc3]"
                }`}
                style={{ minHeight: 180 }}
              >
                <div className="w-12 h-12 mb-3 flex items-center justify-center rounded-full bg-gradient-to-br from-[#eebbc3] to-[#f8f4e3] text-[#232946] text-2xl font-bold shadow-md">
                  <span>1</span>
                </div>
                <h3 className="text-xl font-bold mb-2">
                  {t("Client-Focused Design")}
                </h3>
                <p className="text-base">
                  {t(
                    "Every structure begins with your vision—crafted through collaboration and personalized planning.",
                  )}
                </p>
              </div>
              {/* Card 2 */}
              <div
                className={`flex flex-col items-center text-center rounded-2xl shadow-xl p-7 border-t-8 ${
                  darkMode
                    ? "bg-[#181c2a] text-[#eebbc3] border-[#232946]"
                    : "bg-[#f8f4e3] text-[#232946] border-[#232946]"
                }`}
                style={{ minHeight: 180 }}
              >
                <div className="w-12 h-12 mb-3 flex items-center justify-center rounded-full bg-gradient-to-br from-[#232946] to-[#eebbc3] text-[#eebbc3] text-2xl font-bold shadow-md">
                  <span>2</span>
                </div>
                <h3 className="text-xl font-bold mb-2">
                  {t("Sustainable Innovation")}
                </h3>
                <p className="text-base">
                  {t(
                    "We integrate green building practices and future-ready technologies into every design.",
                  )}
                </p>
              </div>
              {/* Card 3 */}
              <div
                className={`flex flex-col items-center text-center rounded-2xl shadow-xl p-7 border-t-8 ${
                  darkMode
                    ? "bg-[#232946] text-[#f8f4e3] border-[#eebbc3]"
                    : "bg-white text-[#232946] border-[#eebbc3]"
                }`}
                style={{ minHeight: 180 }}
              >
                <div className="w-12 h-12 mb-3 flex items-center justify-center rounded-full bg-gradient-to-br from-[#eebbc3] to-[#232946] text-[#232946] text-2xl font-bold shadow-md">
                  <span>3</span>
                </div>
                <h3 className="text-xl font-bold mb-2">
                  {t("Proven Excellence")}
                </h3>
                <p className="text-base">
                  {t(
                    "From homes to skyscrapers, our portfolio showcases projects that are both iconic and enduring.",
                  )}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Our Approach */}
        <section
          className={`relative max-w-6xl mx-auto rounded-3xl p-0 shadow-2xl border border-opacity-30 overflow-hidden ${
            darkMode
              ? "bg-gradient-to-br from-[#181c2a] to-[#232946] border-[#eebbc3]"
              : "bg-gradient-to-br from-[#232946] to-[#eebbc3] border-[#232946]"
          }`}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: darkMode
                ? "radial-gradient(circle at 80% 20%, rgba(238,187,195,0.08) 0, transparent 70%)"
                : "radial-gradient(circle at 80% 20%, rgba(35,41,70,0.08) 0, transparent 70%)",
              zIndex: 1,
            }}
          ></div>
          <div className="relative z-10 px-8 py-16 md:px-20 flex flex-col items-center">
            <h2
              className="text-4xl font-extrabold mb-12 text-center drop-shadow-xl"
              style={{ color: darkMode ? "#eebbc3" : COLOR_2 }}
            >
              {t("Our Approach")}
            </h2>
            {/* Timeline/Stepper Modern Layout */}
            <div className="w-full flex flex-col md:flex-row md:space-x-0 md:space-y-0 space-y-12 md:space-y-0 md:justify-between items-center relative">
              {/* Vertical line for mobile, horizontal for desktop */}
              <div
                className="hidden md:block absolute top-1/2 left-0 right-0 h-1"
                style={{
                  background: darkMode ? "#eebbc3" : "#232946",
                  opacity: 0.15,
                  zIndex: 0,
                }}
              ></div>
              <div
                className="block md:hidden absolute left-1/2 top-0 bottom-0 w-1"
                style={{
                  background: darkMode ? "#eebbc3" : "#232946",
                  opacity: 0.15,
                  zIndex: 0,
                }}
              ></div>
              {/* Step 1 */}
              <div className="relative flex flex-col items-center text-center md:w-1/3 z-10">
                <div
                  className={`w-16 h-16 flex items-center justify-center rounded-full shadow-lg mb-4 border-4 ${
                    darkMode
                      ? "bg-[#232946] border-[#eebbc3] text-[#eebbc3]"
                      : "bg-white border-[#232946] text-[#232946]"
                  }`}
                >
                  <span className="text-2xl font-bold">1</span>
                </div>
                <div
                  className="text-lg font-semibold mb-2"
                  style={{ color: darkMode ? "#eebbc3" : "#232946" }}
                >
                  {t("Vision & Precision")}
                </div>
                <p
                  className="text-base"
                  style={{ color: darkMode ? "#f8f4e3" : "#000000ff" }}
                >
                  {t("At")}{" "}
                  <span className="font-semibold">Vision Builders</span>,{" "}
                  {t(
                    "we unite architectural creativity with engineering precision. Each project is overseen with attention to detail, ensuring structural quality and design excellence.",
                  )}
                </p>
              </div>
              {/* Step 2 */}
              <div className="relative flex flex-col items-center text-center md:w-1/3 z-10">
                <div
                  className={`w-16 h-16 flex items-center justify-center rounded-full shadow-lg mb-4 border-4 ${
                    darkMode
                      ? "bg-[#181c2a] border-[#eebbc3] text-[#eebbc3]"
                      : "bg-[#f8f4e3] border-[#232946] text-[#232946]"
                  }`}
                >
                  <span className="text-2xl font-bold">2</span>
                </div>
                <div
                  className="text-lg font-semibold mb-2"
                  style={{ color: darkMode ? "#eebbc3" : "#232946" }}
                >
                  {t("Transparent Collaboration")}
                </div>
                <p
                  className="text-base"
                  style={{ color: darkMode ? "#f8f4e3" : "#000000" }}
                >
                  {t(
                    "We believe in transparent communication and collaboration—keeping clients consistently updated from planning to construction.",
                  )}
                </p>
              </div>
              {/* Step 3 */}
              <div className="relative flex flex-col items-center text-center md:w-1/3 z-10">
                <div
                  className={`w-16 h-16 flex items-center justify-center rounded-full shadow-lg mb-4 border-4 ${
                    darkMode
                      ? "bg-[#232946] border-[#eebbc3] text-[#eebbc3]"
                      : "bg-white border-[#eebbc3] text-[#232946]"
                  }`}
                >
                  <span className="text-2xl font-bold">3</span>
                </div>
                <div
                  className="text-lg font-semibold mb-2"
                  style={{ color: darkMode ? "#eebbc3" : "#232946" }}
                >
                  {t("Innovation & Results")}
                </div>
                <p
                  className="text-base"
                  style={{ color: darkMode ? "#f8f4e3" : "#000000ff" }}
                >
                  {t(
                    "Our process emphasizes innovation, sustainability, and efficiency, delivering results that are functional, aesthetic, and future-ready.",
                  )}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Case Studies */}
        <section
          className={`relative max-w-7xl mx-auto rounded-3xl p-0 shadow-2xl border border-opacity-20 overflow-hidden ${
            darkMode
              ? "bg-gradient-to-br from-[#232946] to-[#181c2a] border-[#eebbc3]"
              : "bg-gradient-to-br from-[#e0e7ef] to-[#f8fafc] border-[#232946]"
          }`}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: darkMode
                ? "radial-gradient(circle at 20% 80%, rgba(238,187,195,0.08) 0, transparent 70%)"
                : "radial-gradient(circle at 20% 80%, rgba(35,41,70,0.08) 0, transparent 70%)",
              zIndex: 1,
            }}
          ></div>
          <div className="relative z-10 px-8 py-16 md:px-20 flex flex-col items-center">
            <h2
              className="text-4xl font-extrabold mb-12 text-center drop-shadow-xl"
              style={{ color: darkMode ? "#eebbc3" : COLOR_3 }}
            >
              {t("Featured Projects")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {caseStudies.map(({ title, summary, year }, idx) => (
                <article
                  key={idx}
                  className={`relative group p-10 rounded-3xl shadow-xl border-2 transition-all duration-300 cursor-pointer overflow-hidden ${
                    darkMode
                      ? "bg-gradient-to-br from-[#181c2a] to-[#232946] border-[#eebbc3] text-[#f8f4e3] hover:scale-[1.025] hover:shadow-2xl"
                      : "bg-gradient-to-br from-[#e0e7ef] to-[#f8fafc] border-[#232946] text-[#232946] hover:scale-[1.025] hover:shadow-2xl"
                  }`}
                  style={{ minHeight: 260 }}
                >
                  {/* Accent Ribbon */}
                  <div
                    className={`absolute top-0 left-0 px-5 py-1 rounded-br-2xl font-bold text-xs tracking-widest shadow-md ${
                      darkMode
                        ? "bg-[#eebbc3] text-[#232946]"
                        : "bg-[#232946] text-[#eebbc3]"
                    } z-20`}
                    style={{ letterSpacing: 2 }}
                  >
                    {t("Project") + " " + (idx + 1)}
                  </div>
                  {/* Project Icon */}
                  <div className="flex items-center justify-center mb-6">
                    <div
                      className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg ${
                        darkMode
                          ? "bg-[#232946] text-[#eebbc3]"
                          : "bg-white text-[#232946]"
                      }`}
                    >
                      {idx === 0 ? (
                        <svg
                          width="36"
                          height="36"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M3 12l7-9 7 9v7a2 2 0 01-2 2H5a2 2 0 01-2-2v-7z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M9 21V9h6v12"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinejoin="round"
                          />
                        </svg>
                      ) : (
                        <svg
                          width="36"
                          height="36"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <rect
                            x="3"
                            y="7"
                            width="18"
                            height="13"
                            rx="2"
                            stroke="currentColor"
                            strokeWidth="2"
                          />
                          <path
                            d="M16 3v4M8 3v4"
                            stroke="currentColor"
                            strokeWidth="2"
                          />
                        </svg>
                      )}
                    </div>
                  </div>
                  <h3
                    className="text-2xl font-bold mb-4"
                    style={{ color: darkMode ? "#eebbc3" : COLOR_3 }}
                  >
                    {title}
                  </h3>
                  <p className="mb-6 leading-relaxed text-lg">{summary}</p>
                  <div
                    className={`inline-block px-4 py-2 rounded-lg font-semibold text-sm ${
                      darkMode
                        ? "bg-[#232946] text-[#eebbc3]"
                        : "bg-[#002346] text-[#f8f4e3]"
                    }`}
                    style={{ boxShadow: "0 2px 8px rgba(54,117,136,0.6)" }}
                  >
                    {t("Year")}: {year}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: Latest Insights */}
        <section
          className={`relative max-w-7xl mx-auto rounded-3xl p-0 shadow-2xl overflow-hidden ${
            darkMode
              ? "bg-gradient-to-br from-[#181c2a] to-[#232946]"
              : "bg-gradient-to-br from-[#232946] to-[#eebbc3]"
          }`}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: darkMode
                ? "radial-gradient(circle at 80% 80%, rgba(238,187,195,0.08) 0, transparent 70%)"
                : "radial-gradient(circle at 80% 80%, rgba(35,41,70,0.08) 0, transparent 70%)",
              zIndex: 1,
            }}
          ></div>
          <div className="relative z-10 px-8 py-16 md:px-20 flex flex-col items-center">
            <h2
              className="text-3xl font-semibold mb-12 text-center drop-shadow-xl"
              style={{ color: darkMode ? "#eebbc3" : COLOR_2 }}
            >
              {t("Latest Construction Insights")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-6xl mx-auto">
              {[
                {
                  title: t("Trends in Sustainable Architecture"),
                  excerpt: t(
                    "Exploring the latest innovations in eco-friendly building materials and energy design.",
                  ),
                  icon: (
                    <svg width="36" height="36" fill="none" viewBox="0 0 24 24">
                      <path
                        d="M12 2C7 7 2 12 12 22C22 12 17 7 12 2Z"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        r="3"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                  ),
                },
                {
                  title: t("Maximizing Space in Urban Design"),
                  excerpt: t(
                    "Creative strategies for making the most of limited urban spaces.",
                  ),
                  icon: (
                    <svg width="36" height="36" fill="none" viewBox="0 0 24 24">
                      <rect
                        x="3"
                        y="3"
                        width="18"
                        height="18"
                        rx="2"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <path
                        d="M3 9h18M9 21V3"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                  ),
                },
                {
                  title: t("Smart Building Technologies"),
                  excerpt: t(
                    "How IoT and automation are redefining modern construction.",
                  ),
                  icon: (
                    <svg width="36" height="36" fill="none" viewBox="0 0 24 24">
                      <rect
                        x="4"
                        y="4"
                        width="16"
                        height="16"
                        rx="4"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        r="2"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <path
                        d="M12 8v1M12 15v1M8 12h1M15 12h1"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                  ),
                },
              ].map(({ title, excerpt, icon }, idx) => (
                <article
                  key={idx}
                  className={`relative group p-8 rounded-2xl shadow-xl border-2 transition-all duration-300 overflow-hidden ${
                    darkMode
                      ? "bg-[#232946]/90 border-[#eebbc3] text-[#f8f4e3] hover:scale-[1.025] hover:shadow-2xl"
                      : "bg-white/90 border-[#232946] text-[#232946] hover:scale-[1.025] hover:shadow-2xl"
                  }`}
                  style={{ minHeight: 240 }}
                >
                  {/* Icon */}
                  <div className="flex items-center justify-center mb-5">
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg ${
                        darkMode
                          ? "bg-[#232946] text-[#eebbc3]"
                          : "bg-white text-[#232946]"
                      }`}
                    >
                      {icon}
                    </div>
                  </div>
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{ color: darkMode ? "#eebbc3" : COLOR_3 }}
                  >
                    {title}
                  </h3>
                  <p className="mb-4 leading-relaxed text-base">{excerpt}</p>
                  <button
                    className={`mt-2 inline-block py-2 px-4 rounded transition text-sm font-semibold ${
                      darkMode
                        ? "bg-[#eebbc3] text-[#232946]"
                        : "bg-[#232946] text-[#f8f4e3]"
                    }`}
                    onClick={() => navigate("/blog")}
                  >
                    {t("Read More")}
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6: Contact */}
        <section
          id="consultation-form"
          className={`relative   mx-auto mt-16 rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row ${
            darkMode
              ? "bg-gradient-to-br from-[#181c2a] to-[#232946]"
              : "bg-gradient-to-br from-[#e0e7ef] to-[#f8fafc]"
          }`}
        >
          {/* Left Accent & Icon */}
          <div className="hidden md:flex flex-col items-center justify-center w-1/3 bg-transparent p-8 relative">
            <div
              className={`w-20 h-20 flex items-center justify-center rounded-3xl shadow-2xl mb-6 ${
                darkMode
                  ? "bg-[#232946] text-[#eebbc3]"
                  : "bg-white text-[#232946]"
              }`}
            >
              <svg width="48" height="48" fill="none" viewBox="0 0 24 24">
                <rect
                  x="3"
                  y="7"
                  width="18"
                  height="13"
                  rx="2"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M8 7V5a4 4 0 1 1 8 0v2"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <div
              className="text-lg font-bold text-center"
              style={{ color: darkMode ? "#eebbc3" : "#232946" }}
            >
              {t("Let's Connect")}
            </div>
            <div
              className="mt-2 text-sm text-center"
              style={{ color: darkMode ? "#f8f4e3" : "#232946" }}
            >
              {t(
                "Ready to discuss your project? Fill out the form and our team will get in touch soon.",
              )}
            </div>
          </div>
          {/* Form Card */}
          <div className="w-full md:w-2/3 p-8 md:p-12 flex flex-col justify-center">
            <h2
              className="text-3xl font-extrabold mb-8 text-center drop-shadow-xl"
              style={{ color: darkMode ? "#eebbc3" : COLOR_3 }}
            >
              {t("Schedule a Project Consultation")}
            </h2>
            <form className="space-y-6" onSubmit={handleConsultSubmit}>
              <div>
                <label
                  className="block mb-1 font-semibold"
                  htmlFor="name"
                  style={{ color: darkMode ? "#eebbc3" : COLOR_3 }}
                >
                  {t("Name")}
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder={t("Your full name")}
                  required
                  className={`w-full p-3 rounded-xl border-2 focus:ring-2 focus:ring-[#eebbc3] transition ${
                    darkMode
                      ? "bg-[#232946] text-[#f8f4e3] border-[#eebbc3] placeholder-[#eebbc3]/60"
                      : "bg-[#f8f4e3] text-[#232946] border-[#232946] placeholder-[#232946]/60"
                  }`}
                />
              </div>
              <div>
                <label
                  className="block mb-1 font-semibold"
                  htmlFor="email"
                  style={{ color: darkMode ? "#eebbc3" : COLOR_3 }}
                >
                  {t("Email")}
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder={t("Your email address")}
                  required
                  className={`w-full p-3 rounded-xl border-2 focus:ring-2 focus:ring-[#eebbc3] transition ${
                    darkMode
                      ? "bg-[#232946] text-[#f8f4e3] border-[#eebbc3] placeholder-[#eebbc3]/60"
                      : "bg-[#f8f4e3] text-[#232946] border-[#232946] placeholder-[#232946]/60"
                  }`}
                />
              </div>
              <div>
                <label
                  className="block mb-1 font-semibold"
                  htmlFor="message"
                  style={{ color: darkMode ? "#eebbc3" : COLOR_3 }}
                >
                  {t("Message")}
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder={t("Briefly describe your project")}
                  required
                  className={`w-full p-3 rounded-xl border-2 focus:ring-2 focus:ring-[#eebbc3] transition ${
                    darkMode
                      ? "bg-[#232946] text-[#f8f4e3] border-[#eebbc3] placeholder-[#eebbc3]/60"
                      : "bg-[#f8f4e3] text-[#232946] border-[#232946] placeholder-[#232946]/60"
                  }`}
                />
              </div>
              <button
                type="submit"
                className={`w-full py-3 rounded-full font-bold text-lg shadow-lg transition-colors hover:scale-105 hover:bg-[#eebbc3] hover:text-[#232946] duration-200 border-2 border-[#eebbc3] ${
                  darkMode
                    ? "bg-[#232946] text-[#eebbc3]"
                    : "bg-[#232946] text-[#f8f4e3]"
                }`}
              >
                {t("Book Consultation")}
              </button>
            </form>
            {consultSent && (
              <div
                className="mt-4 text-center font-semibold"
                style={{ color: darkMode ? "#eebbc3" : "#002346" }}
              >
                {t("Your consultation request was submitted successfully!")}
              </div>
            )}
          </div>
        </section>
      </main>

      {/* Anchor */}
      <div id="consultation"></div>
      <Footer darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
}
