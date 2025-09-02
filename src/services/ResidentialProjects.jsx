import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header.jsx";
import { useDarkMode } from "../context/DarkModeContext.jsx";
import Footer from "../components/Footer.jsx";
import AOS from "aos";
import { useTranslation } from "react-i18next";
import {
  FaHome,
  FaPalette,
  FaLeaf,
  FaCogs,
  FaRegSmile,
  FaCheckCircle,
  FaLightbulb,
  FaPhoneAlt,
  FaUserTie,
  FaChartLine,
} from "react-icons/fa";
import family from "../assets/residentialHero.mp4";
// import residentialService from "../assets/residentialService.png";

const COLOR_1 = "#002346"; // deep blue
const COLOR_2 = "#F8F4E3"; // off-white
const COLOR_3 = "#333333"; // dark gray

const ResidentialProjects = ({ user, onLogout }) => {
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

  // i18n-ready content (arrays must be inside the render to update on language change)
  const benefits = [
    "Custom-tailored designs meeting your unique residential needs",
    "Seamless project management ensuring timely delivery",
    "Use of sustainable materials and eco-friendly methods",
    "Transparent budget handling and cost-effective solutions",
    "Expert craftsmanship focused on quality and durability",
    "Dedicated support through every stage of construction",
  ].map((key) => t(key));

  const services = [
    {
      title: t("Residential Projects"),
      description: t(
        "From cozy single-family homes to expansive luxury estates, creating living spaces that inspire and endure.",
      ),
      icon: FaHome,
    },
    {
      title: t("Interior Design"),
      description: t(
        "Crafting interiors that harmonize beauty and functionality to make every house a home.",
      ),
      icon: FaPalette,
    },
    {
      title: t("Renovation & Restoration"),
      description: t(
        "Enhancing and preserving your current home with thoughtful upgrades and restorations.",
      ),
      icon: FaLeaf,
    },
    {
      title: t("Landscape Design"),
      description: t(
        "Transforming outdoor spaces into beautiful, functional environments tailored to your lifestyle.",
      ),
      icon: FaCogs,
    },
    {
      title: t("Smart Home Integration"),
      description: t(
        "Upgrading homes with the latest smart technologies for convenience, security, and energy efficiency.",
      ),
      icon: FaRegSmile,
    },
    {
      title: t("Home Extensions"),
      description: t(
        "Expanding your living space with seamless additions that blend perfectly with your existing home.",
      ),
      icon: FaCheckCircle,
    },
  ];

  const features = [
    "Regular project status updates",
    "Personalized communication with your project manager",
    "Access to design reviews and materials through our client portal",
    "Focus on client satisfaction and finishing details",
  ].map((key) => t(key));

  const pricingTiers = [
    {
      title: t("Initial Consultation"),
      price: "$150",
      priceNote: "/hour",
      features: [
        "Discuss your vision and requirements",
        "Preliminary feasibility and site assessment",
        "Estimate project scope and budget",
        "Outline next steps and project timeline",
        "Follow-up consultation to finalize details",
        "No obligation to proceed with the project",
      ].map((key) => t(key)),
      buttonText: t("Book Consultation"),
      badge: null,
    },
    {
      title: t("Design & Planning"),
      price: "$3,000",
      priceNote: "/project",
      features: [
        "Architectural design and layout plans",
        "Interior concept development",
        "Permitting assistance and approvals",
        "Regular client design consultations",
        "Detailed project timeline",
        "Final design package with specifications",
      ].map((key) => t(key)),
      buttonText: t("Contact Us"),
      badge: t("MOST POPULAR"),
    },
    {
      title: t("Full Construction"),
      price: t("Starting at $50,000"),
      priceNote: "/project",
      features: [
        "Complete construction management and execution",
        "High-quality materials and craftsmanship",
        "On-site supervision and quality assurance",
        "Post-construction walkthrough and support",
      ].map((key) => t(key)),
      buttonText: t("Start Now"),
      badge: null,
    },
  ];

  // Color palette matching the page's scheme for cubes
  const cubeColors = darkMode
    ? ["#F8F4E3", "#AABF91", "#F8F4E3", "#AABF91", "#F8F4E3", "#AABF91"] // off-white and muted green shades for dark
    : ["#002346", "#B57560", "#002346", "#B57560", "#002346", "#B57560"]; // deep blue + sepia accent for light mode

  return (
    <div
      className={`min-h-screen w-full transition-colors duration-300`}
      style={{ background: darkMode ? COLOR_1 : COLOR_2 }}
    >
      <div className="sticky top-0 z-50">
        <div
          className="fixed top-0 left-0 w-full z-[100]"
          style={{
            background: darkMode ? COLOR_3 : COLOR_2,
            boxShadow: "0 2px 8px 0 rgba(51,51,51,0.08)",
          }}
        >
          <Header user={user} onLogout={onLogout} />
        </div>
      </div>

      {/* Hero Section - Modernized */}
      <section
        className="relative w-screen h-[100vh] min-h-[480px] flex items-center justify-center overflow-hidden m-0 p-0"
        style={{ maxWidth: "100vw", background: COLOR_1 }}
      >
        <video
          autoPlay
          loop
          loading="lazy"
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
          style={{ minHeight: "100%", minWidth: "100vw", objectFit: "cover" }}
        >
          <source src={family} type="video/mp4" />
          {t("Your browser does not support the video tag.")}
        </video>
        {/* Glassmorphism overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#23294699] to-[#eebbc399] z-0" />
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
          <h1
            className="font-extrabold text-5xl mb-6 drop-shadow-lg text-center tracking-tight"
            style={{ color: COLOR_2 }}
            data-aos="fade-down"
          >
            {t("Residential Projects Experts")}
          </h1>
          <p
            className="max-w-2xl mx-auto text-xl drop-shadow-lg text-center"
            style={{ color: COLOR_2 }}
            data-aos="fade-up"
          >
            {t("Building homes that reflect your vision and lifestyle.")}
          </p>
        </div>
      </section>

      {/* Benefits Section - Modernized with Glassmorphism */}
      <section
        id="key-benefits"
        className="w-full py-20 px-4 relative bg-gradient-to-br from-[#eebbc3]/30 to-[#aabf91]/10"
        style={{ overflow: "hidden" }}
        data-aos="fade-up"
      >
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <FaLightbulb className="inline-block text-3xl animate-pulse mr-2" />
          <h2
            className="text-5xl font-extrabold mb-2 text-center"
            style={{ color: darkMode ? "#eebbc3" : COLOR_1 }}
          >
            {t("Why Choose Our Residential Services")}
          </h2>
          <p
            className="text-lg mb-12 text-center"
            style={{ color: darkMode ? COLOR_2 : COLOR_3 }}
          >
            {t(
              "Trusted partner delivering personalized and quality residential constructions.",
            )}
          </p>
          {/* Vertical Timeline for Benefits */}
          <div className="relative w-full">
            <div
              className="absolute left-1/2 top-0 bottom-0 w-1 bg-[#eebbc3] opacity-40 -translate-x-1/2"
              aria-hidden="true"
            />
            <ol className="flex flex-col gap-12 w-full z-10 relative">
              {benefits.map((b, idx) => (
                <li
                  key={idx}
                  className={`flex items-center w-full relative ${
                    idx % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                  tabIndex={0}
                  aria-label={`Benefit ${idx + 1}: ${b}`}
                >
                  <div className="flex-1 flex justify-end px-4">
                    <div className="w-0 md:w-24" />
                  </div>
                  <div className="flex flex-col items-center z-10">
                    <div
                      className={`flex items-center justify-center w-16 h-16 rounded-full shadow-lg mb-3 transition-transform duration-300 bg-white/80 dark:bg-[#232946]/80 border-2 border-[#eebbc3] animate-fadeInUp`}
                      style={{ color: darkMode ? COLOR_1 : COLOR_3 }}
                    >
                      <FaCheckCircle
                        className="text-3xl"
                        style={{ color: "#eebbc3" }}
                      />
                    </div>
                    <span
                      className="font-bold text-xl text-center px-2 mb-2"
                      style={{ color: darkMode ? "#eebbc3" : COLOR_1 }}
                    >
                      {b}
                    </span>
                  </div>
                  <div className="flex-1 flex justify-start px-4">
                    <div className="w-0 md:w-24" />
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
        <style>{`
          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(40px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeInUp {
            animation: fadeInUp 0.8s cubic-bezier(0.23, 1, 0.32, 1);
          }
        `}</style>
      </section>

      {/* Services Section - Modern Card Grid with Icons */}
      <section
        className="w-full py-20 px-4 relative transition-colors duration-300"
        style={{ background: COLOR_1 }}
      >
        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="mb-12 text-center">
            <FaPalette className="inline-block text-3xl" />
            <h2 className="text-5xl font-extrabold text-white mb-4 tracking-tight flex items-center justify-center gap-3">
              {t("Our Residential Services")}
            </h2>
            <p className="text-lg max-w-2xl mx-auto text-white/80">
              {t("Explore our full range of residential solutions.")}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <div
                key={index}
                className="rounded-3xl shadow-xl p-8 flex flex-col items-center bg-white/80 dark:bg-[#232946]/80 border-2 border-[#eebbc3] backdrop-blur-md hover:scale-105 transition-transform"
                style={{ color: darkMode ? COLOR_2 : COLOR_3, minHeight: 220 }}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <service.icon
                  className="text-4xl mb-4 drop-shadow"
                  style={{ color: "#eebbc3" }}
                />
                <h3
                  className="text-2xl font-bold mb-2 text-center"
                  style={{ color: darkMode ? "#eebbc3" : COLOR_1 }}
                >
                  {service.title}
                </h3>
                <p className="text-base text-center">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Section (Residential projects context) - i18n ready */}
      <section
        className={`w-full py-20 px-4 relative`}
        style={{ background: darkMode ? COLOR_1 : COLOR_2, overflow: "hidden" }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
          {/* Text Side */}
          <div className="flex-1 md:pr-12 mb-10 md:mb-0">
            <h2
              className="text-5xl font-extrabold mb-2"
              style={{ color: darkMode ? COLOR_2 : COLOR_1, letterSpacing: -2 }}
            >
              {t("HOW WE WORK")}
            </h2>
            <p
              className={`text-lg mb-8 ${
                darkMode ? "text-[#AABF91]" : "text-[#333]"
              }`}
            >
              {t("Our residential project process")}
            </p>
            <ul
              className={`list-disc pl-6 space-y-4 text-base ${
                darkMode ? "text-[#AABF91]" : "text-[#333]"
              }`}
            >
              <li>{t("Personalized consultation and vision assessment.")}</li>
              <li>{t("Site analysis and feasibility planning.")}</li>
              <li>{t("Custom architectural design development.")}</li>
              <li>{t("Permitting and regulatory compliance management.")}</li>
              <li>{t("Construction and quality assurance.")}</li>
              <li>{t("Regular updates and collaborative client feedback.")}</li>
              <li>{t("Final walkthrough and post-completion support.")}</li>
            </ul>
          </div>

          {/* Animated Cubes Side */}
          <div className="flex-1 flex justify-center relative min-h-[480px] w-full md:w-auto">
            {/* Decorative arcs on large screens only */}
            <div className="hidden md:block absolute left-0 right-0 top-0 bottom-0 pointer-events-none">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="absolute right-6"
                  style={{
                    top: 100 + 60 * i,
                    width: 300 + i * 80,
                    height: 80 + i * 40,
                    border: "1.5px dashed #B57560",
                    borderRadius: "45%",
                    zIndex: 1,
                    mixBlendMode: darkMode ? "screen" : "normal",
                  }}
                />
              ))}
            </div>

            {/* Cubes container */}
            <div
              className="z-10 flex flex-col items-end ml-auto space-y-6 w-[290px] sm:w-[320px] md:w-[340px] lg:w-[360px]"
              style={{ perspective: "1200px" }}
            >
              {/* Cubes with color scheme consistent with page */}
              {[
                { color: cubeColors[0], label: t("Brief") },
                { color: cubeColors[1], label: t("Research") },
                { color: cubeColors[2], label: t("Sketch") },
                { color: cubeColors[3], label: t("Design") },
                { color: cubeColors[4], label: t("Present") },
                { color: cubeColors[5], label: t("Revise") },
              ].map((step, i) => (
                <div
                  key={step.label}
                  className="relative flex items-center rounded-xl shadow-xl"
                  style={{
                    width: "100%",
                    height: "65px",
                    background: step.color,
                    borderRadius: "12px",
                    boxShadow: `0 10px 20px -5px rgba(0,0,0,0.3)`,
                    transformOrigin: "center",
                    animation: `floatUpDown 3s ease-in-out ${
                      i * 0.25
                    }s infinite`,
                    cursor: "default",
                    userSelect: "none",
                    color: darkMode ? COLOR_1 : COLOR_2,
                    fontWeight: "700",
                    fontSize: "1.3rem",
                    paddingLeft: "32px",
                    letterSpacing: "0.05em",
                  }}
                  tabIndex={0} // for keyboard focus, accessibility
                  aria-label={`Step ${i + 1}: ${step.label}`}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform =
                      "translateY(-10px) rotateX(5deg) rotateY(7deg)")
                  }
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "")}
                >
                  {step.label}
                  {/* Subtle glow */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: "8px",
                      left: "10%",
                      width: "80%",
                      height: "6px",
                      backgroundColor: "rgba(0,0,0,0.15)",
                      filter: "blur(8px)",
                      borderRadius: "5px",
                      pointerEvents: "none",
                      zIndex: 0,
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <style>{`
          @keyframes floatUpDown {
            0%, 100% { transform: translateY(0) }
            50% { transform: translateY(-10px) }
          }
          @media (max-width: 768px) {
            .z-10.flex.flex-col.items-end.ml-auto.space-y-6 {
              width: 100% !important;
              align-items: center !important;
            }
          }
        `}</style>
      </section>

      {/* Features Section - Modernized */}
      <section
        className="w-full py-20 px-4 transition-colors duration-300 relative overflow-hidden"
        style={{ background: COLOR_1 }}
      >
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col space-y-8" data-aos="fade-right">
              <div>
                <FaUserTie className="text-3xl" />
                <h2
                  className="text-5xl font-extrabold mb-6 flex items-center gap-3"
                  style={{ color: COLOR_2 }}
                >
                  {t("Our Client Features")}
                </h2>
                <p className="text-xl mb-8" style={{ color: COLOR_2 }}>
                  {t("Always putting your project’s success first.")}
                </p>
              </div>
              <div className="space-y-6">
                <p
                  className="text-base leading-relaxed"
                  style={{ color: COLOR_2 }}
                >
                  {t(
                    "We treat every project with precision, care, and personal attention.",
                  )}
                </p>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: COLOR_2 }}
                >
                  {t(
                    "Access to resources and expert consultants throughout your project.",
                  )}
                </p>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: COLOR_2 }}
                >
                  {t(
                    "Client portal provides 24/7 access to design and construction updates.",
                  )}
                </p>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: COLOR_2 }}
                >
                  {t(
                    "Expect reliability, transparency, and constant communication at every stage.",
                  )}
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
                  className="p-8 rounded-3xl shadow-xl bg-white/80 dark:bg-[#232946]/80 border-2 border-[#eebbc3] backdrop-blur-md hover:scale-105 transition-transform flex flex-col items-center"
                  style={{
                    color: darkMode ? COLOR_2 : COLOR_3,
                    minHeight: 160,
                  }}
                >
                  <FaChartLine
                    className="text-3xl mb-3"
                    style={{ color: "#eebbc3" }}
                  />
                  <h3 className="text-xl font-bold mb-2 text-center">
                    {feature}
                  </h3>
                  <p className="text-base text-center">
                    {t("Benefit from this as our client.")}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA/Pricing Section - Modern Glassmorphism */}
      <section
        id="pricing-section"
        className="w-full py-20 px-4 transition-colors duration-300 relative overflow-hidden"
        style={{ backgroundColor: darkMode ? COLOR_1 : COLOR_2 }}
      >
        {/* Gradient background accent */}
        <div
          className="absolute -top-24 -left-24 w-96 h-96 rounded-full opacity-30 blur-2xl z-0"
          style={{
            background: darkMode
              ? "radial-gradient(circle at 30% 30%, #eebbc3 0%, #232946 100%)"
              : "radial-gradient(circle at 30% 30%, #232946 0%, #eebbc3 100%)",
          }}
        />
        <div
          className="absolute -bottom-32 -right-32 w-[30rem] h-[30rem] rounded-full opacity-20 blur-3xl z-0"
          style={{
            background: darkMode
              ? "radial-gradient(circle at 70% 70%, #eebbc3 0%, #232946 100%)"
              : "radial-gradient(circle at 70% 70%, #eebbc3 0%, #232946 100%)",
          }}
        />
        <div className="max-w-6xl mx-auto text-center w-full relative z-10">
          <h2
            className="text-5xl font-extrabold mb-4 tracking-tight flex items-center justify-center gap-3"
            style={{ color: darkMode ? "#eebbc3" : COLOR_1 }}
          >
            <FaPhoneAlt className="inline-block text-3xl animate-bounce" />
            {t("Secure Peace of Mind for Your Project")}
          </h2>
          <p
            className="text-xl mb-12 max-w-2xl mx-auto"
            style={{ color: darkMode ? COLOR_2 : COLOR_3 }}
          >
            {t(
              "Find clarity, support, and expert solutions—every step of the way.",
            )}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
            {pricingTiers.map((tier, i) => (
              <div
                key={i}
                className="rounded-3xl shadow-xl p-8 flex flex-col items-center bg-white/80 dark:bg-[#232946]/80 border-2 border-[#eebbc3] backdrop-blur-md hover:scale-105 transition-transform"
                style={{ color: darkMode ? COLOR_2 : COLOR_3, minHeight: 320 }}
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                {tier.badge && (
                  <div className="bg-white text-[#002346] text-sm font-bold px-3 py-1 rounded-full inline-block mb-4 animate-pulse">
                    {tier.badge}
                  </div>
                )}
                <h3
                  className="text-2xl font-bold mb-2 text-center"
                  style={{ color: darkMode ? "#eebbc3" : COLOR_1 }}
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
                {tier.buttonText === t("Book Consultation") && (
                  <button
                    className="w-full font-semibold py-3 px-6 rounded-lg transition-colors duration-300 bg-[#eebbc3] text-[#232946] border-2 border-[#eebbc3] hover:bg-[#232946] hover:text-[#eebbc3] focus:outline-none focus:ring-4 focus:ring-[#eebbc3]"
                    onClick={() => navigate("/home2#consultation-form")}
                  >
                    {tier.buttonText}
                  </button>
                )}
                {tier.buttonText === t("Contact Us") && (
                  <button
                    className="w-full font-semibold py-3 px-6 rounded-lg transition-colors duration-300 bg-[#eebbc3] text-[#232946] border-2 border-[#eebbc3] hover:bg-[#232946] hover:text-[#eebbc3] focus:outline-none focus:ring-4 focus:ring-[#eebbc3]"
                    onClick={() => navigate("/contact")}
                  >
                    {tier.buttonText}
                  </button>
                )}
                {tier.buttonText === t("Start Now") && (
                  <button
                    className="w-full font-semibold py-3 px-6 rounded-lg transition-colors duration-300 bg-[#eebbc3] text-[#232946] border-2 border-[#eebbc3] hover:bg-[#232946] hover:text-[#eebbc3] focus:outline-none focus:ring-4 focus:ring-[#eebbc3]"
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

export default ResidentialProjects;
