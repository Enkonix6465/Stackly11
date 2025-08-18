import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Header from "../components/Header.jsx";
import { useDarkMode } from "../context/DarkModeContext.jsx";
import AOS from "aos";
import Footer from "../components/Footer.jsx";
//import '../aos-custom.css';
import {
  UserIcon,
  DocumentDuplicateIcon,
  ClipboardDocumentCheckIcon,
  PaperAirplaneIcon,
  BriefcaseIcon,
  SparklesIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/solid";
import urbanHero from '../assets/urbanHero.mp4';
import urbanPhoto from '../assets/urbanPlanning.jpg';

const COLOR_1 = '#002346'; // deep blue
const COLOR_2 = '#F8F4E3'; // off-white
const COLOR_3 = '#333333';

const UrbanPlanning = ({ user, onLogout }) => {
  const { darkMode, setDarkMode } = useDarkMode();
  const navigate = useNavigate();
  // Prevent horizontal scroll on the whole page
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = 'html, body { overflow-x: hidden !important; }';
    document.head.appendChild(style);
    return () => { document.head.removeChild(style); };
  }, []);
  // Smooth scroll methods
  const scrollToBenefits = () => {
    const benefitsSection = document.getElementById("key-benefits");
    if (benefitsSection) {
      benefitsSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToPricing = () => {
    const pricingSection = document.getElementById("pricing-section");
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: "smooth" });
    }
  };


  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Page Content for Urban Planning
  const benefits = [
    "Holistic and Sustainable Community Design",
    "Optimized Land Use and Resource Management",
    "Enhanced Public Spaces and Livability",
    "Strategic Economic and Infrastructure Planning",
    "Efficient Regulatory and Permitting Navigation",
    "Inclusive Stakeholder and Community Engagement",
  ];

  const services = [
    {
      title: "Master Planning & Zoning",
      description:
        "Developing comprehensive master plans and managing zoning regulations to shape future growth.",
    },
    {
      title: "Sustainable Development",
      description: "Integrating green infrastructure, energy efficiency, and resilient design into projects.",
    },
    {
      title: "Community & Stakeholder Engagement",
      description: "Facilitating inclusive public workshops and dialogue to build consensus and support.",
    },
    {
      title: "Land Use & Feasibility Studies",
      description:
        "Analyzing site potential and market trends to ensure viable and successful urban projects.",
    },
    {
      title: "Transit-Oriented Development (TOD)",
      description:
        "Creating vibrant, walkable communities around public transit hubs to reduce traffic and promote connectivity.",
    },
    {
      title: "Urban Revitalization",
      description: "Transforming underutilized or distressed areas into thriving, vibrant urban centers.",
    },
  ];

  const howItWorks = [
    "Initiate with a project visioning session",
    "Conduct site and community analysis",
    "Develop strategic planning options",
    "Manage permitting and regulatory approvals",
    "Implement design and project phasing",
    "Provide post-project support and assessment",
  ];

  const features = [
    "Data-driven urban analytics",
    "Interactive 3D city modeling",
    "Community feedback portal",
    "Regulatory approval tracking",
  ];

  const pricingTiers = [
    {
      title: "Project Consult",
      price: "$2,500",
      priceNote: "/initial phase",
      features: [
        "Single-session consultation",
        "Initial feasibility assessment & land use review",
        "Actionable recommendations for project kick-off",
        "Executive summary report and next steps",
        "Follow-up email support",
      ],
      buttonText: "Book Consult",
      buttonClass:
        "w-full bg-[#002346] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#B57560] transition-colors duration-300 transform hover:scale-105",
      boxStyle: { background: "#AABF91", color: "#002346" },
      className:
        "rounded-2xl p-6 border-2 border-[#B57560] hover:border-[#002346] transition-all duration-300",
    },{
      title: "Standard Development",
      price: "Quote",
      priceNote: "/project",
      features: [
        "Includes all features from Project Consult",
        "Comprehensive master planning & design",
        "Full regulatory and permitting support",
        "Stakeholder engagement strategy & facilitation",
      ],
      buttonText: "Request Quote",
      buttonClass:
        "w-full bg-[#AABF91] text-[#002346] font-semibold py-3 px-6 rounded-lg hover:bg-[#B57560] hover:text-white transition-colors duration-300 transform hover:scale-105",
      badge: "MOST POPULAR",
      boxStyle: { background: "#002346", color: "#AABF91" },
      className: "rounded-2xl p-6 border-2 border-[#AABF91] scale-105",
    },
    {
      title: "Urban Partnership",
      price: "Quote",
      priceNote: "/long-term",
      features: [
        "Full-scope urban planning services",
        "Post-implementation monitoring & support",
        "Dedicated project lead & team access",
        "Strategic partnership for multiple projects",
        "Customized solutions for complex urban challenges",
      ],
      buttonText: "Start Now",
      buttonClass:
        "w-full bg-[#002346] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#B57560] transition-colors duration-300 transform hover:scale-105",
      boxStyle: { background: "#AABF91", color: "#002346" },
      className:
        "rounded-2xl p-6 border-2 border-[#B57560] hover:border-[#002346] transition-all duration-300",
    }
    // Add more pricing tiers here if needed
  ];

  const cubeColors = darkMode
    ? ['#F8F4E3', '#AABF91', '#F8F4E3', '#AABF91', '#F8F4E3', '#AABF91'] // off-white and muted green shades for dark
    : ['#002346', '#B57560', '#002346', '#B57560', '#002346', '#B57560']; // deep blue + sepia accent for light mode

  return (
    <div
      className={`min-h-screen w-full transition-colors duration-300 ${
        darkMode ? "bg-[#002346]" : "bg-white"
      }`}
    >
      <div className="fixed top-0 left-0 w-full z-[100] bg-white dark:bg-[#002346] shadow-lg">
        <Header
          user={user}
          onLogout={onLogout}
        />
        <Header
          user={user}
          onLogout={onLogout}
        />
      </div>

      {/* Hero Section */}
      <section className="relative w-screen h-screen flex items-center justify-center overflow-hidden m-0 p-0" style={{ minHeight: '100vh', maxWidth: '100vw' }}>
        <video
          autoPlay
          loop
          loading="lazy"
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
          style={{ minHeight: '100vh', minWidth: '100vw', objectFit: 'cover' }}
        >
          <source src={urbanHero} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
          <h1 className="font-bold text-5xl mb-6 text-white drop-shadow-lg" data-aos="fade-down">
            Urban Planning
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-white drop-shadow-lg" data-aos="fade-up">
            Shaping the future of communities through strategic design and sustainable growth.
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
              Driving progress with thoughtful, innovative, and community-focused urban design solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 justify-items-center">
            {/* Benefits List */}
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
            <div className="flex flex-col items-center lg:items-start justify-start h-full" data-aos="zoom-in" data-aos-delay="600">
              <img
                src={urbanPhoto}
                alt="Urban Planning"
                className="rounded-2xl shadow-xl mb-6 w-[420px] h-[420px] object-fill border-4 border-[#F8F4E3] dark:border-[#002346]"
                style={{ maxWidth: '100%', background: darkMode ? '#333333' : '#fff', marginTop: 0, alignSelf: 'flex-start' }}
              />
              <h3 className="text-2xl font-bold mb-4 self-center lg:self-start" style={{ color: darkMode ? '#F8F4E3' : '#002346' }}>Your Vision. Our Blueprint.</h3>
              <p className="text-lg max-w-md self-center lg:self-start" style={{ color: darkMode ? '#F8F4E3' : '#333333' }}>
                Transforming concepts into reality with forward-thinking urban and regional planning.
              </p>
            </div>
            {/* More Benefits */}
            <div
              className="space-y-8"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              {benefits.slice(3, 6).map((b, idx) => (
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
              Urban Planning Services
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
                <h3 className="text-xl text-[#002346] font-bold mb-4" style={{ color: "#002346" }}>{service.title}</h3>
                <p className="text-base" style={{ color: "#333333" }}>{service.description}</p>
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
              A collaborative and comprehensive approach
            </p>
            <ul className={`list-disc pl-6 space-y-4 text-base ${darkMode ? 'text-[#AABF91]' : 'text-[#333]'}`}>
              <li>Initiate with a project visioning session.</li>
              <li>Conduct site and community analysis.</li>
              <li>Develop strategic planning options.</li>
              <li>Manage permitting and regulatory approvals.</li>
              <li>Implement design and project phasing.</li>
              <li>Provide post-project support and assessment.</li>
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
                { color: cubeColors[0], label: "Vision" },
                { color: cubeColors[1], label: "Analysis" },
                { color: cubeColors[2], label: "Strategy" },
                { color: cubeColors[3], label: "Approvals" },
                { color: cubeColors[4], label: "Phasing" },
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
                  Our Project Features
                </h2>
                <p className="text-xl mb-8" style={{ color: "#F8F4E3" }}>
                  Empowering your project with innovative technology and insights.
                </p>
              </div>
              <div className="space-y-6">
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "#F8F4E3" }}
                >
                  Our planning process is built on a foundation of data-driven analysis and community collaboration. We use advanced tools to visualize scenarios and predict outcomes.
                </p>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "#F8F4E3" }}
                >
                  We believe that successful projects are born from inclusive dialogue. Our digital platforms make it easy to gather and integrate valuable public feedback.
                </p>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "#F8F4E3" }}
                >
                  From initial concept to final approval, we provide transparent progress tracking. Our clients are always informed and engaged, ensuring a smooth and predictable process.
                </p>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "#F8F4E3" }}
                >
                  We help navigate the complexities of permitting and regulatory compliance, providing clear guidance and expert support to avoid delays.
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
                    Benefit from {feature.toLowerCase()} as a valued client.
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
            Start Your Urban Project
          </h2>
          <p
            className="text-xl mb-12 max-w-2xl mx-auto"
            style={{ color: darkMode ? "#F8F4E3" : "#002346" }}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            From a single site to a master-planned community, we have a solution for you.
          </p>
          {/* Service Tiers */}
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
                {tier.buttonText === 'Book Consult' && (
                  <button
                    className="w-full font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
                    style={{background: COLOR_1, color: COLOR_2, border: `2px solid ${COLOR_1}`}}
                    onClick={() => navigate('/home2#consultation-form')}
                  >
                    {tier.buttonText}
                  </button>
                )}
                {tier.buttonText === 'Request Quote' && (
                  <button
                    className="w-full font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
                    style={{background: COLOR_1, color: COLOR_2, border: `2px solid ${COLOR_1}`}}
                    onClick={() => navigate('/contact')}
                  >
                    {tier.buttonText}
                  </button>
                )}
                {tier.buttonText === 'Start Now' && (
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
      <Footer darkMode={darkMode} setDarkMode={setDarkMode} bgColor={darkMode ? undefined : "#F8F4E3"} />
    </div>
  );
};

export default UrbanPlanning;