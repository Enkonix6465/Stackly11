import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
import interiorHero from "../assets/interiorHero.mp4";
import interiorDesignPhoto from "../assets/interiorDesign.jpg";

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
  }, []); // Interior Design content

  const benefits = [
    "Personalized spaces that reflect your unique style",
    "Optimized use of space, light, and color",
    "Seamless project management from concept to completion",
    "Access to exclusive materials and custom furnishings",
    "Stress-free process with professional guidance",
    "Increased property value and market appeal",
  ];

  const services = [
    {
      title: "Residential Interior Design",
      description:
        "Transforming homes into functional and beautiful living spaces, tailored to your lifestyle.",
    },
    {
      title: "Commercial Space Planning",
      description:
        "Creating inspiring and efficient environments for offices, retail, and hospitality sectors.",
    },
    {
      title: "3D Rendering & Virtual Walkthroughs",
      description:
        "Bringing your design to life with high-fidelity 3D models and interactive virtual tours.",
    },
    {
      title: "Color Consultation & Styling",
      description:
        "Expert advice on color palettes, furniture selection, and decor to harmonize your space.",
    },
    {
      title: "Renovation & Remodeling",
      description:
        "Full-service project management for residential and commercial renovations from start to finish.",
    },
    {
      title: "E-Design Packages",
      description:
        "A flexible and affordable virtual service for those who want a professional design plan to implement themselves.",
    },
  ];

  const howItWorks = [
    "Initial Style & Needs Assessment",
    "Conceptual Design & Mood Boards",
    "Detailed Floor Plans & Layouts",
    "Material Selection & Sourcing",
    "Execution & Project Management",
  ];

  const features = [
    "Custom design concepts and renderings",
    "Curated list of furniture and material selections",
    "Dedicated project manager for real-time updates",
    "Post-completion support and styling advice",
  ];

  const pricingTiers = [
    {
      title: "E-Design Package",
      price: "$399",
      priceNote: "/room",
      features: [
        "Personalized digital design board",
        "Clickable shopping list of products",
        "Floor plan with furniture layout",
        "One round of revisions included",
        "Email support for implementation",
        "Virtual consultation available",
      ],
      buttonText: "Book Consult",
      buttonClass:
        "w-full bg-[#002346] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#B57560] transition-colors duration-300 transform hover:scale-105",
      boxStyle: { background: "#F8F4E3", color: "#002346" },
      className:
        "rounded-2xl p-6 border-2 border-[#002346] hover:border-[#333333] transition-all duration-300",
    },
    {
      title: "Full-Service Design",
      price: "$1,999",
      priceNote: "/room",
      features: [
        "All E-Design services",
        "On-site visits and project management",
        "Sourcing and procurement of materials",
        "Installation and final styling",
        "Access to exclusive trade discounts",
      ],
      buttonText: "Contact Us",
      buttonClass:
        "w-full bg-[#AABF91] text-[#002346] font-semibold py-3 px-6 rounded-lg hover:bg-[#B57560] hover:text-white transition-colors duration-300 transform hover:scale-105",
      badge: "MOST POPULAR",
      boxStyle: { background: "#002346", color: "#F8F4E3" },
      className: "rounded-2xl p-6 border-2 border-[#002346] scale-105",
    },
    {
      title: "Renovation & Remodel",
      price: "$4,999",
      priceNote: "/project",
      features: [
        "Full design and planning services",
        "Architectural drawing and permits",
        "Coordination with contractors",
        "Complete project oversight",
        "Post-renovation styling and support",
        "Sustainability-focused design options",
      ],
      buttonText: "Start Now",
      buttonClass:
        "w-full bg-[#002346] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#B57560] transition-colors duration-300 transform hover:scale-105",
      boxStyle: { background: "#F8F4E3", color: "#002346" },
      className:
        "rounded-2xl p-6 border-2 border-[#002346] hover:border-[#333333] transition-all duration-300",
    },
  ];

  const cubeColors = darkMode
    ? ["#F8F4E3", "#AABF91", "#F8F4E3", "#AABF91", "#F8F4E3", "#AABF91"] // off-white and muted green shades for dark
    : ["#002346", "#B57560", "#002346", "#B57560", "#002346", "#B57560"]; // deep blue + sepia accent for light mode

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
          className="absolute inset-0 w-full h-full object-cover z-0"
          style={{ minHeight: "100vh", minWidth: "100vw", objectFit: "cover" }}
        >
                    <source src={interiorHero} type="video/mp4" />          Your
          browser does not support the video tag.        
        </video>
               
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
                   
          <h1
            className="font-bold text-5xl mb-6"
            style={{ color: "#002346", textShadow: "0 2px 8px #F8F4E3" }}
            data-aos="fade-down"
          >
                        Interior Design          
          </h1>
                   
          <p
            className="max-w-2xl mx-auto text-lg"
            style={{ color: "#333333", textShadow: "0 2px 8px #F8F4E3" }}
            data-aos="fade-up"
          >
                        Creating spaces that are both beautiful and livable.    
                 
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
                            Our Design Philosophy            
            </h2>
                       
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ color: darkMode ? "#F8F4E3" : "#002346" }}
            >
                            A collaborative approach to create functional and
              captivating environments.            
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
                src={interiorDesignPhoto}
                alt="Interior Design"
                className="rounded-2xl shadow-xl mb-6 w-[420px] h-[420px] object-fill border-4 border-[#F8F4E3] dark:border-[#002346]"
                style={{
                  maxWidth: "100%",
                  background: darkMode ? "#333333" : "#fff",
                  marginTop: 0,
                  alignSelf: "flex-start",
                }}
              />
                           
              <h3
                className="text-2xl font-bold mb-4 self-center lg:self-start"
                style={{ color: darkMode ? "#F8F4E3" : "#002346" }}
              >
                Designing Your Dream Space.
              </h3>
                           
              <p
                className="text-lg max-w-md self-center lg:self-start"
                style={{ color: darkMode ? "#F8F4E3" : "#002346" }}
              >
                                We believe a well-designed interior is a
                reflection of its inhabitants.
              </p>
                         
            </div>
                       
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
        style={{ background: "#002346" }}
      >
               
        <div className="max-w-7xl mx-auto relative z-10 w-full">
                   
          <div className="mb-12" data-aos="fade-up">
                       
            <h2 className="text-5xl text-center font-bold text-white">
                            Our Interior Design Services            
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
                            OUR DESIGN PROCESS            
            </h2>
                       
            <p
              className={`text-lg mb-8 ${
                darkMode ? "text-[#AABF91]" : "text-[#333]"
              }`}
            >
                            From a blank canvas to a masterpiece.            
            </p>
                       
            <ul
              className={`list-disc pl-6 space-y-4 text-base ${
                darkMode ? "text-[#AABF91]" : "text-[#333]"
              }`}
            >
                            <li>Initial consultation and client brief.</li>     
                     
              <li>In-depth conceptualization and mood board creation.</li>     
                      <li>Space planning and 3D visualization.</li>             
              <li>Material, furniture, and accessory selection.</li>           
                <li>Execution, installation, and styling.</li>             
              <li>Final review and client handover.</li>           
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
                { color: cubeColors[0], label: "Conceive" },
                { color: cubeColors[1], label: "Plan" },
                { color: cubeColors[2], label: "Render" },
                { color: cubeColors[3], label: "Select" },
                { color: cubeColors[4], label: "Install" },
                { color: cubeColors[5], label: "Style" },
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
                                    Our Client-Focused Approach                
                </h2>
                               
                <p className="text-xl mb-8" style={{ color: "#F8F4E3" }}>
                                    Delivering a beautiful and stress-free
                  design experience.                
                </p>
                             
              </div>
                           
              <div className="space-y-6">
                               
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "#F8F4E3" }}
                >
                                    We believe the best designs come from close
                  collaboration, from the first sketch to the final styling.    
                             
                </p>
                               
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "#F8F4E3" }}
                >
                                    Our team manages every detail of the
                  project, including vendor coordination and material delivery.
                                 
                </p>
                               
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "#F8F4E3" }}
                >
                                    Receive regular updates and have access to
                  our secure digital portal to review plans and progress
                  anytime.                
                </p>
                               
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "#F8F4E3" }}
                >
                                    We provide peace of mind throughout the
                  entire process, making your design journey enjoyable and
                  stress-free.                
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
                                       
                    {`Benefit from ${feature.toLowerCase()} as our interior design client.`}
                                     
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
                        Design Your Dream Space          
          </h2>
                   
          <p
            className="text-xl mb-12 max-w-2xl mx-auto"
            style={{ color: darkMode ? "#F8F4E3" : "#333333" }}
            data-aos="fade-up"
            data-aos-delay="100"
          >
                        Choose the perfect package to transform your home or
            office.          
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

export default InteriorDesign;
