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
import civil from '../assets/commercialHero.mp4';
import commercialComplex from '../assets/commercialComplex.jpg';

const COLOR_1 = '#002346'; // deep blue
const COLOR_2 = '#F8F4E3'; // off-white
const COLOR_3 = '#333333'; // dark gray

const CommercialComplexes = ({ user, onLogout }) => {
  const { darkMode, setDarkMode } = useDarkMode();
  const navigate = useNavigate();
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

  const benefits = [
    "Expert planning and design tailored to commercial needs",
    "Efficient use of space to maximize functionality and appeal",
    "Compliance with modern safety and regulatory standards",
    "Sustainable and energy-efficient construction methods",
    "High-quality materials ensuring durability and aesthetics",
    "Timely delivery with strict project management practices",
  ];

  const features = [
    "Direct collaboration with architects and engineers",
    "Transparent progress tracking and reports",
    "Custom design layouts for varied business types",
    "On-demand project updates and client walkthroughs"
  ];

  const services = [
    {
      title: "Design & Architecture",
      description:
        "Innovative architectural designs tailored for retail, office, and mixed-use commercial complexes.",
    },
    {
      title: "Structural Engineering",
      description:
        "Safe and robust structures ensuring long-term reliability and compliance with all codes.",
    },
    {
      title: "Construction Management",
      description:
        "End-to-end project management ensuring efficiency, cost-effectiveness, and timely delivery.",
    },
    {
      title: "Interior Fit-outs",
      description:
        "Customized interiors designed for functionality, branding, and modern aesthetics.",
    },
    {
      title: "Sustainability Solutions",
      description:
        "Eco-friendly practices including energy-efficient systems, water management, and green materials.",
    },
    {
      title: "Maintenance & Support",
      description:
        "Post-construction support including regular inspections, upgrades, and maintenance services.",
    },
  ];

  const pricingTiers = [
    {
      title: "Consultation",
      price: "$199",
      priceNote: "/session",
      features: [
        "One-on-one consultation with our commercial expert",
        "Site feasibility analysis",
        "Initial concept design discussion",
        "Budget estimation and project scope outline",
        "Follow-up consultation to finalize details",
      ],
      buttonText: "Book Consult",
      buttonClass:
        `w-full bg-${COLOR_1} text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#B57560] transition-colors duration-300 transform hover:scale-105`,
      boxStyle: { background: COLOR_2, color: COLOR_3 },
      className:
        `rounded-2xl p-6 border-2 border-${COLOR_1} hover:border-${COLOR_3} transition-all duration-300`
    },
    {
      title: "Full Project",
      price: "$2,499",
      priceNote: "/project",
      features: [
        "Complete architectural design & planning",
        "Structural, MEP engineering & maintenance",
        "Project execution & supervision",
        "Timely handover of commercial complex",
      ],
      buttonText: "Contact Us",
      buttonClass:
        `w-full bg-[#AABF91] text-${COLOR_1} font-semibold py-3 px-6 rounded-lg hover:bg-[#B57560] hover:text-white transition-colors duration-300 transform hover:scale-105`,
      badge: "MOST POPULAR",
      boxStyle: { background: COLOR_1, color: COLOR_2 },
      className: `rounded-2xl p-6 border-2 border-${COLOR_1} scale-105`
    },
    {
      title: "Renovation & Expansion",
      price: "$1,499",
      priceNote: "/project",
      features: [
        "Structural assessment of existing buildings",
        "Redesign for modern layouts",
        "Expansion and retrofitting services",
        "Updated interiors and sustainable upgrades",
        "Compliance with current regulations and standards",
      ],
      buttonText: "Start Now",
      buttonClass:
        `w-full bg-${COLOR_1} text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#B57560] transition-colors duration-300 transform hover:scale-105`,
      boxStyle: { background: COLOR_2, color: COLOR_3 },
      className:
        `rounded-2xl p-6 border-2 border-${COLOR_1} hover:border-${COLOR_3} transition-all duration-300`
    }
  ];

  const cubeColors = darkMode
    ? ['#F8F4E3', '#AABF91', '#F8F4E3', '#AABF91', '#F8F4E3', '#AABF91']
    : ['#002346', '#B57560', '#002346', '#B57560', '#002346', '#B57560'];

  return (
    <div
      className={`min-h-screen w-full transition-colors duration-300 ${darkMode ? `bg-[${COLOR_1}]` : `bg-[${COLOR_2}]`}`}
      style={{overflowX: 'hidden'}}
    >
      <div className={`fixed top-0 left-0 w-full z-[100] ${darkMode ? `bg-[${COLOR_3}]` : `bg-[${COLOR_2}]`} shadow-lg`}>
        <Header
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          user={user}
          onLogout={onLogout}
          sticky={true}
        />
      </div>

      {/* Hero Section */}
      <section className="relative w-screen h-screen flex items-center justify-center overflow-hidden m-0 p-0" style={{ minHeight: '100vh', maxWidth: '100vw', backgroundColor: COLOR_1 }}>
        <video
          autoPlay
          loop
          loading="lazy"
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
          style={{ minHeight: '100vh', minWidth: '100vw', objectFit: 'cover' }}
        >
          <source src={civil} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
          <h1 className="font-bold text-5xl mb-6 text-white drop-shadow-lg" data-aos="fade-down">
            Commercial Complexes
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-white drop-shadow-lg" data-aos="fade-up">
            Modern, functional, and sustainable commercial spaces—built to last.
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
              Smartly designed and expertly executed commercial complexes to
              help businesses thrive.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 justify-items-center">
            {/* Left column: Benefits */}
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
            {/* Center: Image and Tagline */}
            <div
              className="flex flex-col items-center lg:items-start justify-start h-full"
              data-aos="zoom-in"
              data-aos-delay="600"
            >
              <img
                src={commercialComplex}
                alt="Commercial Complex"
                className="rounded-2xl shadow-xl mb-6 w-[420px] h-[420px] object-fill border-4 border-[#F8F4E3] dark:border-[#002346]"
                style={{ maxWidth: '100%', background: darkMode ? '#333333' : '#fff', marginTop: 0, alignSelf: 'flex-start' }}
              />
              <h3
                className="text-2xl font-bold mb-4 self-center lg:self-start"
                style={{ color: darkMode ? "#F8F4E3" : "#002346" }}
              >
                Your Vision. Our Blueprint.
              </h3>
              <p className="text-lg max-w-md self-center lg:self-start" style={{ color: darkMode ? "#F8F4E3" : "#333333" }}>
                We create commercial spaces that balance design, functionality, and growth potential.
              </p>
            </div>
            {/* Right column: More benefits */}
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
              Our Services
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

      {/* How It Works */}
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
              HOW WE WORK
            </h2>
            <p className={`text-lg mb-8 ${darkMode ? 'text-[#AABF91]' : 'text-[#333]'}`}>
              Our commercial project process
            </p>
            <ul className={`list-disc pl-6 space-y-4 text-base ${darkMode ? 'text-[#AABF91]' : 'text-[#333]'}`}>
              <li>Initial consultation and requirement analysis.</li>
              <li>Site survey and feasibility study.</li>
              <li>Conceptual and architectural design creation.</li>
              <li>Regulatory approvals and compliance handling.</li>
              <li>Efficient construction with quality monitoring.</li>
              <li>Transparent client updates and review meetings.</li>
              <li>Final handover and post-completion support.</li>
            </ul>
          </div>

          {/* Animated Cubes Side */}
          <div className="flex-1 flex justify-center relative min-h-[480px] w-full md:w-auto">
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
            <div
              className="z-10 flex flex-col items-end ml-auto space-y-6 w-[290px] sm:w-[320px] md:w-[340px] lg:w-[360px]"
              style={{ perspective: '1200px' }}
            >
              {[
                { color: cubeColors[0], label: "Brief" },
                { color: cubeColors[1], label: "Research" },
                { color: cubeColors[2], label: "Design" },
                { color: cubeColors[3], label: "Plan" },
                { color: cubeColors[4], label: "Build" },
                { color: cubeColors[5], label: "Deliver" },
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
                  tabIndex={0}
                  aria-label={`Step ${i + 1}: ${step.label}`}
                  onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-10px) rotateX(5deg) rotateY(7deg)'}
                  onMouseLeave={e => e.currentTarget.style.transform = ''}
                >
                  {step.label}
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
                  Commercial Complex Features
                </h2>
                <p className="text-xl mb-8" style={{ color: COLOR_2 }}>
                  Designed for efficiency, safety, and business success.
                </p>
              </div>
              <div className="space-y-6">
                <p
                  className="text-base leading-relaxed"
                  style={{ color: COLOR_2 }}
                >
                  We deliver innovative solutions for commercial complexes, ensuring compliance, safety, and optimal business environments.
                </p>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: COLOR_2 }}
                >
                  You can monitor project progress, access building plans, and receive updates online, or contact us for tailored business support.
                </p>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: COLOR_2 }}
                >
                  Our team is available for urgent site visits, regulatory approvals, and last-minute business requirements.
                </p>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: COLOR_2 }}
                >
                  Every inquiry is addressed with professionalism, speed, and clarity.
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
                    {`Benefit from ${feature.toLowerCase()} as our civil client.`}
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
            Build Your Commercial Complex With Confidence
          </h2>
          <p
            className="text-xl mb-12 max-w-2xl mx-auto"
            style={{ color: darkMode ? "#F8F4E3" : "#333333" }}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Get expert planning, reliable execution, and peace of mind for your commercial project—with us.
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
                {tier.buttonText === 'Book Consult' && (
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
      <Footer darkMode={darkMode} setDarkMode={setDarkMode}/>
    </div>
  );
};

export default CommercialComplexes;
