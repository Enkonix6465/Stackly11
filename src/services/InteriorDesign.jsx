import AOS from "aos";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";
import { useDarkMode } from "../context/DarkModeContext.jsx";

import interiorDesignPhoto from "../assets/interiorDesign.jpg";
import interiorHero from "../assets/interiorHero.mp4";

const COLOR_1 = "#002346"; // deep blue
const COLOR_2 = "#F8F4E3"; // off-white
const COLOR_3 = "#333333";

const InteriorDesign = ({ user, onLogout }) => {
  const { darkMode, setDarkMode } = useDarkMode();
  const navigate = useNavigate(); // Prevent horizontal scroll on the whole page
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
  }, []); // Interior Design content

  const { t } = useTranslation();

  const benefits = [
    t("interior.benefit1"),
    t("interior.benefit2"),
    t("interior.benefit3"),
    t("interior.benefit4"),
    t("interior.benefit5"),
    t("interior.benefit6"),
  ];

  const services = [
    {
      title: t("interior.service1.title"),
      description: t("interior.service1.desc"),
    },
    {
      title: t("interior.service2.title"),
      description: t("interior.service2.desc"),
    },
    {
      title: t("interior.service3.title"),
      description: t("interior.service3.desc"),
    },
    {
      title: t("interior.service4.title"),
      description: t("interior.service4.desc"),
    },
    {
      title: t("interior.service5.title"),
      description: t("interior.service5.desc"),
    },
    {
      title: t("interior.service6.title"),
      description: t("interior.service6.desc"),
    },
  ];

  const features = [
    t("interior.feature1"),
    t("interior.feature2"),
    t("interior.feature3"),
    t("interior.feature4"),
  ];

  const pricingTiers = [
    {
      title: t("interior.pricing1.title"),
      price: "$399",
      priceNote: t("interior.pricing1.priceNote"),
      features: [
        t("interior.pricing1.feature1"),
        t("interior.pricing1.feature2"),
        t("interior.pricing1.feature3"),
        t("interior.pricing1.feature4"),
        t("interior.pricing1.feature5"),
        t("interior.pricing1.feature6"),
      ],
      buttonText: t("interior.pricing1.button"),
      buttonClass:
        "w-full bg-[#002346] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#B57560] transition-colors duration-300 transform hover:scale-105",
      boxStyle: { background: "#F8F4E3", color: "#002346" },
      className:
        "rounded-2xl p-6 border-2 border-[#002346] hover:border-[#333333] transition-all duration-300",
    },
    {
      title: t("interior.pricing2.title"),
      price: "$1,999",
      priceNote: t("interior.pricing2.priceNote"),
      features: [
        t("interior.pricing2.feature1"),
        t("interior.pricing2.feature2"),
        t("interior.pricing2.feature3"),
        t("interior.pricing2.feature4"),
        t("interior.pricing2.feature5"),
      ],
      buttonText: t("interior.pricing2.button"),
      buttonClass:
        "w-full bg-[#AABF91] text-[#002346] font-semibold py-3 px-6 rounded-lg hover:bg-[#B57560] hover:text-white transition-colors duration-300 transform hover:scale-105",
      badge: t("interior.pricing2.badge"),
      boxStyle: { background: "#002346", color: "#F8F4E3" },
      className: "rounded-2xl p-6 border-2 border-[#002346] scale-105",
    },
    {
      title: t("interior.pricing3.title"),
      price: "$4,999",
      priceNote: t("interior.pricing3.priceNote"),
      features: [
        t("interior.pricing3.feature1"),
        t("interior.pricing3.feature2"),
        t("interior.pricing3.feature3"),
        t("interior.pricing3.feature4"),
        t("interior.pricing3.feature5"),
        t("interior.pricing3.feature6"),
      ],
      buttonText: t("interior.pricing3.button"),
      buttonClass:
        "w-full bg-[#002346] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#B57560] transition-colors duration-300 transform hover:scale-105",
      boxStyle: { background: "#F8F4E3", color: "#002346" },
      className:
        "rounded-2xl p-6 border-2 border-[#002346] hover:border-[#333333] transition-all duration-300",
    },
  ];

  return (
    <div
      className={`min-h-screen w-full transition-colors duration-300 ${
        darkMode ? "bg-[#002346]" : "bg-[#F8F4E3]"
      }`}
    >
      <div className="sticky top-0 z-50">
        <div className="fixed top-0 left-0 w-full z-[100] bg-[#F8F4E3] dark:bg-[#002346] shadow-lg">
          <Header user={user} onLogout={onLogout} />
        </div>
      </div>
      {/* Hero Section */}
      <section
        className="relative w-screen h-screen flex items-center justify-center overflow-hidden m-0 p-0"
        style={{
          minHeight: "100vh",
          maxWidth: "100vw",
          background: darkMode ? "#002346" : "#F8F4E3",
        }}
      >
        <video
          autoPlay
          loop
          loading="lazy"
          muted
          playsInline
          className="absolute  opacity-50 inset-0 w-full h-full object-cover z-0"
          style={{ minHeight: "100vh", minWidth: "100vw", objectFit: "cover" }}
        >
          <source src={interiorHero} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
          <h1
            className="font-bold text-5xl mb-6"
            style={{ color: "#002346", textShadow: "0 2px 8px #F8F4E3" }}
            data-aos="fade-down"
          >
            {t("interior.heroTitle")}
          </h1>

          <p
            className="max-w-2xl text-center mx-auto text-lg"
            style={{ color: "#333333", textShadow: "0 2px 8px #F8F4E3" }}
            data-aos="fade-up"
          >
            {t("interior.heroSubtitle")}
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
              src={interiorDesignPhoto}
              alt="Interior Design"
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
              {t("interior.benefitsImageTitle")}
            </h3>
            <p
              className="text-lg max-w-md self-center"
              style={{ color: darkMode ? "#F8F4E3" : "#333333" }}
            >
              {t("interior.benefitsImageSubtitle")}
            </p>
          </div>
          {/* Right: Modern Grid of Benefit Cards */}
          <div className="flex-1 w-full">
            <div className="mb-10 text-center md:text-left">
              <h2
                className="text-5xl font-bold mb-4"
                style={{ color: darkMode ? "#F8F4E3" : "#002346" }}
              >
                {t("interior.benefitsTitle")}
              </h2>
              <p
                className="text-lg max-w-2xl mx-auto md:mx-0"
                style={{ color: darkMode ? "#F8F4E3" : "#333333" }}
              >
                {t("interior.benefitsSubtitle")}
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
              {t("interior.servicesTitle")}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                style={{ backgroundColor: "#F8F4E3", color: "#333333" }}
                className="rounded-2xl p-6 shadow-lg transform transition-all duration-300 hover:scale-105"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                data-aos-once="false"
              >
                <div className="mb-4">
                  <span
                    className="text-2xl font-bold"
                    style={{ color: "#002346" }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="text-xl text-[#002346] font-bold mb-4">
                  {service.title}
                </h3>

                <p className="text-base">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* How It Works Section */}
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
              {t("interior.processTitle")}
            </h2>
            <p
              className={`text-lg mb-8 ${darkMode ? "text-[#AABF91]" : "text-[#333]"}`}
            >
              {t("interior.processSubtitle")}
            </p>
          </div>
          {/* Vertical Stepper with Progress Bar */}
          <div className="relative w-full flex flex-col items-center">
            {[
              t("interior.processStep1"),
              t("interior.processStep2"),
              t("interior.processStep3"),
              t("interior.processStep4"),
              t("interior.processStep5"),
              t("interior.processStep6"),
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
                  {t("interior.featuresTitle")}
                </h2>
                <p className="text-xl mb-8" style={{ color: "#F8F4E3" }}>
                  {t("interior.featuresSubtitle")}
                </p>
              </div>

              <div className="space-y-6">
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "#F8F4E3" }}
                >
                  {t("interior.featuresPara1")}
                </p>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "#F8F4E3" }}
                >
                  {t("interior.featuresPara2")}
                </p>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "#F8F4E3" }}
                >
                  {t("interior.featuresPara3")}
                </p>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "#F8F4E3" }}
                >
                  {t("interior.featuresPara4")}
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
                    {t("interior.featureBenefit", { feature })}
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
            {t("interior.pricingTitle")}
          </h2>
          <p
            className="text-xl mb-12 max-w-2xl mx-auto"
            style={{ color: darkMode ? "#F8F4E3" : "#333333" }}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {t("interior.pricingSubtitle")}
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

                {tier.buttonText === t("interior.pricing1.button") && (
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
                {tier.buttonText === t("interior.pricing2.button") && (
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
                {tier.buttonText === t("interior.pricing3.button") && (
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

export default InteriorDesign;
