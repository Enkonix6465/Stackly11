import AOS from "aos";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";
import { useDarkMode } from "../context/DarkModeContext.jsx";

import commercialComplex from "../assets/commercialComplex.jpg";
import civil from "../assets/commercialHero.mp4";

const COLOR_1 = "#002346"; // deep blue
const COLOR_2 = "#F8F4E3"; // off-white
const COLOR_3 = "#333333"; // dark gray

const CommercialComplexes = ({ user, onLogout }) => {
  const { darkMode, setDarkMode } = useDarkMode();
  const { t } = useTranslation();
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
    t("Expert planning and design tailored to commercial needs"),
    t("Efficient use of space to maximize functionality and appeal"),
    t("Compliance with modern safety and regulatory standards"),
    t("Sustainable and energy-efficient construction methods"),
    t("High-quality materials ensuring durability and aesthetics"),
    t("Timely delivery with strict project management practices"),
  ];

  const features = [
    t("Direct collaboration with architects and engineers"),
    t("Transparent progress tracking and reports"),
    t("Custom design layouts for varied business types"),
    t("On-demand project updates and client walkthroughs"),
  ];

  const services = [
    {
      title: t("Design & Architecture"),
      description: t(
        "Innovative architectural designs tailored for retail, office, and mixed-use commercial complexes.",
      ),
    },
    {
      title: t("Structural Engineering"),
      description: t(
        "Safe and robust structures ensuring long-term reliability and compliance with all codes.",
      ),
    },
    {
      title: t("Construction Management"),
      description: t(
        "End-to-end project management ensuring efficiency, cost-effectiveness, and timely delivery.",
      ),
    },
    {
      title: t("Interior Fit-outs"),
      description: t(
        "Customized interiors designed for functionality, branding, and modern aesthetics.",
      ),
    },
    {
      title: t("Sustainability Solutions"),
      description: t(
        "Eco-friendly practices including energy-efficient systems, water management, and green materials.",
      ),
    },
    {
      title: t("Maintenance & Support"),
      description: t(
        "Post-construction support including regular inspections, upgrades, and maintenance services.",
      ),
    },
  ];

  const pricingTiers = [
    {
      title: t("Consultation"),
      price: "$199",
      priceNote: t("session"),
      features: [
        t("One-on-one consultation with our commercial expert"),
        t("Site feasibility analysis"),
        t("Initial concept design discussion"),
        t("Budget estimation and project scope outline"),
        t("Follow-up consultation to finalize details"),
      ],
      buttonText: t("Book Consult"),
      buttonClass: `w-full bg-${COLOR_1} text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#B57560] transition-colors duration-300 transform hover:scale-105`,
      boxStyle: { background: COLOR_2, color: COLOR_3 },
      className: `rounded-2xl p-6 border-2 border-${COLOR_1} hover:border-${COLOR_3} transition-all duration-300`,
    },
    {
      title: t("Full Project"),
      price: "$2,499",
      priceNote: t("project"),
      features: [
        t("Complete architectural design & planning"),
        t("Structural, MEP engineering & maintenance"),
        t("Project execution & supervision"),
        t("Timely handover of commercial complex"),
      ],
      buttonText: t("Contact Us"),
      buttonClass: `w-full bg-[#AABF91] text-${COLOR_1} font-semibold py-3 px-6 rounded-lg hover:bg-[#B57560] hover:text-white transition-colors duration-300 transform hover:scale-105`,
      badge: t("MOST POPULAR"),
      boxStyle: { background: COLOR_1, color: COLOR_2 },
      className: `rounded-2xl p-6 border-2 border-${COLOR_1} scale-105`,
    },
    {
      title: t("Renovation & Expansion"),
      price: "$1,499",
      priceNote: t("project"),
      features: [
        t("Structural assessment of existing buildings"),
        t("Redesign for modern layouts"),
        t("Expansion and retrofitting services"),
        t("Updated interiors and sustainable upgrades"),
        t("Compliance with current regulations and standards"),
      ],
      buttonText: t("Start Now"),
      buttonClass: `w-full bg-${COLOR_1} text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#B57560] transition-colors duration-300 transform hover:scale-105`,
      boxStyle: { background: COLOR_2, color: COLOR_3 },
      className: `rounded-2xl p-6 border-2 border-${COLOR_1} hover:border-${COLOR_3} transition-all duration-300`,
    },
  ];

  // const cubeColors = darkMode
  //   ? ["#F8F4E3", "#AABF91", "#F8F4E3", "#AABF91", "#F8F4E3", "#AABF91"]
  //   : ["#002346", "#B57560", "#002346", "#B57560", "#002346", "#B57560"];

  return (
    <div
      className={`min-h-screen w-full transition-colors duration-300 ${
        darkMode ? `bg-[${COLOR_1}]` : `bg-[${COLOR_2}]`
      }`}
      style={{ overflowX: "hidden" }}
    >
      <div
        className={`fixed top-0 left-0 w-full z-[100] ${
          darkMode ? `bg-[${COLOR_3}]` : `bg-[${COLOR_2}]`
        } shadow-lg`}
      >
        <Header
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          user={user}
          onLogout={onLogout}
          sticky={true}
        />
      </div>

      {/* Hero Section */}
      <section
        className="relative w-screen h-screen flex items-center justify-center overflow-hidden m-0 p-0"
        style={{
          minHeight: "100vh",
          maxWidth: "100vw",
          backgroundColor: COLOR_1,
        }}
      >
        <video
          autoPlay
          loop
          loading="lazy"
          muted
          playsInline
          className="absolute opacity-20 inset-0 w-full h-full object-cover z-0"
          style={{ minHeight: "100vh", minWidth: "100vw", objectFit: "cover" }}
        >
          <source src={civil} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
          <h1
            className="font-bold text-5xl mb-6 text-white drop-shadow-lg"
            data-aos="fade-down"
          >
            {t("Commercial Complexes")}
          </h1>
          <p
            className="max-w-2xl mx-auto text-lg text-white drop-shadow-lg"
            data-aos="fade-up"
          >
            {t(
              "Modern, functional, and sustainable commercial spaces—built to last.",
            )}
          </p>
        </div>
      </section>

      {/* Benefits Section - New Look */}
      <section
        id="key-benefits"
        className="w-full py-20 px-4 transition-colors duration-300"
        style={{ backgroundColor: darkMode ? "#002346" : "#F8F4E3" }}
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-once="false"
      >
        <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row gap-12 items-start justify-between">
          {/* Left: Image and Tagline */}
          <div className="hidden md:flex flex-col items-center w-1/3">
            <img
              src={commercialComplex}
              alt="Commercial Complex"
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
                "We create commercial spaces that balance design, functionality, and growth potential.",
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
                  "Smartly designed and expertly executed commercial complexes to help businesses thrive.",
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
                    style={{ color: darkMode ? COLOR_3 : "#002346" }}
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

      {/* Services Section */}
      <section
        className="w-full py-16 px-4 relative transition-colors duration-300"
        style={{ background: "#002346" }}
      >
        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="mb-12" data-aos="fade-up">
            <h2 className="text-5xl text-center font-bold text-white">
              {t("Our Services")}
            </h2>
          </div>
          {/* Modern Vertical Stepper/Timeline for Services */}
          <div className="relative flex flex-col items-center gap-0">
            {/* Timeline vertical line */}
            <div
              className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#B57560] to-[#AABF91] opacity-30 z-0"
              style={{ transform: "translateX(-50%)" }}
            />
            {services.map((service, idx) => {
              const isLeft = idx % 2 !== 0;
              return (
                <div
                  key={idx}
                  className={`relative flex flex-col md:flex-row items-center w-full z-10 mb-8 ${
                    isLeft ? "md:justify-start" : "md:justify-end"
                  }`}
                  style={{ minHeight: 120 }}
                >
                  {/* Connector line above */}
                  {idx !== 0 && (
                    <div
                      className="hidden md:block absolute left-1/2 top-0 w-1 h-8 bg-[#B57560] opacity-40"
                      style={{ transform: "translateX(-50%)" }}
                    />
                  )}
                  {/* Left side (card or empty) */}
                  {isLeft ? (
                    <>
                      {/* Card left */}
                      <div
                        className="relative bg-white dark:bg-[#333333] rounded-xl shadow-lg px-8 py-6 min-h-[90px] flex flex-col justify-center items-end border border-[#e5e7eb] dark:border-[#222] md:max-w-[520px] md:w-[520px] md:mr-8"
                        style={{
                          color: darkMode ? "#F8F4E3" : "#002346",
                          zIndex: 2,
                          textAlign: "right",
                        }}
                      >
                        <h3
                          className="font-bold text-xl mb-2"
                          style={{ color: darkMode ? "#AABF91" : "#002346" }}
                        >
                          {service.title}
                        </h3>
                        <p
                          className="text-base"
                          style={{ color: darkMode ? "#F8F4E3" : "#333333" }}
                        >
                          {service.description}
                        </p>
                      </div>

                      <div className="flex-1 hidden md:block" />
                    </>
                  ) : (
                    <>
                      <div className="flex-1 hidden md:block" />

                      {/* Card right */}
                      <div
                        className="relative bg-white dark:bg-[#333333] rounded-xl shadow-lg px-8 py-6 min-h-[90px] flex flex-col justify-center items-start border border-[#e5e7eb] dark:border-[#222] md:max-w-[520px] md:w-[520px] md:ml-8"
                        style={{
                          color: darkMode ? "#F8F4E3" : "#002346",
                          zIndex: 2,
                          textAlign: "left",
                        }}
                      >
                        <h3
                          className="font-bold text-xl mb-2"
                          style={{ color: darkMode ? "#AABF91" : "#002346" }}
                        >
                          {service.title}
                        </h3>
                        <p
                          className="text-base"
                          style={{ color: darkMode ? "#F8F4E3" : "#333333" }}
                        >
                          {service.description}
                        </p>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
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
              {t("Our commercial project process")}
            </p>
          </div>
          {/* Vertical Stepper with Progress Bar */}
          <div className="relative w-full flex flex-col items-center">
            {/* Vertical progress bar */}

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
                className="relative flex flex-col md:flex-row items-center w-full z-10"
              >
                <div className="flex flex-col items-center w-full md:w-auto">
                  {/* Step Number */}
                  <div
                    className="flex items-center justify-center w-16 h-16 rounded-full shadow-lg mb-2 z-10 bg-white dark:bg-[#333333] border-4"
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
                    style={{ color: darkMode ? COLOR_1 : "#333333" }}
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
        style={{ background: COLOR_1 }}
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Feature descriptions */}
            <div className="flex flex-col space-y-8" data-aos="fade-right">
              <div>
                <h2
                  className="text-5xl font-bold mb-6"
                  style={{ color: COLOR_2 }}
                >
                  {t("Commercial Complex Features")}
                </h2>
                <p className="text-xl mb-8" style={{ color: COLOR_2 }}>
                  {t("Designed for efficiency, safety, and business success.")}
                </p>
              </div>
              <div className="space-y-6">
                <p
                  className="text-base leading-relaxed"
                  style={{ color: COLOR_2 }}
                >
                  {t(
                    "We deliver innovative solutions for commercial complexes, ensuring compliance, safety, and optimal business environments.",
                  )}
                </p>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: COLOR_2 }}
                >
                  {t(
                    "You can monitor project progress, access building plans, and receive updates online, or contact us for tailored business support.",
                  )}
                </p>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: COLOR_2 }}
                >
                  {t(
                    "Our team is available for urgent site visits, regulatory approvals, and last-minute business requirements.",
                  )}
                </p>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: COLOR_2 }}
                >
                  {t(
                    "Every inquiry is addressed with professionalism, speed, and clarity.",
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
                  style={{ background: COLOR_2, color: COLOR_3 }}
                >
                  <h3 className="text-xl font-bold mb-2">{feature}</h3>
                  <p className="text-base">
                    {t("Benefit from {{feature}} as our civil client.", {
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
            {t("Build Your Commercial Complex With Confidence")}
          </h2>
          <p
            className="text-xl mb-12 max-w-2xl mx-auto"
            style={{ color: darkMode ? "#F8F4E3" : "#333333" }}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {t(
              "Get expert planning, reliable execution, and peace of mind for your commercial project—with us.",
            )}
          </p>
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
                  <span className="text-lg">/{tier.priceNote}</span>
                </div>
                <ul className="text-left space-y-3 mb-6">
                  {tier.features.map((feat, j) => (
                    <li key={j}>{feat}</li>
                  ))}
                </ul>
                {tier.buttonText === "Book Consult" && (
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
                {tier.buttonText === "Contact Us" && (
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
                {tier.buttonText === "Start Now" && (
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
      <Footer darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
};

export default CommercialComplexes;
