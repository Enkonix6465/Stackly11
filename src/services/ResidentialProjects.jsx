import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header.jsx';
import { useDarkMode } from '../context/DarkModeContext.jsx';
import Footer from '../components/Footer.jsx';
import AOS from 'aos';
import {
  UserIcon,
  DocumentDuplicateIcon,
  ClipboardDocumentCheckIcon,
  PaperAirplaneIcon,
  BriefcaseIcon,
  SparklesIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/solid";

import family from '../assets/residentialHero.mp4';
import residentialService from '../assets/residentialService.png';

const COLOR_1 = '#002346'; // deep blue
const COLOR_2 = '#F8F4E3'; // off-white
const COLOR_3 = '#333333'; // dark gray

const ResidentialProjects = ({ user, onLogout }) => {
  const { darkMode, setDarkMode } = useDarkMode();
  const navigate = useNavigate();

  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = 'html, body { overflow-x: hidden !important; }';
    document.head.appendChild(style);
    return () => { document.head.removeChild(style); };
  }, []);

  const scrollToBenefits = () => {
    const benefitsSection = document.getElementById('key-benefits');
    if (benefitsSection) benefitsSection.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing-section');
    if (pricingSection) pricingSection.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => { AOS.init({ duration: 1000, once: true }); }, []);
  
  // Text content adjusted to Residential projects context
  const benefits = [
    "Custom-tailored designs meeting your unique residential needs",
    "Seamless project management ensuring timely delivery",
    "Use of sustainable materials and eco-friendly methods",
    "Transparent budget handling and cost-effective solutions",
    "Expert craftsmanship focused on quality and durability",
    "Dedicated support through every stage of construction",
  ];

  const services = [
    {
      title: "Residential Projects",
      description: "From cozy single-family homes to expansive luxury estates, creating living spaces that inspire and endure."
    },
    {
      title: "Interior Design",
      description: "Crafting interiors that harmonize beauty and functionality to make every house a home."
    },
    {
      title: "Renovation & Restoration",
      description: "Enhancing and preserving your current home with thoughtful upgrades and restorations."
    },
    {
      title: "Landscape Design",
      description: "Transforming outdoor spaces into beautiful, functional environments tailored to your lifestyle."
    },
    {
      title: "Smart Home Integration",
      description: "Upgrading homes with the latest smart technologies for convenience, security, and energy efficiency."
    },
    {
      title: "Home Extensions",
      description: "Expanding your living space with seamless additions that blend perfectly with your existing home."
    }
  ];

  const features = [
    "Regular project status updates",
    "Personalized communication with your project manager",
    "Access to design reviews and materials through our client portal",
    "Focus on client satisfaction and finishing details"
  ];

  const pricingTiers = [
    {
      title: "Initial Consultation",
      price: "$150", priceNote: "/hour",
      features: [
        "Discuss your vision and requirements",
        "Preliminary feasibility and site assessment",
        "Estimate project scope and budget",
        "Outline next steps and project timeline",
        "Follow-up consultation to finalize details",
        "No obligation to proceed with the project",
      ],
      buttonText: "Book Consultation",
      buttonClass: "w-full bg-[#002346] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#B57560] transition-colors duration-300 transform hover:scale-105",
      boxStyle: { background: "#AABF91", color: "#002346" },
      className: "rounded-2xl p-6 border-2 border-[#B57560] hover:border-[#002346] transition-all duration-300",
    },
    {
      title: "Design & Planning",
      price: "$3,000", priceNote: "/project",
      features: [
        "Architectural design and layout plans",
        "Interior concept development",
        "Permitting assistance and approvals",
        "Regular client design consultations",
        "Detailed project timeline",
        "Final design package with specifications",
      ],
      buttonText: "Contact Us",
      buttonClass: "w-full bg-[#AABF91] text-[#002346] font-semibold py-3 px-6 rounded-lg hover:bg-[#B57560] hover:text-white transition-colors duration-300 transform hover:scale-105",
      badge: "MOST POPULAR",
      boxStyle: { background: "#002346", color: "#AABF91" },
      className: "rounded-2xl p-6 border-2 border-[#AABF91] scale-105",
    },
    {
      title: "Full Construction",
      price: "Starting at $50,000", priceNote: "/project",
      features: [
        "Complete construction management and execution",
        "High-quality materials and craftsmanship",
        "On-site supervision and quality assurance",
        "Post-construction walkthrough and support",
      ],
      buttonText: "Start Now",
      buttonClass: "w-full bg-[#002346] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#B57560] transition-colors duration-300 transform hover:scale-105",
      boxStyle: { background: "#AABF91", color: "#002346" },
      className: "rounded-2xl p-6 border-2 border-[#B57560] hover:border-[#002346] transition-all duration-300",
    }
  ];

  // Color palette matching the page's scheme for cubes
  const cubeColors = darkMode
    ? ['#F8F4E3', '#AABF91', '#F8F4E3', '#AABF91', '#F8F4E3', '#AABF91'] // off-white and muted green shades for dark
    : ['#002346', '#B57560', '#002346', '#B57560', '#002346', '#B57560']; // deep blue + sepia accent for light mode

  return (
    <div className={`min-h-screen w-full transition-colors duration-300`} style={{background: darkMode ? COLOR_1 : COLOR_2}}>
      <div className="sticky top-0 z-50">
        <div className="fixed top-0 left-0 w-full z-[100]" style={{background: darkMode ? COLOR_3 : COLOR_2, boxShadow: '0 2px 8px 0 rgba(51,51,51,0.08)'}}>
          <Header user={user} onLogout={onLogout} />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative w-screen h-screen flex items-center justify-center overflow-hidden m-0 p-0" style={{ minHeight: '100vh', maxWidth: '100vw', background: COLOR_1 }}>
        <video
          autoPlay
          loop
          loading="lazy"
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
          style={{ minHeight: '100vh', minWidth: '100vw', objectFit: 'cover' }}
        >
          <source src={family} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
          <h1 className="font-bold text-5xl mb-6 drop-shadow-lg" style={{color: COLOR_2}} data-aos="fade-down">
            Residential Projects Experts
          </h1>
          <p className="max-w-2xl mx-auto text-lg drop-shadow-lg" style={{color: COLOR_2}} data-aos="fade-up">
            Building homes that reflect your vision and lifestyle.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="key-benefits" className="w-full py-16 px-4 transition-colors duration-300"
        style={{ backgroundColor: darkMode ? "#002346" : "#F8F4E3" }}
        data-aos="fade-up" data-aos-duration="1000" data-aos-once="false">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-16" data-aos="fade-up" data-aos-delay="200">
            <h2 className="text-5xl font-bold mb-4" style={{ color: darkMode ? "#F8F4E3" : "#002346" }}>
              Why Choose Our Residential Services
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: darkMode ? "#F8F4E3" : "#333333" }}>
              Trusted partner delivering personalized and quality residential constructions.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="space-y-8" data-aos="fade-right" data-aos-delay="300">
              {benefits.slice(0, 3).map((b, idx) => (
                <div key={idx} className="p-6 rounded-2xl shadow-lg hover:scale-105 transition-all duration-300"
                  style={{ backgroundColor: darkMode ? "#333333" : "#002346" }}>
                  <h3 className="text-2xl font-bold mb-2" style={{ color: "#F8F4E3" }}>{b.split(':')[0]}</h3>
                  <p className="text-base" style={{ color: "#F8F4E3" }}>{b}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col items-center lg:items-start justify-start h-full" data-aos="zoom-in" data-aos-delay="600">
              <img 
                src={residentialService} 
                alt="Residential Projects" 
                className="rounded-2xl shadow-xl mb-6 w-[420px] h-[420px] object-fill border-4 border-[#F8F4E3] dark:border-[#002346]"
                style={{ maxWidth: '100%', background: darkMode ? '#333333' : '#fff', marginTop: 0, alignSelf: 'flex-start' }}
              />
              <h3 className="text-2xl font-bold mb-4 self-center lg:self-start" style={{ color: darkMode ? "#F8F4E3" : "#002346" }}>Your Dream Home, Our Mission.</h3>
              <p className="text-lg max-w-md self-center lg:self-start" style={{ color: darkMode ? "#F8F4E3" : "#333333" }}>
                Expert residential construction with attention to detail and customer satisfaction.
              </p>
            </div>
            <div className="space-y-8" data-aos="fade-left" data-aos-delay="300">
              {benefits.slice(3, 6).map((b, idx) => (
                <div key={idx} className="p-6 rounded-2xl shadow-lg hover:scale-105 transition-all duration-300"
                  style={{ backgroundColor: darkMode ? "#333333" : "#002346" }}>
                  <h3 className="text-2xl font-bold mb-2" style={{ color: "#F8F4E3" }}>{b.split(':')[0]}</h3>
                  <p className="text-base" style={{ color: "#F8F4E3" }}>{b}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-16 px-4 relative transition-colors duration-300"
        style={{ background: COLOR_1 }}>
        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="mb-12" data-aos="fade-up">
            <h2 className="text-5xl text-center font-bold text-white">
              Our Residential Services
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
                  <span className="text-2xl font-bold" style={{ color: COLOR_1 }}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-4" style={{color: COLOR_1}}>{service.title}</h3>
                <p className="text-base" style={{color: COLOR_3}}>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Section (Residential projects context) */}
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
              Our residential project process
            </p>
            <ul className={`list-disc pl-6 space-y-4 text-base ${darkMode ? 'text-[#AABF91]' : 'text-[#333]'}`}>
              <li>Personalized consultation and vision assessment.</li>
              <li>Site analysis and feasibility planning.</li>
              <li>Custom architectural design development.</li>
              <li>Permitting and regulatory compliance management.</li>
              <li>Construction and quality assurance.</li>
              <li>Regular updates and collaborative client feedback.</li>
              <li>Final walkthrough and post-completion support.</li>
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
                { color: cubeColors[0], label: "Brief" },
                { color: cubeColors[1], label: "Research" },
                { color: cubeColors[2], label: "Sketch" },
                { color: cubeColors[3], label: "Design" },
                { color: cubeColors[4], label: "Present" },
                { color: cubeColors[5], label: "Revise" },
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
      <section className="w-full py-16 px-4 transition-colors duration-300"
        style={{ background: COLOR_1 }}>
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col space-y-8" data-aos="fade-right">
              <div>
                <h2 className="text-5xl font-bold mb-6" style={{ color: COLOR_2 }}>
                  Our Client Features
                </h2>
                <p className="text-xl mb-8" style={{ color: COLOR_2 }}>
                  Always putting your project’s success first.
                </p>
              </div>
              <div className="space-y-6">
                <p className="text-base leading-relaxed" style={{ color: COLOR_2 }}>
                  We treat every project with precision, care, and personal attention.
                </p>
                <p className="text-base leading-relaxed" style={{ color: COLOR_2 }}>
                  Access to resources and expert consultants throughout your project.
                </p>
                <p className="text-base leading-relaxed" style={{ color: COLOR_2 }}>
                  Client portal provides 24/7 access to design and construction updates.
                </p>
                <p className="text-base leading-relaxed" style={{ color: COLOR_2 }}>
                  Expect reliability, transparency, and constant communication at every stage.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8" data-aos="fade-left">
              {features.map((feature, index) => (
                <div key={index}
                  className="p-6 rounded-2xl shadow-lg hover:scale-105 transition-all duration-300"
                  style={{ background: COLOR_2, color: COLOR_3 }}>
                  <h3 className="text-xl font-bold mb-2">{feature}</h3>
                  <p className="text-base">
                    {`Benefit from ${feature.toLowerCase()} as our client.`}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA/Pricing Section */}
      <section id="pricing-section" className="w-full py-16 px-4 transition-colors duration-300" style={{ backgroundColor: darkMode ? "#002346" : "#F8F4E3" }}>
        <div className="max-w-6xl mx-auto text-center w-full">
          <h2 className="text-5xl font-bold mb-4" style={{ color: darkMode ? "#F8F4E3" : "#002346" }} data-aos="fade-down" data-aos-delay="50">
            Secure Peace of Mind for Your Project
          </h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto" style={{ color: darkMode ? "#F8F4E3" : "#333333" }} data-aos="fade-up" data-aos-delay="100">
            Find clarity, support, and expert solutions—every step of the way.
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
                {tier.buttonText === 'Book Consultation' && (
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

export default ResidentialProjects;
