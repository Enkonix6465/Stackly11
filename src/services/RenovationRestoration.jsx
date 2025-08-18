import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Header from "../components/Header.jsx";
import { useDarkMode } from "../context/DarkModeContext.jsx";
import Footer from "../components/Footer.jsx";
import AOS from "aos";
import {
  UserIcon,
  DocumentDuplicateIcon,
  ClipboardDocumentCheckIcon,
  PaperAirplaneIcon,
  BriefcaseIcon,
  SparklesIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/solid";

import renovation from '../assets/renovationHero.mp4';
import Photo from '../assets/restoration.jpg';

const COLOR_1 = '#002346'; // deep blue
const COLOR_2 = '#F8F4E3'; // off-white
const COLOR_3 = '#333333';

const RenovationRestoration = ({ user, onLogout }) => {
  const { darkMode, setDarkMode } = useDarkMode();
  const navigate = useNavigate();
  // Prevent horizontal scroll on the whole page
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = 'html, body { overflow-x: hidden !important; }';
    document.head.appendChild(style);
    return () => { document.head.removeChild(style); };
  }, []);
  const scrollToBenefits = () => {
    const benefitsSection = document.getElementById("key-benefits");
    if (benefitsSection) benefitsSection.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToPricing = () => {
    const pricingSection = document.getElementById("pricing-section");
    if (pricingSection) pricingSection.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Renovation and restoration-specific content
  // Pricing tiers for the final CTA/Pricing Section
  const pricingTiers = [
    {
      title: "Comprehensive Renovation",
      price: "$25,000+",
      priceNote: "/project",
      features: [
        "Full-scale interior and exterior overhauls",
        "Unlimited design consultations",
        "Structural and systems upgrades",
        "Regular progress reports and on-site access",
        "Subject to project scope",
      ],
      buttonText: "Request a Quote",
      buttonClass:
        "w-full bg-[#002346] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#B57560] transition-colors duration-300 transform hover:scale-105",
      boxStyle: { background: "#AABF91", color: "#002346" },
      className:
        "rounded-2xl p-6 border-2 border-[#B57560] hover:border-[#002346] transition-all duration-300",
    },{
      title: "Historic Restoration",
      price: "$15,000+",
      priceNote: "/project (initial)",
      features: [
        "Preservation of original architecture",
        "Expert material and finish matching",
        "Historical research and documentation",
        "Compliance with heritage preservation standards",
        "Initial assessment and detailed project plan",
      ],
      buttonText: "Contact Us",
      buttonClass:
        "w-full bg-[#AABF91] text-[#002346] font-semibold py-3 px-6 rounded-lg hover:bg-[#B57560] hover:text-white transition-colors duration-300 transform hover:scale-105",
      badge: "SPECIALTY SERVICE",
      boxStyle: { background: "#002346", color: "#AABF91" },
      className: "rounded-2xl p-6 border-2 border-[#AABF91] scale-105",
    },
    {
      title: "Targeted Upgrade",
      price: "By Quote",
      priceNote: "",
      features: [
        "Kitchen or bathroom remodeling",
        "Single-room transformations",
        "Specific structural or cosmetic repairs",
        "Custom carpentry and finishes",
        "Initial consultation and design proposal",
        "Project management and execution",
        "Post-project support and maintenance guidance",
      ],
      buttonText: "Schedule a Consultation",
      buttonClass:
        "w-full bg-[#002346] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#B57560] transition-colors duration-300 transform hover:scale-105",
      boxStyle: { background: "#AABF91", color: "#002346" },
      className:
        "rounded-2xl p-6 border-2 border-[#B57560] hover:border-[#002346] transition-all duration-300",
    }
    // Add more pricing tiers here if needed
  ];
  const benefits = [
    "Expertise in modern and historic techniques",
    "Detailed planning to avoid surprises",
    "Seamless project management from start to finish",
    "Preservation of architectural integrity",
    "Enhanced property value and functionality",
    "Craftsmanship and attention to detail",
  ];

  const services = [
    {
      title: "Residential Remodeling",
      description:
        "Revitalizing homes with modern amenities and improved layouts.",
    },
    {
      title: "Commercial Renovations",
      description:
        "Upgrading business spaces for better functionality and aesthetic appeal.",
    },
    {
      title: "Historic Building Preservation",
      description:
        "Dedicated services to restore and preserve heritage properties.",
    },
    {
      title: "Structural Rehabilitation",
      description:
        "Strengthening and repairing existing building structures and foundations.",
    },
    {
      title: "Interior Design & Upgrades",
      description:
        "Custom design solutions for kitchens, bathrooms, and living areas.",
    },
    {
      title: "Exterior Restoration",
      description:
        "Bringing facades, roofs, and landscapes back to their original glory.",
    },
  ];

  const howItWorks = [
    "Schedule a confidential consultation to discuss your goals or renovation needs",
    "Get a document checklist and personalized review of your situation",
    "We prepare, file, and track your application",
    "Regular updates and guidance until decision or landing",
    "Ongoing support for appeals, extensions, or status changes",
  ];

  const features = [
    "Expertise in heritage building materials",
    "Meticulous attention to detail",
    "Integration of modern technology with classic design",
    "Sustainable and eco-friendly practices",
  ];

  const cubeColors = darkMode
    ? ['#F8F4E3', '#AABF91', '#F8F4E3', '#AABF91', '#F8F4E3', '#AABF91'] // off-white and muted green shades for dark
    : ['#002346', '#B57560', '#002346', '#B57560', '#002346', '#B57560']; // deep blue + sepia accent for light mode

  return (
    <div
      className={`min-h-screen w-full transition-colors duration-300 ${darkMode ? "bg-[#367588]" : "bg-[#F8F4E3]"}`}
    >
      <div className="fixed top-0 left-0 w-full z-[100] bg-[#F8F4E3] dark:bg-[#367588] shadow-lg">
        <Header
          user={user}
          onLogout={onLogout}
        />
      </div>

      {/* Hero Section with Video Background */}
      <section className="relative w-screen h-screen flex items-center justify-center overflow-hidden m-0 p-0" style={{ minHeight: '100vh', maxWidth: '100vw', background: darkMode ? '#367588' : '#F8F4E3' }}>
        <video
          autoPlay
          loop
          loading="lazy"
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
          style={{ minHeight: '100vh', minWidth: '100vw', objectFit: 'cover' }}
        >
          <source src={renovation} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
          <h1 className="font-bold text-5xl mb-6" style={{ color: '#F8F4E3', }} data-aos="fade-down">
            Renovation & Restoration
          </h1>
          <p className="max-w-2xl mx-auto text-lg" style={{ color: '#333333', }} data-aos="fade-up">
            Bringing new life to old spaces with expertise and care.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section
        id="key-benefits"
        className="w-full py-16 px-4 transition-colors duration-300"
        style={{ backgroundColor: darkMode ? "#002346" : "#F8F4E3" }}
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-once="false"
      >
        <div className="max-w-7xl mx-auto w-full">
          <div
            className="text-center mb-16"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h2
              className="text-5xl font-bold mb-4"
              style={{ color: darkMode ? "#F8F4E3" : "#002346" }}
            >
              Key Advantages
            </h2>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ color: darkMode ? "#F8F4E3" : "#333333" }}
            >
              Transforming properties with a focus on quality and heritage.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div
              className="space-y-8"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              {benefits.slice(0, 3).map((b, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl shadow-lg hover:scale-105 transition-all duration-300"
                  style={{ backgroundColor: darkMode ? "#333333" : "#002346" }}
                >
                  <h3
                    className="text-2xl font-bold mb-2"
                    style={{ color: "#F8F4E3" }}
                  >
                    {b.split(":")[0]}
                  </h3>
                  <p className="text-base" style={{ color: "#F8F4E3" }}>
                    {b}
                  </p>
                </div>
              ))}
            </div>
            <div
              className="flex flex-col items-center lg:items-start justify-start h-full"
              data-aos="zoom-in"
              data-aos-delay="600"
            >
              <img
                src={Photo}
                alt="Renovation and Restoration"
                className="rounded-2xl shadow-xl mb-6 w-[420px] h-[420px] object-fill border-4 border-[#F8F4E3] dark:border-[#002346]"
                style={{ maxWidth: '100%', background: darkMode ? '#333333' : '#fff', marginTop: 0, alignSelf: 'flex-start' }}
              />
              <h3
                className="text-2xl font-bold mb-4 self-center lg:self-start"
                style={{ color: darkMode ? "#F8F4E3" : "#002346" }}
              >
                Renew Your Space.
              </h3>
              <p className="text-lg max-w-md self-center lg:self-start" style={{ color: darkMode ? "#F8F4E3" : "#333333" }}>
                We make building's unique character.
              </p>
            </div>
            <div
              className="space-y-8"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              {benefits.slice(3, 6).map((b, idx) => (
                <div
                  key={idx + 3}
                  className="p-6 rounded-2xl shadow-lg hover:scale-105 transition-all duration-300"
                  style={{ backgroundColor: darkMode ? "#333333" : "#002346" }}
                >
                  <h3
                    className="text-2xl font-bold mb-2"
                    style={{ color: "#F8F4E3" }}
                  >
                    {b.split(":")[0]}
                  </h3>
                  <p className="text-base" style={{ color: "#F8F4E3" }}>
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
        style={{
          background: "#002346",
        }}
      >
        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="mb-12" data-aos="fade-up">
            <h2 className="text-5xl text-center font-bold text-white">
              Our Renovation & Restoration Services
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
                <h3 className="text-xl text-[#002346] font-bold mb-4">{service.title}</h3>
                <p className="text-base">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
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
              OUR PROCESS
            </h2>
            <p className={`text-lg mb-8 ${darkMode ? 'text-[#AABF91]' : 'text-[#333]'}`}>
              Bringing your vision to life, step by step
            </p>
            <ul className={`list-disc pl-6 space-y-4 text-base ${darkMode ? 'text-[#AABF91]' : 'text-[#333]'}`}>
              <li>Initial consultation and detailed project scope.</li>
              <li>Thorough site inspection and feasibility analysis.</li>
              <li>Collaborative design and material selection.</li>
              <li>Transparent budget and timeline planning.</li>
              <li>Permitting and seamless execution.</li>
              <li>Quality assurance and final walkthrough.</li>
              <li>Post-project support and maintenance guidance.</li>
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
                    border: '1.5px dashed #B57560',
                    borderRadius: "45%",
                    zIndex: 1,
                    mixBlendMode: darkMode ? 'screen' : 'normal',
                  }}
                />
              ))}
            </div>

            {/* Cubes container */}
            <div
              className="z-10 flex flex-col items-end ml-auto space-y-6 w-[290px] sm:w-[320px] md:w-[340px] lg:w-[360px]"
              style={{ perspective: '1200px' }}
            >
              {/* Cubes with color scheme consistent with page */}
              {[
                { color: cubeColors[0], label: "Consultation" },
                { color: cubeColors[1], label: "Design" },
                { color: cubeColors[2], label: "Plan" },
                { color: cubeColors[3], label: "Execute" },
                { color: cubeColors[4], label: "Finish" },
                { color: cubeColors[5], label: "Support" },
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
                    transformOrigin: 'center',
                    animation: `floatUpDown 3s ease-in-out ${(i * 0.25)}s infinite`,
                    cursor: 'default',
                    userSelect: 'none',
                    color: darkMode ? COLOR_1 : COLOR_2,
                    fontWeight: '700',
                    fontSize: '1.3rem',
                    paddingLeft: '32px',
                    letterSpacing: '0.05em',
                  }}
                  tabIndex={0} // for keyboard focus, accessibility
                  aria-label={`Step ${i + 1}: ${step.label}`}
                  onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-10px) rotateX(5deg) rotateY(7deg)'}
                  onMouseLeave={e => e.currentTarget.style.transform = ''}
                >
                  {step.label}
                  {/* Subtle glow */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '8px',
                      left: '10%',
                      width: '80%',
                      height: '6px',
                      backgroundColor: 'rgba(0,0,0,0.15)',
                      filter: 'blur(8px)',
                      borderRadius: '5px',
                      pointerEvents: 'none',
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

      {/* Features Section */}
      <section
        className="w-full py-16 px-4 transition-colors duration-300"
        style={{ background: '#002346' }}
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col space-y-8" data-aos="fade-right">
              <div>
                <h2
                  className="text-5xl font-bold mb-6"
                  style={{ color: "#F8F4E3" }}
                >
                  Project Features
                </h2>
                <p className="text-xl mb-8" style={{ color: "#F8F4E3" }}>
                  A commitment to excellence in every detail.
                </p>
              </div>
              <div className="space-y-6">
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "#F8F4E3" }}
                >
                  We are experts in both modern and historic building practices.
                </p>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "#F8F4E3" }}
                >
                  Our work adds lasting value and beauty to your property.
                </p>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "#F8F4E3" }}
                >
                  We prioritize sustainable and durable material selections.
                </p>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "#F8F4E3" }}
                >
                  Your vision and the building's history—always our first priority.
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
                    {`Our team's ${feature.toLowerCase()} is at the heart of our success.`}
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
            Start Your Renovation or Restoration Journey
          </h2>
          <p
            className="text-xl mb-12 max-w-2xl mx-auto"
            style={{ color: darkMode ? "#F8F4E3" : "#333333" }}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Whether it's a minor refresh or a full-scale historical project, we're ready to help.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {pricingTiers.map((tier, i) => (
              <div key={i} style={{background: COLOR_2, color: COLOR_3, border: `2px solid ${COLOR_1}`}} className="rounded-2xl p-6 border-2 shadow-md hover:scale-105 transition-all duration-300">
                {tier.badge &&
                  <div className="bg-white text-[#002346] text-sm font-bold px-3 py-1 rounded-full inline-block mb-4 animate-pulse">
                    {tier.badge}
                  </div>}
                <h3 className="text-2xl font-bold mb-2" style={{color: COLOR_1}}>{tier.title}</h3>
                <div className="text-4xl font-bold mb-4" style={{color: COLOR_3}}>{tier.price}<span className="text-lg">{tier.priceNote}</span></div>
                <ul className="text-left space-y-3 mb-6">
                  {tier.features.map((feat, j) => (
                    <li key={j}>{feat}</li>
                  ))}
                </ul>
                {tier.buttonText === 'Request a Quote' && (
                  <button
                    className="w-full font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
                    style={{background: COLOR_1, color: COLOR_2, border: `2px solid ${COLOR_1}`}}
                    onClick={() => navigate('/home2#consultation-form')}
                  >
                    {tier.buttonText}
                  </button>
                )}
                {tier.buttonText === 'Contact Us' && (
                  <button
                    className="w-full font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
                    style={{background: COLOR_1, color: COLOR_2, border: `2px solid ${COLOR_1}`}}
                    onClick={() => navigate('/contact')}
                  >
                    {tier.buttonText}
                  </button>
                )}
                {tier.buttonText === 'Schedule a Consultation' && (
                  <button
                    className="w-full font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
                    style={{background: COLOR_1, color: COLOR_2, border: `2px solid ${COLOR_1}`}}
                    onClick={() => navigate('/home')}
                  >
                    {tier.buttonText}
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer darkMode={darkMode} setDarkMode={setDarkMode}/>
    </div>
  );
};

export default RenovationRestoration;