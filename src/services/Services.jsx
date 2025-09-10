/* eslint-disable no-unused-vars */
import React from "react";
import { useTranslation } from "react-i18next";
import {
  FaBriefcase,
  FaBuilding,
  FaCheckCircle,
  FaCogs,
  FaGlobe,
  FaHandshake,
  FaHome,
  FaIndustry,
  FaLightbulb,
  FaPalette,
  FaRegSmile,
  FaStar,
  FaUsers,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import commercialComplex from "../assets/commercialComplex.jpg";
import corporateSection from "../assets/corporateSection.jpg";
import familySection from "../assets/familySection.png";
import immigrationSection from "../assets/immigrationSection.jpg";
import industrialFacilities from "../assets/industrialFacilities.jpg";
import realestateSection from "../assets/realEstatePhoto.jpg";
import servicesHero from "../assets/servicesHero.mp4";
import whyChoose from "../assets/whyChoose.jpg";
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";
import { useDarkMode } from "../context/DarkModeContext";

const COLOR_1 = "#002346";
const COLOR_2 = "#F8F4E3";
const COLOR_3 = "#333333";

// Construction/architecture firm services (i18n-ready)
const getServiceData = (t) => [
  {
    id: "residential-projects",
    title: t("Residential Projects"),
    description: t(
      "End-to-end design and construction for homes, apartments, and villas, blending comfort with contemporary aesthetics.",
    ),
    icon: FaHome,
    highlights: [
      t("Architectural planning & design"),
      t("Custom interiors and renovations"),
      t("Eco-friendly home solutions"),
      t("Smart home integration"),
    ],
  },
  {
    id: "commercial-complexes",
    title: t("Commercial Complexes"),
    description: t(
      "Comprehensive solutions for offices, malls, retail spaces, and mixed-use developments built for business success.",
    ),
    icon: FaBriefcase,
    highlights: [
      t("Workplace planning and design"),
      t("Retail/office space remodeling"),
      t("Future-ready infrastructure"),
      t("Compliance & safety standards"),
    ],
  },
  {
    id: "industrial-facilities",
    title: t("Industrial Facilities"),
    description: t(
      "Specialized construction for factories, warehouses, and smart industrial spaces—with a focus on durability and scalability.",
    ),
    icon: FaIndustry,
    highlights: [
      t("Large-scale industrial design"),
      t("Energy & logistics optimization"),
      t("Safety and environment compliance"),
      t("Tailored project management"),
    ],
  },
  {
    id: "interior-design",
    title: t("Interior Design"),
    description: t(
      "Modern, functional interiors for residential, commercial, or hospitality spaces tailored to your vision and brand.",
    ),
    icon: FaUsers,
    highlights: [
      t("Space planning & layout"),
      t("Material & color consultation"),
      t("Furniture and lighting solutions"),
      t("Turnkey project execution"),
    ],
  },
  {
    id: "urban-planning",
    title: t("Urban Planning"),
    description: t(
      "Strategic master planning and urban design for sustainable, vibrant communities and smart cities.",
    ),
    icon: FaGlobe,
    highlights: [
      t("City/zone master plans"),
      t("Landscape & streetscape design"),
      t("Public realm improvements"),
      t("Sustainable urban policy"),
    ],
  },
  {
    id: "renovation-restoration",
    title: t("Renovation & Restoration"),
    description: t(
      "Bringing new life to historic, aged, or underutilized buildings through careful restoration and creative upgrades.",
    ),
    icon: FaBuilding,
    highlights: [
      t("Restoration & retrofitting"),
      t("Heritage conservation"),
      t("Modernization of old spaces"),
      t("Adaptive reuse projects"),
    ],
  },
];

const Services = ({ user, onLogout }) => {
  const { darkMode, setDarkMode } = useDarkMode();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const serviceData = getServiceData(t);

  return (
    <div
      className={`min-h-screen w-full transition-colors duration-300`}
      style={{ background: darkMode ? COLOR_1 : COLOR_2 }}
    >
      <div className="sticky top-0 z-50">
        <Header
          user={user}
          onLogout={onLogout}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
      </div>

      {/* 1. Hero Video/Intro */}
      <section
        className="w-full relative min-h-screen flex items-center justify-center text-center overflow-hidden"
        style={{ background: COLOR_1 }}
      >
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src={servicesHero}
          loading="lazy"
          autoPlay
          loop
          muted
          playsInline
        />
        <div
          className="relative z-10 w-full min-h-screen flex flex-col items-center justify-center"
          style={{ background: "rgba(51,51,51,0.5)" }}
        >
          <h1
            className="text-5xl font-extrabold mb-6 drop-shadow-lg"
            style={{ color: COLOR_2 }}
          >
            {t("Our Services")}
          </h1>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: COLOR_2 }}>
            {t(
              "Complete construction and architecture solutions for homes, businesses, and communities—delivered with vision, skill, and commitment.",
            )}
          </p>
        </div>
      </section>

      {/* 2. Our Expertise */}
      <section className="w-full py-16 px-4 md:px-6 max-w-7xl mx-auto">
        <h2
          className="text-4xl font-extrabold mb-12 text-center tracking-tight flex items-center justify-center gap-3"
          style={{ color: darkMode ? COLOR_1 : COLOR_3 }}
        >
          <FaCogs className="inline-block text-3xl" />
          {t("What We Do")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {serviceData.map(({ id, title, description, icon: Icon }) => (
            <Link
              key={id}
              to={`/services/${id}`}
              className="rounded-2xl shadow-xl p-8 flex flex-col items-center cursor-pointer hover:scale-105 transition-transform border-2"
              style={{
                background: darkMode
                  ? "linear-gradient(135deg, #232946 60%, #eebbc3 100%)"
                  : "linear-gradient(135deg, #F8F4E3 60%, #eebbc3 100%)",
                borderColor: darkMode ? "#eebbc3" : COLOR_1,
                color: darkMode ? "#eebbc3" : COLOR_1,
                minHeight: 320,
              }}
            >
              <Icon className="text-4xl mb-4 drop-shadow" />
              <h3 className="text-2xl font-bold mb-2 text-center">{title}</h3>
              <p
                className="text-base text-center mb-2"
                style={{ color: darkMode ? COLOR_2 : COLOR_3 }}
              >
                {description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* 3. Why Choose Us */}
      <section
        className="w-full py-20 px-2 sm:px-6 flex flex-col items-center justify-center relative overflow-hidden"
        style={{ background: darkMode ? COLOR_1 : COLOR_2 }}
      >
        {/* Glassmorphism background accent */}
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
        <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row gap-12 items-center relative z-10">
          {/* Left: Image */}
          <div className="flex-1 flex justify-center items-center mb-10 md:mb-0">
            <img
              src={whyChoose}
              alt={t("Why Choose Vision Builders")}
              className="rounded-3xl w-full max-w-md h-full object-cover shadow-2xl border-4"
              style={{ borderColor: "#eebbc3", maxHeight: 420 }}
            />
          </div>
          {/* Right: Feature Cards */}
          <div className="flex-1 flex flex-col gap-8">
            <h2
              className="text-4xl font-extrabold mb-6 flex items-center gap-3 tracking-tight"
              style={{ color: darkMode ? "#eebbc3" : COLOR_1 }}
            >
              <FaStar className="text-3xl" />
              {t("Why Choose Vision Builders")}
            </h2>
            <div className="flex flex-col gap-8">
              {/* Feature Card 1 */}
              <div className="flex flex-row items-center bg-white/70 dark:bg-[#232946]/70 backdrop-blur-md rounded-2xl shadow-xl p-6 border-l-8 border-[#eebbc3] hover:scale-[1.03] transition-transform">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#eebbc3]/30 mr-6">
                  <FaPalette
                    className="text-3xl"
                    style={{ color: "#eebbc3" }}
                  />
                </div>
                <div>
                  <div
                    className="font-bold text-xl mb-1"
                    style={{ color: darkMode ? "#eebbc3" : COLOR_1 }}
                  >
                    {t("Creative Design Process")}
                  </div>
                  <div
                    className="text-base"
                    style={{ color: darkMode ? COLOR_2 : COLOR_3 }}
                  >
                    {t(
                      "Our collaborative approach puts your vision at the center of inspired, functional designs.",
                    )}
                  </div>
                </div>
              </div>
              {/* Feature Card 2 */}
              <div className="flex flex-row items-center bg-white/70 dark:bg-[#232946]/70 backdrop-blur-md rounded-2xl shadow-xl p-6 border-l-8 border-[#eebbc3] hover:scale-[1.03] transition-transform">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#eebbc3]/30 mr-6">
                  <FaCheckCircle
                    className="text-3xl"
                    style={{ color: "#eebbc3" }}
                  />
                </div>
                <div>
                  <div
                    className="font-bold text-xl mb-1"
                    style={{ color: darkMode ? "#eebbc3" : COLOR_1 }}
                  >
                    {t("Quality Craftsmanship")}
                  </div>
                  <div
                    className="text-base"
                    style={{ color: darkMode ? COLOR_2 : COLOR_3 }}
                  >
                    {t(
                      "We build to last—combining cutting-edge methods, sustainable materials, and meticulous attention to detail.",
                    )}
                  </div>
                </div>
              </div>
              {/* Feature Card 3 */}
              <div className="flex flex-row items-center bg-white/70 dark:bg-[#232946]/70 backdrop-blur-md rounded-2xl shadow-xl p-6 border-l-8 border-[#eebbc3] hover:scale-[1.03] transition-transform">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#eebbc3]/30 mr-6">
                  <FaHandshake
                    className="text-3xl"
                    style={{ color: "#eebbc3" }}
                  />
                </div>
                <div>
                  <div
                    className="font-bold text-xl mb-1"
                    style={{ color: darkMode ? "#eebbc3" : COLOR_1 }}
                  >
                    {t("Personalized Service")}
                  </div>
                  <div
                    className="text-base"
                    style={{ color: darkMode ? COLOR_2 : COLOR_3 }}
                  >
                    {t(
                      "A dedicated project manager supports you at every step, ensuring complete transparency and satisfaction.",
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Service Highlights - Timeline Style */}
      <section className="w-full py-20 px-2 sm:px-6   mx-auto flex flex-col items-center">
        <h2
          className="text-4xl font-extrabold mb-16 text-center tracking-tight flex items-center justify-center gap-3"
          style={{ color: darkMode ? COLOR_1 : COLOR_3 }}
        >
          <FaLightbulb className="inline-block text-3xl animate-pulse" />
          {t("Our Expertise in Detail")}
        </h2>
        <div className="relative w-full flex flex-col items-center">
          {/* Timeline vertical line */}
          <div
            className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-[#eebbc3] to-transparent opacity-60 z-0"
            style={{ transform: "translateX(-50%)" }}
          />
          <div className="flex flex-col gap-16 w-full">
            {serviceData.map(({ id, title, highlights, icon: Icon }, idx) => {
              // Timeline side: alternate left/right on desktop, always full on mobile
              const isLeft = idx % 2 === 0;
              // Card background with glassmorphism and accent
              let bgImg = "";
              if (id === "residential-projects") bgImg = familySection;
              else if (id === "commercial-complexes") bgImg = corporateSection;
              else if (id === "industrial-facilities")
                bgImg = industrialFacilities;
              else if (id === "interior-design") bgImg = commercialComplex;
              else if (id === "urban-planning") bgImg = immigrationSection;
              else if (id === "renovation-restoration")
                bgImg = realestateSection;

              return (
                <div
                  key={id}
                  className={`relative flex flex-col md:flex-row items-center md:items-stretch gap-6 md:gap-0 w-full`}
                >
                  {/* Card */}
                  <div
                    className={`flex-1 max-w-2xl mx-auto md:mx-0 ${
                      isLeft ? "md:ml-auto md:mr-12" : "md:mr-auto md:ml-12"
                    } relative z-20`}
                  >
                    <div
                      className="rounded-3xl shadow-2xl p-8 md:p-10 mb-2 backdrop-blur-md border-l-8 border-[#eebbc3] bg-white/70 dark:bg-[#232946]/70 relative overflow-hidden group hover:scale-[1.03] transition-transform"
                      style={{
                        minHeight: 220,
                        color: darkMode ? COLOR_2 : COLOR_3,
                        boxShadow: darkMode
                          ? "0 8px 32px 0 #eebbc355"
                          : "0 8px 32px 0 #23294633",
                        borderColor: "#eebbc3",
                        backgroundImage: bgImg ? `url(${bgImg})` : undefined,
                        backgroundPosition: "right bottom",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                      }}
                    >
                      {/* Overlay for glass effect */}
                      <div
                        className="absolute inset-0 rounded-3xl pointer-events-none"
                        style={{
                          background: darkMode
                            ? "rgba(35,41,70,0.77)"
                            : "rgba(248,244,227,0.77)",
                          zIndex: 1,
                        }}
                      />
                      <div className="relative z-10 flex items-center gap-3 mb-3">
                        <Icon
                          className="text-3xl animate-spin-slow"
                          style={{ color: "#eebbc3" }}
                        />
                        <h3 className="text-2xl font-bold">{title}</h3>
                      </div>
                      <ul
                        className="list-disc ml-8 space-y-2 relative z-10"
                        style={{ color: darkMode ? COLOR_2 : COLOR_3 }}
                      >
                        {highlights.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  {/* Mobile icon above card */}
                  <div className="md:hidden flex items-center justify-center w-full mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#eebbc3] to-[#232946] flex items-center justify-center shadow-lg border-4 border-white dark:border-[#232946] animate-bounce">
                      <Icon
                        className="text-2xl"
                        style={{ color: darkMode ? "#eebbc3" : "#232946" }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Client Testimonials - Carousel Style */}
      <section
        className="w-full py-20 px-2 sm:px-6 flex flex-col items-center relative overflow-hidden"
        style={{ background: darkMode ? COLOR_1 : COLOR_2 }}
      >
        <h2
          className="text-4xl font-extrabold mb-14 text-center tracking-tight flex items-center justify-center gap-3"
          style={{ color: darkMode ? COLOR_2 : COLOR_1 }}
        >
          <FaRegSmile className="inline-block text-3xl animate-bounce" />
          {t("Client Success Stories")}
        </h2>
        <TestimonialCarousel
          t={t}
          darkMode={darkMode}
          COLOR_1={COLOR_1}
          COLOR_2={COLOR_2}
          COLOR_3={COLOR_3}
        />
      </section>

      {/* 6. Consultation CTA */}
      <section
        className="w-full py-20 flex justify-center items-center  overflow-hidden"
        style={{ background: darkMode ? COLOR_1 : COLOR_2 }}
      >
        <div className="w-full   mx-auto relative z-10 flex flex-col items-center text-center">
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
            <FaLightbulb
              className="text-5xl drop-shadow-lg justify-self-center mb-6"
              style={{ color: "#eebbc3" }}
            />
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
                "Contact Vision Builders today to schedule a consultation and start your journey to a remarkable space.",
              )}
            </p>
          </div>
          <button
            className="font-bold px-10 py-5 rounded-full shadow-xl border-2 border-[#eebbc3] bg-[#eebbc3] text-[#232946] text-lg sm:text-xl transition hover:scale-110 hover:bg-[#232946] hover:text-[#eebbc3] focus:outline-none focus:ring-4 focus:ring-[#eebbc3] -mt-[70px] relative z-20"
            style={{
              boxShadow: "0 4px 24px 0 #eebbc355",
              transition: "all 0.2s",
            }}
            onClick={() => navigate("/home2#consultation-form")}
          >
            {t("Book Consultation")}
          </button>
        </div>
      </section>

      <Footer darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
};

export default Services;

// Testimonial Carousel Component
function TestimonialCarousel({ t, darkMode, COLOR_1, COLOR_2, COLOR_3 }) {
  const testimonials = [
    {
      text: t(
        "Their team managed our residential renovation with incredible attention to detail and a personal touch at every step.",
      ),
      name: t("Emily Davis"),
      title: t("Homeowner, Mumbai"),
      img: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
      text: t(
        "We entrusted Vision Builders with our commercial plaza construction—the experience exceeded all our expectations!",
      ),
      name: t("John Harris"),
      title: t("Director, Blue Ocean Realty"),
      img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      text: t(
        "Vision Builders completely transformed our workspace—modern, vibrant, and perfect for our team. Seamless process and stellar results!",
      ),
      name: t("Sarah Thompson"),
      title: t("Project Director, UrbanHabitat Ltd."),
      img: "https://randomuser.me/api/portraits/women/44.jpg",
    },
  ];
  // Responsive: 1 testimonial per slide on mobile, 2 per slide on desktop
  const [isMobile, setIsMobile] = React.useState(false);
  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  let slides = [];
  const perSlide = isMobile ? 1 : 2;
  for (let i = 0; i < testimonials.length; i += perSlide) {
    slides.push(testimonials.slice(i, i + perSlide));
  }
  // If desktop and last slide has only one testimonial, add the first testimonial to it
  if (!isMobile && slides.length > 1 && slides[slides.length - 1].length === 1) {
    slides[slides.length - 1].push(testimonials[0]);
  }
  const [current, setCurrent] = React.useState(0);
  const total = slides.length;
  // Auto-advance every 7s
  React.useEffect(() => {
    const timer = setTimeout(() => setCurrent((c) => (c + 1) % total), 7000);
    return () => clearTimeout(timer);
  }, [current, total]);
  // Keyboard navigation
  React.useEffect(() => {
    const handler = (e) => {
      if (e.key === "ArrowLeft") setCurrent((c) => (c - 1 + total) % total);
      if (e.key === "ArrowRight") setCurrent((c) => (c + 1) % total);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [total]);
  return (
    <div className="w-full max-w-6xl flex flex-col items-center ">
      {/* Cards */}
      <div className="relative w-full min-h-[340px] flex items-center justify-center">
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className={` absolute left-0 top-0 w-full transition-all duration-700 ease-in-out ${
              idx === current
                ? "opacity-100 scale-100 z-20"
                : "opacity-0 scale-90 z-10 pointer-events-none"
            }`}
            aria-hidden={idx !== current}
          >
            <div className="flex flex-col md:flex-row gap-8 w-full h-full items-stretch justify-center">
              {slide.map((tst, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-3xl shadow-2xl p-8 flex flex-col items-center justify-between bg-white/70 dark:bg-[#232946]/70 border-2 border-[#eebbc3] backdrop-blur-md relative mb-8 md:mb-0"
                  style={{
                    color: darkMode ? COLOR_2 : COLOR_3,
                    boxShadow: darkMode
                      ? "0 8px 32px 0 #eebbc355"
                      : "0 8px 32px 0 #23294633",
                    borderColor: "#eebbc3",
                    background: darkMode ? "#232946" : "#fff",
                    minHeight: 280,
                    maxHeight: 340,
                  }}
                >
                  <img
                    src={tst.img}
                    alt={tst.name}
                    className="w-20 h-20 rounded-full border-4 border-[#eebbc3] shadow-lg mb-4 object-cover"
                    style={{ background: "#fff" }}
                  />
                  <div className="italic text-lg mb-6 text-center">
                    {tst.text}
                  </div>
                  <div className="flex flex-col items-center">
                    <div
                      className="font-bold text-lg mb-1"
                      style={{ color: darkMode ? COLOR_2 : COLOR_1 }}
                    >
                      {tst.name}
                    </div>
                    <div
                      className="text-xs"
                      style={{
                        color: darkMode ? COLOR_2 : COLOR_3,
                        opacity: 0.7,
                      }}
                    >
                      {tst.title}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* Navigation arrows */}
      <div className="flex items-center justify-center gap-8 mt-6">
        <button
          aria-label="Previous testimonial slide"
          className="w-10 h-10 rounded-full bg-gradient-to-br from-[#eebbc3] to-[#232946] flex items-center justify-center shadow border-2 border-[#eebbc3] text-xl text-[#232946] dark:text-[#eebbc3] hover:scale-110 transition"
          onClick={() => setCurrent((current - 1 + total) % total)}
          tabIndex={0}
        >
          &#8592;
        </button>
        <button
          aria-label="Next testimonial slide"
          className="w-10 h-10 rounded-full bg-gradient-to-br from-[#eebbc3] to-[#232946] flex items-center justify-center shadow border-2 border-[#eebbc3] text-xl text-[#232946] dark:text-[#eebbc3] hover:scale-110 transition"
          onClick={() => setCurrent((current + 1) % total)}
          tabIndex={0}
        >
          &#8594;
        </button>
      </div>
      {/* Dots */}
      <div className="flex items-center justify-center gap-2 mt-4">
        {slides.map((_, idx) => (
          <button
            key={idx}
            aria-label={`Go to testimonial slide ${idx + 1}`}
            className={`w-3 h-3 rounded-full border-2 border-[#eebbc3] transition ${
              idx === current ? "bg-[#eebbc3]" : "bg-transparent"
            }`}
            onClick={() => setCurrent(idx)}
            tabIndex={0}
          />
        ))}
      </div>
    </div>
  );
}
