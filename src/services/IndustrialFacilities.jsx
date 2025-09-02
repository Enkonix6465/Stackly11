// features array moved inside component
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header.jsx";
import { useTranslation } from "react-i18next";
import { useDarkMode } from "../context/DarkModeContext.jsx";
import Footer from "../components/Footer.jsx";
import AOS from "aos";
import corporate from "../assets/industryHero.mp4";
import corporatePhoto from "../assets/industrialFacilities.jpg";
const COLOR_1 = "#002346"; // deep blue
const COLOR_2 = "#F8F4E3"; // off-white
const COLOR_3 = "#333333"; // dark gray
const IndustrialFacilities = ({ user, onLogout }) => {
  const { darkMode, setDarkMode } = useDarkMode();
  const { t } = useTranslation();

  const features = [
    t("Direct access to industrial facility specialists"),
    t("Timely review of industrial documents and contracts"),
    t("Custom safety and compliance checklists"),
    t("On-demand updates via our facility portal"),
  ];
  // Prevent horizontal scroll on the whole page
  const navigate = useNavigate();
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = "html, body { overflow-x: hidden !important; }";
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const benefits = [
    t("Comprehensive support for industrial facility planning and operations"),
    t("Detailed contract review and drafting for industrial projects"),
    t("Expert guidance on plant expansions, mergers, and restructuring"),
    t("Compliance and safety advice for industrial regulations"),
    t("Risk management for facility managers and stakeholders"),
    t("Proactive representation in regulatory and industrial disputes"),
  ];

  const services = [
    {
      title: t("Industrial Facility Planning"),
      description: t(
        "Strategic guidance for designing, expanding, and structuring industrial plants and complexes",
      ),
    },
    {
      title: t("Industrial Contracts & Agreements"),
      description: t(
        "Drafting, negotiation, and review of contracts for construction, equipment, and operations",
      ),
    },
    {
      title: t("Plant Expansions & Mergers"),
      description: t(
        "Legal due diligence, transaction structuring, and regulatory filings for industrial mergers and expansions",
      ),
    },
    {
      title: t("Regulatory & Safety Compliance"),
      description: t(
        "Advice on industrial regulations, safety standards, and ongoing compliance audits",
      ),
    },
    {
      title: t("Facility Disputes & Resolution"),
      description: t(
        "Expert representation and mediation in industrial and facility-related disputes",
      ),
    },
    {
      title: t("Industrial Governance"),
      description: t(
        "Advisory on facility management, risk mitigation, and compliance with industrial standards",
      ),
    },
  ];

  const pricingTiers = [
    {
      title: t("Project Evaluation"),
      price: "$499",
      priceNote: t("project"),
      features: [
        t("Initial consultation with an engineer"),
        t("Review of facility schematics (up to 20 pages)"),
        t("Initial feasibility study & options"),
        t("Technical recommendations"),
        t("Follow-up email support"),
      ],
      buttonText: t("Book Consult"),
      buttonClass:
        "w-full bg-[#002346] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#B57560] transition-colors duration-300 transform hover:scale-105",
      boxStyle: { background: "#AABF91", color: "#002346" },
      className:
        "rounded-2xl p-6 border-2 border-[#B57560] hover:border-[#002346] transition-all duration-300",
    },
    {
      title: t("Maintenance & Support"),
      price: "$7,999",
      priceNote: t("month"),
      features: [
        t("All Project Evaluation services"),
        t("Scheduled preventative maintenance"),
        t("24/7 emergency response & support"),
        t("Equipment calibration & performance audits"),
      ],
      buttonText: t("Contact Us"),
      buttonClass:
        "w-full bg-[#AABF91] text-[#002346] font-semibold py-3 px-6 rounded-lg hover:bg-[#B57560] hover:text-white transition-colors duration-300 transform hover:scale-105",
      badge: t("MOST POPULAR"),
      boxStyle: { background: "#002346", color: "#AABF91" },
      className: "rounded-2xl p-6 border-2 border-[#AABF91] scale-105",
    },
    {
      title: t("Turnkey Solution"),
      price: "$14,999",
      priceNote: t("project"),
      features: [
        t("End-to-end management for new builds or upgrades"),
        t("Custom design and engineering"),
        t("On-site team & priority project management"),
        t("Regular progress reports & strategy calls"),
      ],
      buttonText: t("Start Now"),
      buttonClass:
        "w-full bg-[#002346] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#B57560] transition-colors duration-300 transform hover:scale-105",
      boxStyle: { background: "#AABF91", color: "#002346" },
      className:
        "rounded-2xl p-6 border-2 border-[#B57560] hover:border-[#002346] transition-all duration-300",
    },
  ];

  return (
    <div
      className={`min-h-screen w-full transition-colors duration-300 ${
        darkMode ? "bg-[#002346]" : "bg-white"
      }`}
      style={{ overflowX: "hidden" }}
    >
      <div className="fixed top-0 left-0 w-full z-[100] bg-white dark:bg-[#002346] shadow-lg">
        <Header
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          user={user}
          onLogout={onLogout}
          sticky={true}
        />
      </div>
      {/* Hero Section with Video */}
      <section
        className="relative w-screen h-screen flex items-center justify-center overflow-hidden m-0 p-0"
        style={{ minHeight: "100vh", maxWidth: "100vw" }}
      >
        <video
          autoPlay
          loop
          loading="lazy"
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
          style={{ minHeight: "100vh", minWidth: "100vw", objectFit: "cover" }}
        >
          <source src={corporate} type="video/mp4" />
          {t("Your browser does not support the video tag.")}
        </video>
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
          <h1
            className="font-bold text-5xl mb-6 text-white drop-shadow-lg"
            data-aos="fade-down"
          >
            {t("Industrial Facilities")}
          </h1>
          <p
            className="max-w-2xl mx-auto text-lg text-white drop-shadow-lg"
            data-aos="fade-up"
          >
            {t(
              "End-to-end facility support for all stages of development growth.",
            )}
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section
        id="key-benefits"
        className="w-full py-20 px-4 transition-colors duration-300"
        style={{ backgroundColor: darkMode ? COLOR_1 : COLOR_2 }}
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-once="false"
      >
        <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row gap-12 items-start justify-between">
          {/* Left: Image and Tagline */}
          <div className="hidden md:flex flex-col items-center w-1/3">
            <img
              src={corporatePhoto}
              alt="Industrial Facility"
              className="rounded-2xl shadow-xl mb-6 w-[320px] h-[340px] object-cover border-4 border-[#F8F4E3] dark:border-[#002346]"
              style={{
                maxWidth: "100%",
                background: darkMode ? "#333333" : "#fff",
                marginTop: 0,
                alignSelf: "flex-start",
              }}
            />
            <h3
              className="text-2xl font-bold mb-2 self-center"
              style={{ color: darkMode ? "#F8F4E3" : "#002346" }}
            >
              {t("Your Vision. Our Blueprint.")}
            </h3>
            <p
              className="text-lg max-w-md self-center"
              style={{ color: darkMode ? "#F8F4E3" : "#333333" }}
            >
              {t(
                "We create industrial spaces that balance design, safety, and operational efficiency.",
              )}
            </p>
          </div>
          {/* Right: Modern Grid of Benefit Cards */}
          <div className="flex-1 w-full">
            <div className="mb-10 text-center md:text-left">
              <h2
                className="text-5xl font-bold mb-4"
                style={{ color: darkMode ? "#F8F4E3" : "#002346" }}
              >
                {t("Key Advantages")}
              </h2>
              <p
                className="text-lg max-w-2xl mx-auto md:mx-0"
                style={{ color: darkMode ? "#F8F4E3" : "#333333" }}
              >
                {t(
                  "Comprehensive, expert support for every stage of your industrial project.",
                )}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((b, idx) => (
                <div
                  key={idx}
                  className="relative flex flex-col items-center bg-white dark:bg-[#333333] rounded-2xl shadow-xl px-6 py-8 border border-[#e5e7eb] dark:border-[#222] hover:scale-105 transition-transform duration-300"
                  style={{
                    color: darkMode ? "#F8F4E3" : "#002346",
                    minHeight: 180,
                  }}
                >
                  <div
                    className="flex items-center justify-center w-16 h-16 rounded-full shadow-lg mb-4"
                    style={{
                      background: darkMode ? "#333333" : "#002346",
                      color: "#F8F4E3",
                      fontSize: 32,
                      fontWeight: 700,
                      border: `3px solid ${darkMode ? "#F8F4E3" : "#B57560"}`,
                      transition: "border 0.2s",
                    }}
                  >
                    <span>{idx + 1}</span>
                  </div>
                  <h4
                    className="font-bold text-lg mb-2 text-center w-full"
                    style={{ color: darkMode ? "#F8F4E3" : "#002346" }}
                  >
                    {b.split(":")[0]}
                  </h4>
                  <p
                    className="text-sm text-center w-full"
                    style={{ color: darkMode ? "#AABF91" : "#333333" }}
                  >
                    {b}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Services Overview Section (reference image style) */}
      <section
        className="w-full py-16 px-4 relative transition-colors duration-300"
        style={{ background: COLOR_1 }}
      >
        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="mb-12" data-aos="fade-up">
            <h2 className="text-5xl text-center font-bold text-white">
              {t("Industrial Services")}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                style={{ backgroundColor: COLOR_2, color: COLOR_3 }}
                className="rounded-2xl p-6 shadow-lg transform transition-all duration-300 hover:scale-105"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                data-aos-once="false"
              >
                <div className="mb-4">
                  <span
                    className="text-2xl font-bold"
                    style={{ color: COLOR_1 }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3
                  className="text-xl font-bold mb-4"
                  style={{ color: COLOR_1 }}
                >
                  {service.title}
                </h3>
                <p className="text-base" style={{ color: COLOR_3 }}>
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works - Vertical Stepper Style */}
      <section
        className="w-full py-20 px-4 relative"
        style={{ background: darkMode ? COLOR_1 : COLOR_2, overflow: "hidden" }}
      >
        <div className="max-w-3xl mx-auto w-full flex flex-col items-center">
          <div className="mb-12 text-center">
            <h2
              className="text-5xl font-extrabold mb-2"
              style={{ color: darkMode ? COLOR_2 : COLOR_1, letterSpacing: -2 }}
            >
              {t("HOW WE WORK")}
            </h2>
            <p
              className={`text-lg mb-8 ${darkMode ? "text-[#AABF91]" : "text-[#333]"}`}
            >
              {t("Our industrial project process")}
            </p>
          </div>
          {/* Vertical Stepper with Progress Bar */}
          <div className="relative w-full flex flex-col items-center">
            {/* Vertical progress bar */}
            <div
              className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#B57560] to-[#AABF91] opacity-30 z-0"
              style={{ transform: "translateX(-50%)" }}
            />
            {[
              t("Initial consultation and requirement analysis."),
              t("Site survey and feasibility study."),
              t("Conceptual and architectural design creation."),
              t("Regulatory approvals and compliance handling."),
              t("Efficient construction with quality monitoring."),
              t("Transparent client updates and review meetings."),
              t("Final handover and post-completion support."),
            ].map((step, idx, arr) => (
              <div
                key={idx}
                className="  flex flex-col md:flex-row items-center w-full  "
              >
                <div className="flex flex-col items-center w-full md:w-auto">
                  {/* Step Number */}
                  <div
                    className="flex items-center justify-center w-16 h-16 rounded-full shadow-lg     bg-white dark:bg-[#333333] border-4"
                    style={{
                      borderColor: darkMode ? "#AABF91" : "#B57560",
                      color: darkMode ? "#AABF91" : "#002346",
                      fontSize: 28,
                      fontWeight: 700,
                    }}
                  >
                    <span>{String(idx + 1).padStart(2, "0")}</span>
                  </div>
                  {/* Progress bar segment */}
                  {idx < arr.length - 1 && (
                    <div className="w-1 h-12 md:h-16 bg-gradient-to-b from-[#B57560] to-[#AABF91] opacity-30" />
                  )}
                </div>
                {/* Step Card */}
                <div
                  className="relative bg-white dark:bg-[#333333] rounded-xl shadow-lg px-6 py-5 min-h-[90px] flex flex-col justify-center items-center border border-[#e5e7eb] dark:border-[#222] w-full md:ml-8 my-4 md:my-0"
                  style={{
                    color: darkMode ? "#F8F4E3" : "#002346",
                    zIndex: 2,
                    textAlign: "center",
                  }}
                >
                  <h3
                    className="font-bold text-lg mb-1"
                    style={{ color: darkMode ? "#AABF91" : "#002346" }}
                  >
                    {t("Step")} {idx + 1}
                  </h3>
                  <p
                    className="text-sm"
                    style={{ color: darkMode ? "#F8F4E3" : "#333333" }}
                  >
                    {step}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        className="w-full py-16 px-4 transition-colors duration-300"
        style={{ background: "#002346" }}
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Feature descriptions */}
            <div className="flex flex-col space-y-8" data-aos="fade-right">
              <div>
                <h2
                  className="text-5xl font-bold mb-6"
                  style={{ color: "#F8F4E3" }}
                >
                  {t("Why Choose Us for Industrial Facility Services")}
                </h2>
                <p className="text-xl mb-8" style={{ color: "#F8F4E3" }}>
                  {t(
                    "Enhancing industrial spaces with reliable renovation and restoration solutions.",
                  )}
                </p>
              </div>
              <div className="space-y-6">
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "#F8F4E3" }}
                >
                  <b>{t("Expertise in Industrial Renovation:")}</b>{" "}
                  {t(
                    "Our team has extensive experience in upgrading warehouses, factories, and production plants to meet modern safety and operational standards.",
                  )}
                </p>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "#F8F4E3" }}
                >
                  <b>{t("Comprehensive Maintenance & Compliance:")}</b>{" "}
                  {t(
                    "We ensure your facilities remain compliant with industry regulations through preventive maintenance, structural inspections, and energy-efficient upgrades.",
                  )}
                </p>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "#F8F4E3" }}
                >
                  <b>{t("Customized Restoration Solutions:")}</b>{" "}
                  {t(
                    "Whether repairing structural elements, modernizing layouts, or restoring heritage industrial sites, we deliver tailored solutions that enhance functionality and extend asset life.",
                  )}
                </p>
              </div>
            </div>
            {/* Features as cards */}
            <div
              className="grid grid-cols-1 sm:grid-cols-2 gap-8"
              data-aos="fade-left"
            >
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl shadow-lg hover:scale-105 transition-all duration-300"
                  style={{ background: "#F8F4E3", color: "#333333" }}
                >
                  <h3 className="text-xl font-bold mb-2">{feature}</h3>
                  <p className="text-base">
                    {t("Benefit from {{feature}} as our corporate client.", {
                      feature: feature.toLowerCase(),
                    })}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA/Pricing Section */}
      <section
        id="pricing-section"
        className="w-full py-16 px-4 transition-colors duration-300"
        style={{ backgroundColor: darkMode ? "#002346" : "#F8F4E3" }}
      >
        <div className="max-w-6xl mx-auto text-center w-full">
          <h2
            className="text-5xl font-bold mb-4"
            style={{ color: darkMode ? "#F8F4E3" : "#002346" }}
            data-aos="fade-down"
            data-aos-delay="50"
          >
            {t("Secure Your Corporate Advantage")}
          </h2>
          <p
            className="text-xl mb-12 max-w-2xl mx-auto"
            style={{ color: darkMode ? "#F8F4E3" : "#333333" }}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {t(
              "Build and grow your company with expert legal partners by your side.",
            )}
          </p>
          {/* Pricing Tiers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {pricingTiers.map((tier, i) => (
              <div
                key={i}
                style={{
                  background: COLOR_2,
                  color: COLOR_3,
                  border: `2px solid ${COLOR_1}`,
                }}
                className="rounded-2xl p-6 border-2 shadow-md hover:scale-105 transition-all duration-300"
              >
                {tier.badge && (
                  <div className="bg-white text-[#002346] text-sm font-bold px-3 py-1 rounded-full inline-block mb-4 animate-pulse">
                    {tier.badge}
                  </div>
                )}
                <h3
                  className="text-2xl font-bold mb-2"
                  style={{ color: COLOR_1 }}
                >
                  {tier.title}
                </h3>
                <div
                  className="text-4xl font-bold mb-4"
                  style={{ color: COLOR_3 }}
                >
                  {tier.price}
                  <span className="text-lg">
                    {t("/ {{priceNote}}", { priceNote: tier.priceNote })}
                  </span>
                </div>
                <ul className="text-left space-y-3 mb-6">
                  {tier.features.map((feat, j) => (
                    <li key={j}>{feat}</li>
                  ))}
                </ul>
                {tier.buttonText === t("Book Consult") && (
                  <button
                    className="w-full font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
                    style={{
                      background: COLOR_1,
                      color: COLOR_2,
                      border: `2px solid ${COLOR_1}`,
                    }}
                    onClick={() => navigate("/home2#consultation-form")}
                  >
                    {tier.buttonText}
                  </button>
                )}
                {tier.buttonText === t("Contact Us") && (
                  <button
                    className="w-full font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
                    style={{
                      background: COLOR_1,
                      color: COLOR_2,
                      border: `2px solid ${COLOR_1}`,
                    }}
                    onClick={() => navigate("/contact")}
                  >
                    {tier.buttonText}
                  </button>
                )}
                {tier.buttonText === t("Start Now") && (
                  <button
                    className="w-full font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
                    style={{
                      background: COLOR_1,
                      color: COLOR_2,
                      border: `2px solid ${COLOR_1}`,
                    }}
                    onClick={() => navigate("/home")}
                  >
                    {tier.buttonText}
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer darkMode={darkMode} setDarkMode={setDarkMode} bgColor="#F8F4E3" />
    </div>
  );
};

export default IndustrialFacilities;
