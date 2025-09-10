import AOS from "aos";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";
import { useDarkMode } from "../context/DarkModeContext.jsx";

import renovation from "../assets/renovationHero.mp4";
import Photo from "../assets/restoration.jpg";

const COLOR_1 = "#002346"; // deep blue
const COLOR_2 = "#F8F4E3"; // off-white
const COLOR_3 = "#333333";

const RenovationRestoration = ({ user, onLogout }) => {
  const { darkMode, setDarkMode } = useDarkMode();
  const { t } = useTranslation();
  const navigate = useNavigate();
  // Prevent horizontal scroll on the whole page
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

  // Renovation and restoration-specific content (i18n)
  const pricingTiers = [
    {
      title: t("renovation.pricing.0.title"),
      price: t("renovation.pricing.0.price"),
      priceNote: t("renovation.pricing.0.priceNote"),
      features: [
        t("renovation.pricing.0.features.0"),
        t("renovation.pricing.0.features.1"),
        t("renovation.pricing.0.features.2"),
        t("renovation.pricing.0.features.3"),
        t("renovation.pricing.0.features.4"),
      ],
      buttonText: t("renovation.pricing.0.buttonText"),
      buttonClass:
        "w-full bg-[#002346] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#B57560] transition-colors duration-300 transform hover:scale-105",
      boxStyle: { background: "#AABF91", color: "#002346" },
      className:
        "rounded-2xl p-6 border-2 border-[#B57560] hover:border-[#002346] transition-all duration-300",
    },
    {
      title: t("renovation.pricing.1.title"),
      price: t("renovation.pricing.1.price"),
      priceNote: t("renovation.pricing.1.priceNote"),
      features: [
        t("renovation.pricing.1.features.0"),
        t("renovation.pricing.1.features.1"),
        t("renovation.pricing.1.features.2"),
        t("renovation.pricing.1.features.3"),
        t("renovation.pricing.1.features.4"),
      ],
      buttonText: t("renovation.pricing.1.buttonText"),
      buttonClass:
        "w-full bg-[#AABF91] text-[#002346] font-semibold py-3 px-6 rounded-lg hover:bg-[#B57560] hover:text-white transition-colors duration-300 transform hover:scale-105",
      badge: t("renovation.pricing.1.badge"),
      boxStyle: { background: "#002346", color: "#AABF91" },
      className: "rounded-2xl p-6 border-2 border-[#AABF91] scale-105",
    },
    {
      title: t("renovation.pricing.2.title"),
      price: t("renovation.pricing.2.price"),
      priceNote: t("renovation.pricing.2.priceNote"),
      features: [
        t("renovation.pricing.2.features.0"),
        t("renovation.pricing.2.features.1"),
        t("renovation.pricing.2.features.2"),
        t("renovation.pricing.2.features.3"),
        t("renovation.pricing.2.features.4"),
        t("renovation.pricing.2.features.5"),
        t("renovation.pricing.2.features.6"),
      ],
      buttonText: t("renovation.pricing.2.buttonText"),
      buttonClass:
        "w-full bg-[#002346] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#B57560] transition-colors duration-300 transform hover:scale-105",
      boxStyle: { background: "#AABF91", color: "#002346" },
      className:
        "rounded-2xl p-6 border-2 border-[#B57560] hover:border-[#002346] transition-all duration-300",
    },
  ];
  const benefits = [
    t("renovation.benefits.0"),
    t("renovation.benefits.1"),
    t("renovation.benefits.2"),
    t("renovation.benefits.3"),
    t("renovation.benefits.4"),
    t("renovation.benefits.5"),
  ];

  const services = [
    {
      title: t("renovation.services.0.title"),
      description: t("renovation.services.0.description"),
    },
    {
      title: t("renovation.services.1.title"),
      description: t("renovation.services.1.description"),
    },
    {
      title: t("renovation.services.2.title"),
      description: t("renovation.services.2.description"),
    },
    {
      title: t("renovation.services.3.title"),
      description: t("renovation.services.3.description"),
    },
    {
      title: t("renovation.services.4.title"),
      description: t("renovation.services.4.description"),
    },
    {
      title: t("renovation.services.5.title"),
      description: t("renovation.services.5.description"),
    },
  ];

  const processSteps = [
    t("renovation.process.0"),
    t("renovation.process.1"),
    t("renovation.process.2"),
    t("renovation.process.3"),
    t("renovation.process.4"),
    t("renovation.process.5"),
    t("renovation.process.6"),
  ];

  const features = [
    t("renovation.features.0"),
    t("renovation.features.1"),
    t("renovation.features.2"),
    t("renovation.features.3"),
  ];

  return (
    <div
      className={`min-h-screen w-full transition-colors duration-300 ${
        darkMode ? "bg-[#367588]" : "bg-[#F8F4E3]"
      }`}
    >
      <div className="fixed top-0 left-0 w-full z-[100] bg-[#F8F4E3] dark:bg-[#367588] shadow-lg">
        <Header user={user} onLogout={onLogout} />
      </div>

      {/* Hero Section with Video Background */}
      <section
        className="relative w-screen h-screen flex items-center justify-center overflow-hidden m-0 p-0"
        style={{
          minHeight: "100vh",
          maxWidth: "100vw",
          background: darkMode ? COLOR_2 : COLOR_1,
        }}
      >
        <video
          autoPlay
          loop
          loading="lazy"
          muted
          playsInline
          className="absolute opacity-50 inset-0 w-full h-full object-cover z-0"
          style={{ minHeight: "100vh", minWidth: "100vw", objectFit: "cover" }}
        >
          <source src={renovation} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
          <h1
            className="font-bold text-center text-5xl mb-6"
            style={{ color: "#F8F4E3" }}
            data-aos="fade-down"
          >
            {t("renovation.hero.title")}
          </h1>
          <p
            className="max-w-2xl  mx-auto text-center text-lg"
            style={{ color: darkMode ? "#F8F4E3" : "#000000ff" }}
            data-aos="fade-up"
          >
            {t("renovation.hero.subtitle")}
          </p>
        </div>
      </section>

      {/* Benefits Section - Modern Grid Card Layout */}
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
              src={Photo}
              alt="Renovation and Restoration"
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
              {t("renovation.visionTitle")}
            </h3>
            <p
              className="text-lg max-w-md self-center"
              style={{ color: darkMode ? "#F8F4E3" : "#333333" }}
            >
              {t("renovation.visionSubtitle")}
            </p>
          </div>
          {/* Right: Modern Grid of Benefit Cards */}
          <div className="flex-1 w-full">
            <div className="mb-10 text-center md:text-left">
              <h2
                className="text-5xl font-bold mb-4"
                style={{ color: darkMode ? "#F8F4E3" : "#002346" }}
              >
                {t("renovation.benefitsTitle")}
              </h2>
              <p
                className="text-lg max-w-2xl mx-auto md:mx-0"
                style={{ color: darkMode ? "#F8F4E3" : "#333333" }}
              >
                {t("renovation.benefitsSubtitle")}
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

      {/* Services Section - Modern Vertical Stepper/Timeline */}
      <section
        className="w-full py-16 px-4 relative transition-colors duration-300"
        style={{ background: "#002346" }}
      >
        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="mb-12" data-aos="fade-up">
            <h2 className="text-5xl text-center font-bold text-white">
              {t("renovation.servicesTitle")}
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
                          style={{ color: darkMode ? COLOR_1 : "#333333" }}
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
                          style={{ color: darkMode ? COLOR_1 : "#333333" }}
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

      {/* How It Works Section - Vertical Stepper with Progress Bar */}
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
              {t("renovation.processTitle")}
            </h2>
            <p
              className={`text-lg mb-8 ${
                darkMode ? "text-[#AABF91]" : "text-[#333]"
              }`}
            >
              {t("renovation.processSubtitle")}
            </p>
          </div>
          {/* Vertical Stepper with Progress Bar */}
          <div className="relative w-full flex flex-col items-center">
            {/* Vertical progress bar */}

            {processSteps.map((step, idx, arr) => (
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
        style={{ background: "#002346" }}
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col space-y-8" data-aos="fade-right">
              <div>
                <h2
                  className="text-5xl font-bold mb-6"
                  style={{ color: "#F8F4E3" }}
                >
                  {t("renovation.featuresTitle")}
                </h2>
                <p className="text-xl mb-8" style={{ color: "#F8F4E3" }}>
                  {t("renovation.featuresSubtitle")}
                </p>
              </div>
              <div className="space-y-6">
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "#F8F4E3" }}
                >
                  {t("renovation.featuresDesc.0")}
                </p>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "#F8F4E3" }}
                >
                  {t("renovation.featuresDesc.1")}
                </p>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "#F8F4E3" }}
                >
                  {t("renovation.featuresDesc.2")}
                </p>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "#F8F4E3" }}
                >
                  {t("renovation.featuresDesc.3")}
                </p>
              </div>
            </div>
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
                    {t("renovation.featuresCardText", { feature })}
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
            {t("renovation.pricingTitle")}
          </h2>
          <p
            className="text-xl mb-12 max-w-2xl mx-auto"
            style={{ color: darkMode ? "#F8F4E3" : "#333333" }}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {t("renovation.pricingSubtitle")}
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
                  <span className="text-lg">{tier.priceNote}</span>
                </div>
                <ul className="text-left space-y-3 mb-6">
                  {tier.features.map((feat, j) => (
                    <li key={j}>{feat}</li>
                  ))}
                </ul>
                {tier.buttonText === t("renovation.pricing.0.buttonText") && (
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
                {tier.buttonText === t("renovation.pricing.1.buttonText") && (
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
                {tier.buttonText === t("renovation.pricing.2.buttonText") && (
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

export default RenovationRestoration;
